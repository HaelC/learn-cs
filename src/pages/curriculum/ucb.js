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
          school: { eq: "University of California, Berkeley" }
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

const UCB = ({ data }) => {
  const nodes = data.allMdx.nodes;
  return (
    <Layout>
      <SEO
        title="University of California, Berkeley"
        description="Computer science curriculum in University of California, Berkeley"
      />
      <h1>University of California, Berkeley</h1>
      <h2>Courses</h2>
      <CourseList courses={nodes} />
    </Layout>
  );
};

export default UCB;
