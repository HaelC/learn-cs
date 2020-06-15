import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { css } from "@emotion/core";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      css={css`
        position: absolute;
        left: 0;
        width: 100vw;
        height: 80vh;
      `}
    >
      <div
        css={css`
          /* display: flex; */
          height: 50%;
          background: black;
        `}
      >
        <div
          css={css`
            position: absolute;
            margin-left: 50px;
            bottom: 40vh;
            color: white;
            font-size: 28px;
          `}
        >
          Stay Safe & Healthy
        </div>
      </div>
      <div
        css={css`
          height: 50%;
          background: white;
        `}
      >
        <div
          css={css`
            position: absolute;
            top: 40vh;
            margin-left: 50px;
            color: black;
            font-size: 28px;
          `}
        >
          Keep Learning
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
