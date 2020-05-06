import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <button type="button" className="btn btn-outline-dark">
        <Link to="/" className="text-white">
          Home Page
        </Link>
      </button>
      <button type="button" className="btn btn-outline-dark">
        <Link to="/cases" className="text-white">
          All Cases
        </Link>
      </button>
    </nav>
  );
};

export default NavBar;
