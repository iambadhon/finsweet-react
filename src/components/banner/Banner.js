import React from "react";
import { Link } from "react-router-dom";
import "./banner.css";
const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="banner_flex">
          <div className="banner_text">
            <h1>Building stellar websites for early startups</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <div className="banner_btn cmn_btn2">
              <Link to="/portfolio">View our work</Link>
              <Link to="/price">
                View Pricing <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
          <div className="banner_img">
            <img src="images/banner.png" alt="Banner" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
