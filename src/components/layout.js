import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql, Link } from "gatsby";
import { css } from "@emotion/core";
import "./layout.css";

import Header from "./header";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      {/* <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          html,
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
              sans-serif;
            font-size: 18px;
            line-height: 1.4;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            line-height: 1.1;
          }

          li {
            margin-top: 0.25rem;
          }
        `}
      /> */}
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        // style={{
        //   margin: `0 auto`,
        //   maxWidth: 960,
        //   padding: `0 1.0875rem 1.45rem`,
        // }}
        css={css`
          margin: 0 auto;
          max-width: 960px;
        `}
      >
        <main>{children}</main>
        <footer
          css={css`
            position: fixed;
            bottom: 0px;
            height: 30px;
            font-size: 14px;
            width: 100%;
            max-width: 960px;
            color: #999;
            display: flex;
            justify-content: space-around;
          `}
        >
          © {new Date().getFullYear()} by Hael <Link to="/">About</Link>{" "}
          <Link to="/">Contact</Link>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
