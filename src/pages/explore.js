import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import kebabCase from "lodash/kebabCase";
import Img from "gatsby-image";
import { css } from "@emotion/core";
import SEO from "../components/seo";

export const query = graphql`
  query {
    tags: allMdx {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
    icons: allFile(filter: { relativeDirectory: { eq: "icons" } }) {
      nodes {
        childImageSharp {
          fixed(width: 32, height: 32) {
            ...GatsbyImageSharpFixed
          }
        }
        name
      }
    }
  }
`;

const Explore = ({ data }) => {
  const icons = {};
  data.icons.nodes.forEach(icon => {
    icons[icon.name] = icon.childImageSharp;
  });
  const group = data.tags.group;
  group.sort((a, b) => b.totalCount - a.totalCount);
  return (
    <Layout>
      <SEO title="Explore" description="Explore content within Learn CS" />
      <h2>TAGS</h2>
      <ul
        css={css`
          list-style-type: none;
        `}
      >
        {group.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tag/${kebabCase(tag.fieldValue)}`}>
              <div
                css={css`
                  height: 32px;
                  display: flex;
                  align-items: center;
                `}
              >
                {icons[tag.fieldValue] ? (
                  <Img fixed={icons[tag.fieldValue].fixed} />
                ) : (
                  <Img fixed={icons.Default.fixed} />
                )}
                <span
                  css={css`
                    padding-left: 10px;
                  `}
                >
                  {tag.fieldValue === "Cpp" ? "C++" : tag.fieldValue}
                </span>
              </div>
            </Link>
            {/* ({tag.totalCount}) */}
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
