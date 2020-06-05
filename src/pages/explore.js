import React from "react";
import PropTypes from "prop-types";
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
      <h2>TAGS</h2>
      <ul>
        {group.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tag/${kebabCase(tag.fieldValue)}`}>
              {tag.fieldValue === "Cpp" ? "C++" : tag.fieldValue}
            </Link>
            ({tag.totalCount})
          </li>
        ))}
      </ul>
    </Layout>
  );
};

Explore.propTypes = {
  data: PropTypes.shape({
    tags: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
  }),
};

export default Explore;
