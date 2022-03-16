import React from "react";
import { Navbar } from "react-bootstrap";
import {NavLink} from "react-router-dom";

function Navigation(props) {
  return (
    <div>
      <Navbar expand="lg" bg="dark" sticky="top">
        <NavLink className="nav-link" to="/">
          <div className="text-light">
            <h4 className="nav-title-font">Aaron Bean</h4>
          </div>
        </NavLink>
        <ul className="navbar-nav ms-auto navitem-indent">
          <li className="nav-item">
            <NavLink to="/About">
              <div className="nav-font text-light p-3">About Me</div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Portfolio">
              <div className="nav-font text-light p-3">Portfolio</div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Contact">
              <div className="nav-font text-light p-3">Contact</div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Resume">
              <div className="nav-font text-light p-3">Resume</div>
            </NavLink>
          </li>
        </ul>
      </Navbar>
    </div>
  );
}

export default Navigation;