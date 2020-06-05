import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import CourseList from "../components/courseList";
import { MDXRenderer } from "gatsby-plugin-mdx";

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

const Tags = ({ data }) => {
  const { official, courses } = data;
  return (
    <Layout>
      {official ? (
        <>
          <h2>Official Resource</h2>
          <MDXRenderer>{official.body}</MDXRenderer>
        </>
      ) : null}
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
