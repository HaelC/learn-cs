import React from "react";
import Layout from "../components/layout";

export default function About() {
  return (
    <Layout>
      <h2>About Me</h2>
      <p>
        Hi there! This is Hael. I am a graduate student pursuing Master of
        Science in Computer Science at Northeastern University - Seattle campus.
        My undergraduate major is electrical computer engineering. I would like
        to find various resources to enrich my computer science knowledge. And I
        would like to share those resources with you.
      </p>
      <p>You can connect with me on social media:</p>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/haoliang-chen/">LinkedIn</a>
        </li>
        <li>
          <a href="https://github.com/HaelChan">GitHub</a>
        </li>
        <li>
          <a href="https://haelchan.me">My Blog</a>
        </li>
      </ul>
    </Layout>
  );
}
