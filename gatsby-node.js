exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
          parent {
            ... on File {
              name
              relativeDirectory
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic("failed to create pages", result.errors);
  }

  const nodes = result.data.allMdx.nodes;

  nodes.forEach(node => {
    actions.createPage({
      path: node.frontmatter.slug,
      component: require.resolve("./src/templates/course.js"),
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });
};
