import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="nav">
      <button className="button">
        <Link to="/" className="navText">
          Home Page
        </Link>
      </button>
      <button className="button">
        <Link to="/cases" className="navText">
          Find Cases
        </Link>
      </button>
    </nav>
  );
};

export default NavBar;
