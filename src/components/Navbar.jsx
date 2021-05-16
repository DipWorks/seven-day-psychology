import React from "react";
import logo from "../images/logo.png";

function Navbar(props) {
  return (
    <nav className="navbar text-navlink navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img className="appLogo" src={logo} alt="logo seven day psychology" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                COUNCELLORS
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                ABOUT US
              </a>
            </li>
          </ul>
          <div className="dropdown">
            <a
              className="btn btn-secondary dropdown-toggle ml-4"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              LOGIN AS
            </a>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <a className="dropdown-item" href="#">
                  COUNCELLOR
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  CLIENT
                </a>
              </li>
            </ul>
          </div>
          <form className="d-flex ml-auto">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search counsellors"
              aria-label="Search"
            />
            <button className="btn btn-outline-secondary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
