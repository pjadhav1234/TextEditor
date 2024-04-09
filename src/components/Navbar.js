import React from 'react';

import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-dark justify-content-center`}>
      <div className="container-fluid justify-content-center">
      <Link className={`navbar text-white text-decoration-none`} style={{ float: 'center' }} to="/">
      Navbar
      </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${props.mode === 'light' ? 'active' : ''} text-white`} aria-current="page" to="/">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">
                ABOUT
              </Link>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

