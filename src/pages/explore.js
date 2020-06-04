import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import kebabCase from "lodash/kebabCase";

export const query = graphql`
  query {
    tags: allMdx {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

const Explore = ({
  data: {
    tags: { group },
  },
}) => {
  group.sort((a, b) => b.totalCount - a.totalCount);
  return (
    <Layout>
      <h2>TOPICS</h2>
      <ul>
        {group.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tag/${kebabCase(tag.fieldValue)}`}>
              {tag.fieldValue}
            </Link>
            ({tag.totalCount})
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Explore;
