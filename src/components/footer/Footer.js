import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer_main">
        <div className="container">
          <div className="footer_flex">
            <div className="footer_left">
              <div className="footer_logo">
                <Link to="/">
                  <img src="images/logo.png" alt="Logo" />
                </Link>
              </div>
              <p>
                We are always open to discuss your project and improve your
                online presence.
              </p>
              <div className="contact_via">
                <div className="via_email">
                  <h6>Email me at</h6>
                  <p>contact@website.com</p>
                </div>
                <div className="via_call">
                  <h6>Call us</h6>
                  <p>0927 6277 28525</p>
                </div>
              </div>
            </div>
            <div className="footer_right">
              <h2>Lets Talk!</h2>
              <p>
                We are always open to discuss your project, improve your online
                presence and help with your UX/UI design challenges.
              </p>
              <div className="social">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="copyright_flex">
            <div className="copyright_text">
              <Link to="/policy">Copyright 2022, Finsweet.com</Link>
            </div>
            <div className="footer_menu">
              <ul>
                <li>
                  <Link to="/">Home</Link>
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
