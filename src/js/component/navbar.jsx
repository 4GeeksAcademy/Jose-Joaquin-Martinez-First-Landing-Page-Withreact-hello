// Navbar.jsx
import React from "react";
import "../../styles/navbar-style.css";

const NavBar = () => {
  return (
    <nav className="navbar-header navbar navbar-expand-lg navbar-light bg-dark">
      <div className="navbar-container container-fluid">
        <div>
          <a className="navbar-brand text-light" href="#">
            Trailblazer Outfitters 🧙🏻‍♂️
          </a>
        </div>
        <div>
          <button
            className="navbar-toggler text-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse text-light"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav justify-content-end">
              <a
                className="nav-link active text-light "
                aria-current="page"
                href="#"
              >
                Home
              </a>
              <a className="nav-link text-light" href="#">
                Clarivendence
              </a>
              <a className="nav-link text-light" href="#">
                Wizard Services
              </a>
              <a className="nav-link text-light" href="#" tabIndex="-1">
                Send an Owl
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
