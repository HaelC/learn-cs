import React from "react";
import { css } from "@emotion/core";

const TopicHeader = ({ title, subtitle }) => (
  <div
    css={css`
      position: absolute;
      left: 0;
      width: 100vw;
      height: 30vh;
      background: black;
    `}
  >
    Hello
  </div>
);

export default TopicHeader;
