import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav-container">
      <Link className="nav-item" to="/">
        Home
      </Link>
      <Link className="nav-item" to="/cart">
        Cart (0)
      </Link>
    </div>
  );
}

export default Navbar;
