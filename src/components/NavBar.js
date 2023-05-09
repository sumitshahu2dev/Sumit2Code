import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export class NavBar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              News
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    end
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink end className="nav-link" to="/About">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink end className="nav-link" to="/Business">
                    Business
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink end className="nav-link" to="/Entertainment">
                    Entertainment
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink end className="nav-link" to="/Science">
                    Science
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink end className="nav-link" to="/Sports">
                    Sports
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink end className="nav-link" to="/Technology">
                    Technology
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink end className="nav-link" to="/General">
                    General
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default NavBar;