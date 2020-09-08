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
      <Img
        fluid={data.image.sharp.fluid}
        alt="TIOBE Programming Language Ranking"
      />
      <p>
        Apart from TIOBE, Stack Overflow has an annual survey about{" "}
        <a
          href="https://insights.stackoverflow.com/survey/2020#technology-most-loved-dreaded-and-wanted-languages-loved"
          target="_blank"
          rel="noreferrer"
        >
          Most Loved, Dreaded, and Wanted Languages
        </a>
      </p>
    </>
  );
};

export default TopLanguages;
