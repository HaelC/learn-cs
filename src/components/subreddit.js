import React from "react";
import { css } from "@emotion/core";
import { svg } from "../constants/reddit";

const Subreddit = ({ subreddit }) => {
  const link = "https://www.reddit.com/" + subreddit.r;
  return (
    <div
      css={css`
        display: flex;
      `}
    >
      <div
        css={css`
          width: 12%;
          margin: 1rem 0.5rem 0 0;
          @media (min-width: 480px) {
            margin: 1rem 2rem 0 1rem;
          }
        `}
      >
        <a href={link} target="_blank" rel="noreferrer">
          {subreddit.avatar ? (
            <img
              src={subreddit.avatar}
              alt="avatar"
              css={css`
                width: 100%;
                height: auto;
                border-radius: 50%;
              `}
            />
          ) : (
            <div dangerouslySetInnerHTML={{ __html: svg }} />
          )}
        </a>
      </div>
      <div
        css={css`
          width: 88%;
        `}
      >
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          css={css`
            color: black;
          `}
        >
          <h3
            css={css`
              margin-bottom: 0;
            `}
          >
            {subreddit.slogan}
          </h3>
        </a>
        <p
          css={css`
            margin-top: 0;
            color: rgb(124, 124, 124);
          `}
        >
          {subreddit.r}
        </p>
        <p>{subreddit.description}</p>
      </div>
    </div>
  );
};

export default Subreddit;
