import React from "react";
import { graphql } from "gatsby";
import { css } from "@emotion/core";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout";

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        course_number
        course_name
        level
        video
        slide
        assignment
        exam
      }
      body
    }
  }
`;

const CourseTemplate = ({ data: { mdx: course } }) => (
  <Layout>
    <h1>
      {course.frontmatter.course_number + " " + course.frontmatter.course_name}
    </h1>
    <MDXRenderer>{course.body}</MDXRenderer>
  </Layout>
);

export default CourseTemplate;
