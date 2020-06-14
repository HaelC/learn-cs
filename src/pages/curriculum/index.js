import React from "react";
import PropTypes from "prop-types";
import Layout from "../../components/layout";
import School from "../../components/school";
import { graphql } from "gatsby";
import CourseList from "../../components/courseList";
import SEO from "../../components/seo";

export const query = graphql`
  query {
    allMdx(filter: { frontmatter: { type: { eq: "course" } } }) {
      nodes {
        frontmatter {
          school
          course_name
          course_number
          slug
        }
      }
    }
  }
`;

const CurriculumIndex = ({ data }) => {
  const courses = data.allMdx.nodes;
  return (
    <Layout>
      <SEO
        title="Curriculum"
        description="Computer science curriculum provided by top universities: Stanford, CMU, MIT and UC Berkeley"
      />
      <h1>Curriculum of Top Universities in Computer Science</h1>
      <h2 className="section-header">Universities</h2>
      <School url="/curriculum/stanford/" name="Stanford University" />
      <School
        url="/curriculum/mit/"
        name="Massachusetts Institute of Technology"
      />
      <School url="/curriculum/cmu/" name="Carnegie Mellon University" />
      <School
        url="/curriculum/ucb/"
        name="University of California, Berkeley"
      />
      <p>
        Here I just list the top 4 cs universities. Might include more in the
        future.
      </p>
      <h2 className="section-header">Selected Courses</h2>
      <CourseList courses={courses} />
    </Layout>
  );
};

CurriculumIndex.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CurriculumIndex;
