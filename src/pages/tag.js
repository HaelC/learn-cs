import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

export const query = graphql`
  query {
    allMdx {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

const Explore = ({
  data: {
    allMdx: { group },
  },
}) => {
  group.sort((a, b) => b.totalCount - a.totalCount);
  return (
    <Layout>
      <h2>Tags</h2>
      <ul>
        {group.map(tag => (
          <li key={tag.fieldValue}>
            <Link to="/">{tag.fieldValue}</Link>({tag.totalCount})
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Explore;
