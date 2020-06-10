import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Youtube from "../components/youtube";

const Media = () => (
  <Layout>
    <SEO title="Media" description="Learn CS from various media" />
    <Youtube />
  </Layout>
);

export default Media;
