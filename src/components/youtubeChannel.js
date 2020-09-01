import React from "react";
import { css } from "@emotion/core";

const YoutubeChannel = props => {
  const channel = props.channel;
  return (
    <div
      css={css`
        display: flex;
      `}
    >
      <div
        css={css`
          /* flex-grow: 1; */
          width: 12%;
          /* margin: 1rem 2rem 0 1rem; */
          margin: 1rem 0.5rem 0 0;
          @media (min-width: 480px) {
            margin: 1rem 2rem 0 1rem;
          }
        `}
      >
        <a href={channel.link} target="_blank" rel="noreferrer">
          <img
            src={`avatars/youtube/${channel.avatar}`}
            alt="avatar"
            css={css`
              max-width: 100%;
              border-radius: 50%;
            `}
          />
        </a>
      </div>
      <div
        css={css`
          /* flex-grow: 2; */
          width: 88%;
        `}
      >
        <a href={channel.link} target="_blank" rel="noreferrer">
          <h3>{channel.name}</h3>
        </a>
        <p>{channel.description}</p>
      </div>
    </div>
  );
};

export default YoutubeChannel;
