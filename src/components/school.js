import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";

export default function School(props) {
  return (
    <div
      css={css`
        padding: 1rem 1rem 2rem 1rem;
        border: 1px solid #ccc;
        border-radius: 6px;
        margin: 1rem 0;
      `}
    >
      <Link
        to={props.url}
        css={css`
          color: black;
          text-decoration: none;
        `}
      >
        <h3>{props.name}</h3>
      </Link>
    </div>
  );
}
