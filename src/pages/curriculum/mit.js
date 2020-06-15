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
      <h2>MIT OpenCourseWare (OCW)</h2>
      <blockquote>
        <a
          href="https://ocw.mit.edu/index.htm"
          target="_blank"
          rel="noreferrer"
        >
          MIT OpenCourseWare
        </a>{" "}
        makes the materials used in the teaching of almost all of MIT's subjects
        available on the Web, free of charge. With more than 2,400 courses
        available, OCW is delivering on the promise of open sharing of
        knowledge.
      </blockquote>
      <p>
        <a
          href="https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/"
          target="_blank"
          rel="noreferrer"
        >
          Here
        </a>{" "}
        you can see a list of Electrical and Computer Science courses. It covers
        most if not all of the courses at Department of Electrical Engineering
        and Computer Science. Some courses' material might be a bit old (over 10
        years) but it's okay. Most of the knowledge will not be out of date. And
        we can find the newer course website on our own.
      </p>
      <p>
        <a
          href="https://ocw.mit.edu/courses/most-visited-courses/"
          target="_blank"
          rel="noreferrer"
        >
          Here
        </a>{" "}
        is a selection of the most visited courses at OCW based on the site
        traffic of the previous month. Most course numbers start with 6 or 18.
        Which means computer science courses, as well as mathematics courses,
        are quite popular. By the way, mathematics is quite important,
        especially is you want to dive into the field of artifical intelligence
        or data science. Calculus, linear algebra, discrete mathematics,
        probability and statistics are the core mathematics courses for computer
        science students.
      </p>
    </Layout>
  );
};

export default MIT;
