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
          school: { eq: "Stanford University" }
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

const Stanford = ({ data }) => {
  const nodes = data.allMdx.nodes;
  return (
    <Layout>
      <SEO
        title="Stanford University"
        description="Computer science curriculum in Stanford University"
      />
      <h2>Stanford University</h2>
      <h3>Courses</h3>
      <p>
        Here is the link of computer science courses at Stanford University.
        https://cs.stanford.edu/academics/courses
      </p>
      <CourseList courses={nodes} />
      <h3>YouTube</h3>
      <p>
        There are several YouTube channels about Stanford University. Here are
        the three channels that I know: <em>Stanford</em>,{" "}
        <em>Stanford University School of Engineering</em> and{" "}
        <em>stanfordonline</em>. Each channel shares some course videos about
        computer science, as well as some other discplines. It's a bit confusing
        and I'd sugguest subscribing all of these channels.
      </p>
      <ul>
        <li>
          <a href="https://www.youtube.com/user/StanfordUniversity/playlists">
            Stanford
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/user/stanfordeng/playlists">
            Stanford University School of Engineering
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/user/stanfordonline/playlists">
            stanfordonline
          </a>
        </li>
      </ul>
      <h3>Stanford Online</h3>
      <blockquote>
        Stanford Online offers you a front row seat to some of the brightest
        minds at Stanford. Our robust catalog of global and extended education
        provides a variety of ways to expand your learning, advance your career,
        and enhance your life. <br />
        Choose from graduate and professional certificates, advanced degrees,
        global and executive education programs, lifelong learning, and free
        content. Engage with faculty, industry, and other learners — online, on
        campus, at work, and around the world.
        <br />
        Stanford Online is a part of the Stanford Center for Professional
        Development, a pioneer in extended education since 1995. We are located
        on the Stanford University campus, where intellectual curiosity and an
        innovative spirit thrives. We work closely with Stanford schools,
        departments, programs, and centers to develop a robust catalog of
        courses and programs to meet your needs.
      </blockquote>
    </Layout>
  );
};

Stanford.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Stanford;
