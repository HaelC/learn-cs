import React from "react";
import Subreddit from "./subreddit";
import subreddits from "../constants/reddit";

const Reddit = () => (
  <>
    <h1>Reddit</h1>
    <h2>Subreddits</h2>
    {subreddits.map(subreddit => (
      <Subreddit key={subreddit.r} subreddit={subreddit} />
    ))}
  </>
);

export default Reddit;
