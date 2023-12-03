import React from 'react'
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-container">
        <nav className="navbar">
          <h1 className="navbar-logo">SHOP.</h1>
          <Link className="seecarrito" to="/cart">🛒</Link> 
        </nav> 
    </div>
  );
};

export default Navbar;
