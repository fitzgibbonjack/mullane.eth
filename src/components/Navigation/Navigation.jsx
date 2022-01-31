import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import React, { useEffect, useState } from "react";
import Hamburger from "../Hamburger/Hamburger";
import "./Navigation.scss";

export const expandedContext = React.createContext();

export default function Navigation({ color }) {
  const [expanded, setExpanded] = useState(false);
  const [scrollUp, setScrollUp] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const handleClick = () => {
    if (expanded === true) setExpanded(false);
  };

  return (
    <expandedContext.Provider value={expanded}>
      <header id="main" aria-label="primary" style={{ background: `${color}` }}>
        <nav aria-label="primary" className="nav container">
          <HashLink to="/#main" onClick={handleClick} tabIndex={0}>
            <img className="nav__logo" src="assets/logo.svg" alt="logo" />
          </HashLink>

          <ul
            className={`nav__links ${expanded ? "visible" : ""}`}
            id="nav__links"
          >
            <li>
              <Link to="/about" onClick={handleClick}>
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={handleClick}>
                Projects
              </Link>
            </li>
            <li>
              <HashLink to="/#contact" onClick={handleClick}>
                Contact
              </HashLink>
            </li>
          </ul>

          <Hamburger onClick={toggleExpanded} />
        </nav>
      </header>
    </expandedContext.Provider>
  );
}
