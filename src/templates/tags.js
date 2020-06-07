import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import CourseList from "../components/courseList";
import { MDXRenderer } from "gatsby-plugin-mdx";
import SEO from "../components/seo";

export const query = graphql`
  query($tag: String) {
    official: mdx(
      frontmatter: { tags: { eq: $tag }, type: { eq: "official" } }
    ) {
      body
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
  const { official, courses } = data;
  const title = pageContext.tag === "Cpp" ? "C++" : pageContext.tag;
  return (
    <Layout>
      <SEO title={title} />
      {official ? <MDXRenderer>{official.body}</MDXRenderer> : null}
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
