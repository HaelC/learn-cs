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
          <h3>Start your journey in the world of computer science</h3>
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
          However, there are so many resources online, even here at Learn CS
          site. You may just wonder, "where should I start?". Fortunately, here
          you can find the answer.
        </p>
        <p>
          <em>Personally</em>, I would divide the process into four stages:{" "}
          <a href="#programming-language">Programming Language</a>, Data
          Structure and Algorithm, System and Application, and Infinity
          Possibilities. These stages are not strictly sequential, and you will
          go back and forth during your learning process. But now let's go
          through these stages in order.
        </p>
        <h3 id="programming-language">Programming Language</h3>
        <p>
          To communicate with people, we need to use a common language (e.g.,
          English) so that we can understand each other. Similarly, When we want
          to "talk" to computers, we need programming languages.
        </p>
        <p>
          Just like human languages, there are various programming languages as
          well. You might have heard some of them: C, C++, Java, JavaScript,
          Python, Go, etc.
        </p>
        <p>
          Here are some suggestions to choose which programming language to
          learn:
        </p>
        <ul>
          <li>
            If you are going to learn your first programming language, then
            there are 3 programming languages that are taught most in
            introductory programming courses at university: C, Java and Python.
            <ul>
              <li>
                Compared with Java and Python, C is relatively a lower level
                programming language. It is "simple": it does not include many
                built-in data structures, nor is it an object-oriented
                programming (OOP) language. However, it has the concept of{" "}
                <em>pointer</em>, which means programmers can directly manage
                the memory, but also brings much confusion to beginners. C plays
                an important role when dealing with the underlying part of
                computer, like computer system or operating system.
              </li>
              <li>
                Java is one of the most widely-used programming languages around
                the world. It provides abundant APIs (application programming
                interface) and strong community support.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default gettingStarted;
