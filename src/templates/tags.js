import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import CourseList from "../components/courseList";

export const query = graphql`
  query($tag: String) {
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
  const { courses } = data;
  return (
    <Layout>
      <h2>Courses</h2>
      <CourseList courses={courses.nodes} />
    </Layout>
  );
};

export default Tags;
