import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout";

export const query = graphql`
  query($slug: String!) {
    mdx(
      frontmatter: { slug: { eq: $slug } }
      fileAbsolutePath: { glob: "**/index.mdx" }
    ) {
      frontmatter {
        school
      }
      body
    }
  }
`;

const SchoolTemplate = ({ data: { mdx: school } }) => (
  <Layout>
    <h1>{school.frontmatter.school}</h1>
    <MDXRenderer>{school.body}</MDXRenderer>
  </Layout>
);

export default SchoolTemplate;
