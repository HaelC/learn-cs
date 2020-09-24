import React from "react";
import { Link } from "gatsby";
import _ from "lodash";

const Glossary = ({ glossary }) => {
  const tag =
    glossary.frontmatter.tag === "Cpp" ? "C++" : glossary.frontmatter.tag;
  return (
    <>
      <h2>Glossary</h2>
      <p>
        {glossary.frontmatter.overview}{" "}
        <Link to={`glossary/${_.kebabCase(glossary.frontmatter.tag)}`}>
          {`Click to view glossary in ${tag}.`}
        </Link>
      </p>
    </>
  );
};

export default Glossary;
