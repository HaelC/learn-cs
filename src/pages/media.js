import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Youtube from "../components/youtube";
import Reddit from "../components/reddit";

const Media = () => (
  <Layout>
    <SEO title="Media" description="Learn CS from various media" />
    <Youtube />
    <Reddit />
  </Layout>
);

export default Media;
