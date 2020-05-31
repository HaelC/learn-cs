// import React from "react";
// import { graphql } from "gatsby";
// import { css } from "@emotion/core";
// import SEO from "../components/seo";
// import Layout from "../components/layout";

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         school
//       }
//       html
//       excerpt
//     }
//   }
// `;

// export default function School({ data }) {
//   const school = data.markdownRemark;
//   return (
//     <Layout>
//       <SEO title={school.frontmatter.name} description={school.excerpt}>
//         <h1>Created Page: {school.frontmatter.name}</h1>
//         <div dangerouslySetInnerHTML={{ __html: school.html }} />
//       </SEO>
//     </Layout>
//   );
// }
