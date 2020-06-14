import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import CourseList from "../../components/courseList";
import SEO from "../../components/seo";

export const query = graphql`
  query {
    allMdx(
      filter: {
        frontmatter: {
          school: { eq: "Carnegie Mellon University" }
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

const CMU = ({ data }) => {
  const nodes = data.allMdx.nodes;
  return (
    <Layout>
      <SEO
        title="Carnegie Mellon University"
        description="Computer science curriculum in Carnegie Mellon University"
      />
      <h1>Carnegie Mellon University</h1>
      <h2>Courses</h2>
      <p>
        <a
          href="https://enr-apps.as.cmu.edu/open/SOC/SOCServlet/search"
          target="_blank"
          rel="noreferrer"
        >
          Here
        </a>{" "}
        you can retrieve courses provided by School of Computer Science at
        Carnegie Mellon University.
      </p>
      <CourseList courses={nodes} />
      <h2>Video</h2>
      There is a{" "}
      <a
        href="https://scs.hosted.panopto.com/Panopto/Pages/Sessions/List.aspx#sortColumn=1&sortAscending=false&maxResults=250"
        target="_blank"
        rel="noreferrer"
      >
        video platform
      </a>{" "}
      powered by Panopto, where there are a lot of videos available to public,
      including some of the latest videos (lecture, seminar, etc) about computer
      science. Not so many, some of them might be useful if you are interested.
      <ul>
        <li>
          <a
            href="https://scs.hosted.panopto.com/Panopto/Pages/Sessions/List.aspx#folderID=%22a15edd8e-782f-4ea0-8923-ab3d01099269%22"
            target="_blank"
            rel="noreferrer"
          >
            Spring 2020: 10-708 Probabilistic Graphical Models
          </a>
        </li>
        <li>
          <a
            href="https://scs.hosted.panopto.com/Panopto/Pages/Sessions/List.aspx#folderID=%22618ea253-ca45-4b14-9f1d-aab501543bd2%22"
            target="_blank"
            rel="noreferrer"
          >
            Fall 2019: 15-388 Practical Data Science (Public)
          </a>
        </li>
        <li>
          <a
            href="https://scs.hosted.panopto.com/Panopto/Pages/Sessions/List.aspx#folderID=%2252a75ce9-84c7-4c75-8e16-a93b0120d253%22"
            target="_blank"
            rel="noreferrer"
          >
            Fall 2018: 05-863 Intro to Human Computer Interaction for Technology
            Executives
          </a>
        </li>
        <li>
          <a
            href="https://scs.hosted.panopto.com/Panopto/Pages/Sessions/List.aspx#folderID=%222e05ff30-48ba-4598-9f70-a9430132b706%22"
            target="_blank"
            rel="noreferrer"
          >
            Fall 2018: 10-725 Convex Optimization
          </a>
        </li>
        <li>
          <a
            href="https://scs.hosted.panopto.com/Panopto/Pages/Sessions/List.aspx#folderID=%22a5862643-2416-49ef-b46b-13465d1b6df0%22"
            target="_blank"
            rel="noreferrer"
          >
            Spring 2015: 15-418 Parallel Computer Architecture and Programming
          </a>
        </li>
        <li>
          <a
            href="https://scs.hosted.panopto.com/Panopto/Pages/Sessions/List.aspx#folderID=%22bcf8243e-cf18-481f-960f-3c5b26fbb69b%22"
            target="_blank"
            rel="noreferrer"
          >
            Spring 2015: 15-251 Great Theoretical Ideas in Computer Science
          </a>
        </li>
      </ul>
    </Layout>
  );
};

CMU.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CMU;
