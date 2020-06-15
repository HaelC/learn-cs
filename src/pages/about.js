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
      <h2>About LearnCS</h2>
      <p>
        LearnCS is an{" "}
        <a href="https://github.com/HaelChan/learn-cs">open-source</a> website
        aiming to help programmers - from novice to experienced - to find
        resources to learn computer science. It covers a lot of topics and
        provides relevant links and courses. Hope it could be helpful!
      </p>
      <p>It is still under developing and more features are coming.</p>
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
        <li>
          <a href="mailto:f.procumbens@gmail.com">Email</a>
        </li>
      </ul>
      <p>
        Hi there! This is Hael. I am a graduate student pursuing Master of
        Science in Computer Science degree at Northeastern University - Seattle
        campus, and a Software Development Engineer Intern at Expedia Group. My
        undergraduate major is electrical computer engineering, which is more
        about hardware. However, I don't like hardware at all. Therefore I would
        find various resources to enrich my computer science knowledge. I am
        still seeking now. And I would like to share those resources with you.
        Honestly, for most content shared at LearnCS, I just hear of them, or
        planed to study them but never started. Anyway, as a programmer, just
        keep learning. And stay safe and healthy during these times.
      </p>
    </Layout>
  );
}
