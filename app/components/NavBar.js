import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="nav">
      <button className="navButton headNavButton">
        <Link to="/" className="navText">
          <h3>Home Page</h3>
        </Link>
      </button>

      <button className="navButton headNavButton">
        <Link to="/cases" className="navText">
          <h3>Find Cases</h3>
        </Link>
      </button>

      <button className="navButton headNavButton">
        <Link to="/caseForm" className="navText">
          <h3>Create a Case</h3>
        </Link>
      </button>
    </nav>
  );
};

export default NavBar;
