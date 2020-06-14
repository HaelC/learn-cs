import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { css } from "@emotion/core";

export default function About() {
  return (
    <Layout>
      <SEO
        title="About"
        description="Something about Learn CS, and something about Hael"
      />
      <h2>About Me</h2>
      <ul
        css={css`
          display: flex;
          justify-content: space-around;
          list-style: none;
          padding: 0;
        `}
      >
        <li>
          <a
            href="https://www.linkedin.com/in/haoliang-chen/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/HaelChan"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a href="https://haelchan.me" target="_blank" rel="noreferrer">
            Blog
          </a>
        </li>
      </ul>
      <p>
        Hi there! This is Hael. I am a graduate student pursuing Master of
        Science in Computer Science at Northeastern University - Seattle campus.
        My undergraduate major is electrical computer engineering. I would like
        to find various resources to enrich my computer science knowledge. And I
        would like to share those resources with you.
      </p>
    </Layout>
  );
}
