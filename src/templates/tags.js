import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import CourseList from "../components/courseList";
import { MDXRenderer } from "gatsby-plugin-mdx";
import SEO from "../components/seo";
import Glossary from "../components/glossary";

export const query = graphql`
  query($tag: String) {
    official: mdx(
      frontmatter: { tags: { eq: $tag }, type: { eq: "official" } }
    ) {
      body
    }
    glossary: mdx(
      frontmatter: { tag: { eq: $tag }, type: { eq: "glossary" } }
    ) {
      frontmatter {
        tag
        overview
      }
    }
    courses: allMdx(
      filter: { frontmatter: { tags: { in: [$tag] }, type: { eq: "course" } } }
    ) {
      totalCount
      nodes {
        frontmatter {
          course_name
          course_number
          school
          slug
        }
      }
    }
  }
`;

const Tags = ({ data, pageContext }) => {
  const { official, glossary, courses } = data;
  const title = pageContext.tag === "Cpp" ? "C++" : pageContext.tag;
  return (
    <Layout>
      <SEO title={title} />
      <h1>{title}</h1>
      {official ? <MDXRenderer>{official.body}</MDXRenderer> : null}
      {glossary ? <Glossary glossary={glossary} /> : null}
      {courses.totalCount ? (
        <>
          <h2>Courses</h2>
          <CourseList courses={courses.nodes} />
        </>
      ) : null}
    </Layout>
  );
};

export default Tags;
