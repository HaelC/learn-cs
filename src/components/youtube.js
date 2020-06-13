import React from "react";
import YoutubeChannel from "./youtubeChannel";
import channels from "../constants/youtube";

const Youtube = () => {
  return (
    <div>
      <h1>YouTube</h1>
      <h2>Channels</h2>
      {channels.map(channel => (
        <YoutubeChannel key={channel.link} channel={channel} />
      ))}
    </div>
  );
};

export default Youtube;
