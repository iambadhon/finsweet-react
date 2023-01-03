import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav_main">
          <div className="logo">
            <Link to="/">
              <img src="images/logo.png" alt="logo" />
            </Link>
          </div>
          <div className="mav_item">
            <ul>
              <li>
                <Link className="active" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/feature">Features</Link>
              </li>
              <li>
                <Link to="/price">Pricing</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li className="nav_btn cmn_btn2">
                <Link to="/contact">Contact us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
