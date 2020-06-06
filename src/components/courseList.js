import React from "react";
import { Link } from "gatsby";
// import { css } from "@emotion/core";

const CourseList = ({ courses }) => {
  const sortedCourses = courses;
  sortedCourses.sort((a, b) =>
    a.frontmatter.course_number > b.frontmatter.course_number ? 1 : -1
  );
  return (
    <>
      <ul>
        {sortedCourses.map(course => {
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
};

export default CourseList;
