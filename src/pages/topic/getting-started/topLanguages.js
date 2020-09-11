import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const TopLanguages = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "getting-started/TIOBE.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <>
      Here is the diagram of{" "}
      <a
        href="https://www.tiobe.com/tiobe-index/"
        target="_blank"
        rel="noreferrer"
      >
        TIOBE Index for September 2020
      </a>
      :
      <Img
        fluid={data.image.sharp.fluid}
        alt="TIOBE Programming Language Ranking"
      />
      <p>
        Apart from TIOBE, Stack Overflow has a{" "}
        <a
          href="https://insights.stackoverflow.com/survey/2020#technology-most-loved-dreaded-and-wanted-languages"
          target="_blank"
          rel="noreferrer"
        >
          developer survey
        </a>{" "}
        where we can see the Most Loved, Dreaded, and Wanted Languages among
        developers. GitHub's Octoverse also shows the{" "}
        <a
          href="https://octoverse.github.com/#top-languages-over-time"
          target="_blank"
          rel="noreferrer"
        >
          top languages over time
        </a>
        , and{" "}
        <a
          href="https://madnight.github.io/githut"
          target="_blank"
          rel="noreferrer"
        >
          GitHut
        </a>{" "}
        (a non-official website) shows more detailed statistics on different
        programming languages on GitHub.
      </p>
    </>
  );
};

export default TopLanguages;
