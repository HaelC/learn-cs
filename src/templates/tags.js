import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";

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
      <ul>
        {courses.nodes.map(course => (
          <li key={course.frontmatter.slug}>
            <Link to={course.frontmatter.slug}>
              {course.frontmatter.school}: {course.frontmatter.course_number}{" "}
              {course.frontmatter.course_name}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Tags;
