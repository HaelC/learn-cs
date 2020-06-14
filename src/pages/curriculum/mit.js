import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import CourseList from "../../components/courseList";

export const query = graphql`
  query {
    allMdx(
      filter: {
        frontmatter: {
          school: { eq: "Massachusetts Institute of Technology" }
          type: { eq: "course" }
        }
      }
    ) {
      nodes {
        frontmatter {
          slug
          course_name
          course_number
        }
      }
    }
  }
`;

const MIT = ({ data }) => {
  const nodes = data.allMdx.nodes;
  return (
    <Layout>
      <SEO
        title="Massachusetts Institute of Technology"
        description="Computer science curriculum in Massachusetts Institute of Technology"
      />
      <h1>Massachusetts Institute of Technology</h1>
      <h2>Courses</h2>
      <CourseList courses={nodes} />
    </Layout>
  );
};

export default MIT;
