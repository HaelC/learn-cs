import React from "react";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import "../topic.css";
import gettingStartedBackground from "../../../images/background/gettingStarted.jpg";
import { css } from "@emotion/core";
import Foreword from "./foreword";
import ProgrammingLanguage from "./programmingLanguage";
import LanguageSuggestion from "./languageSuggestion";

// export const query = graphql`
//   query {
//     image: file(relativePath: { eq: "getting-started/TIOBE.png" }) {
//       sharp: childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `;

const gettingStarted = ({ data }) => {
  return (
    <Layout>
      <SEO title="Getting Started" />
      <div
        className="topic-header"
        css={css`
          background-image: url(${/*data.image.sharp.fluid.src*/ gettingStartedBackground});
          background-position: left;
        `}
      >
        <div
          className="headline"
          css={css`
            background: rgba(200, 200, 200, 0.9);
          `}
        >
          <h2>Getting Started</h2>
          <h3>Start your journey in the world of computer science</h3>
        </div>
      </div>
      <div className="topic-content">
        <Foreword />
        <ProgrammingLanguage />
        <LanguageSuggestion />
      </div>
    </Layout>
  );
};

export default gettingStarted;
