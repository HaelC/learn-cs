import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faPhotoVideo,
  faCompass,
} from "@fortawesome/free-solid-svg-icons";

const NavLink = styled(Link)`
  color: #222;
  text-decoration: none;
  font-size: 1rem;
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;

  &.current-page {
    font-weight: bold;
    color: black;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

const Header = ({ siteTitle }) => (
  <header
    css={css`
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 1rem;
    `}
  >
    <Link
      to="/"
      css={css`
        display: inline-block;
        color: black;
        text-decoration: none;
        padding-left: 2rem;
      `}
    >
      <h3
        css={css`
          margin: 0;
        `}
      >
        {siteTitle}
      </h3>
    </Link>
    <nav>
      <NavLink to="/curriculum" activeClassName="current-page">
        <FontAwesomeIcon icon={faGraduationCap} /> Curriculum
      </NavLink>
      {/* <NavLink to="/platform" activeClassName="current-page">
        Platform
      </NavLink> */}
      <NavLink to="/media" activeClassName="current-page">
        <FontAwesomeIcon icon={faPhotoVideo} /> Media
      </NavLink>
      <NavLink to="/explore" activeClassName="current-page">
        <FontAwesomeIcon icon={faCompass} /> Explore
      </NavLink>
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
