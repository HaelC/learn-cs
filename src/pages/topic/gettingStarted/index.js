import React from "react";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import "../topic.css";
import gettingStartedBackground from "../../../images/background/gettingStarted.jpg";
// import { graphql, useStaticQuery } from "gatsby";
import { css } from "@emotion/core";

// export const query = graphql`
//   query {
//     image: file(relativePath: { eq: "background/gettingStarted.jpg" }) {
//       sharp: childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `;

const gettingStarted = () => {
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
          <h3>Start your journey in the world of computer science.</h3>
        </div>
      </div>
      <div className="topic-content">
        <h3>Foreword</h3>
        <p>
          Welcome to Learn CS and welcome to the fancy world of computer
          science! There might be various reasons to learn computer science:
          write tools to handle the repetitious tasks to make your life easier;
          develop websites and applications that might potentially have millions
          of users; or maybe just want to become a software engineer and earn a
          lot of money. Whatever the reason is, it's never to late to get
          started.
        </p>
        <p>
          However, there are so many resources online. Even here at Learn CS
          site, there are a lot of courses, tags, etc. You may just wonder,
          "where should I start?". And here we are.
        </p>
      </div>
    </Layout>
  );
};

export default gettingStarted;
