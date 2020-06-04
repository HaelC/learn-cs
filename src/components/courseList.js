import React from "react";
import { Link } from "gatsby";
// import { css } from "@emotion/core";

const CourseList = ({ courses }) => (
  <>
    <ul>
      {courses.map(course => {
        const fm = course.frontmatter;
        return (
          <li key={fm.slug}>
            <Link to={fm.slug}>
              {`${fm.school ? fm.school + ": " : ""}${fm.course_number} ${
                fm.course_name
              }`}
            </Link>
          </li>
        );
      })}
    </ul>
  </>
);

export default CourseList;
