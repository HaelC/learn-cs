import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { MDXRenderer } from "gatsby-plugin-mdx";
import SEO from "../components/seo";

export const query = graphql`
  query($tag: String) {
    mdx(frontmatter: { tag: { eq: $tag }, type: { eq: "glossary" } }) {
      body
    }
  }
`;

const Glossary = ({ data, pageContext }) => {
  const title = `Glossary in ${
    pageContext.tag === "Cpp" ? "C++" : pageContext.tag
  }`;
  return (
    <Layout>
      <SEO title={title} />
      <h1>{title}</h1>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  );
};

export default Glossary;
