const _ = require("lodash");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      content: allMdx(
        filter: { frontmatter: { type: { nin: ["official", "glossary"] } } }
      ) {
        nodes {
          frontmatter {
            slug
            type
          }
        }
      }
      tagsGroup: allMdx {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
      glossary: allMdx(filter: { frontmatter: { type: { eq: "glossary" } } }) {
        nodes {
          frontmatter {
            tag
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic("failed to create pages", result.errors);
  }

  const nodes = result.data.content.nodes;

  nodes.forEach(node => {
    createPage({
      path: node.frontmatter.slug,
      component: require.resolve(`./src/templates/${node.frontmatter.type}.js`),
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });

  const tags = result.data.tagsGroup.group;
  tags.forEach(tag => {
    createPage({
      path: `tag/${_.kebabCase(tag.fieldValue)}`,
      component: require.resolve(`./src/templates/tags.js`),
      context: {
        tag: tag.fieldValue,
      },
    });
  });

  const glossary = result.data.glossary.nodes;
  glossary.forEach(gloss => {
    createPage({
      path: `glossary/${_.kebabCase(gloss.frontmatter.tag)}`,
      component: require.resolve(`./src/templates/glossary.js`),
      context: {
        tag: gloss.frontmatter.tag,
      },
    });
  });
};
