import React, { useContext } from "react";
import { expandedContext } from "../Navigation/Navigation";
import "./Hamburger.scss";

function Hamburger(props) {
  const navExpanded = useContext(expandedContext);

  return (
    <button
      className={`hamburger ${navExpanded ? "visible" : ""}`}
      aria-expanded={navExpanded ? "true" : "false"}
      aria-controls="nav__links"
      aria-label="menu toggle"
      onClick={props.onClick}
      type="button"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}

export default Hamburger;
