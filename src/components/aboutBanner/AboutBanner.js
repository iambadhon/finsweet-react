import React from "react";
import "./aboutBanner.css";

const AboutBanner = () => {
  return (
    <section className="about_banner">
      <div className="container">
        <div className="about_banner_flex">
          <div className="about_banner_text">
            <h6>About us</h6>
            <h1>Our designs solve problems</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div className="about_banner_img">
            <img src="images/about-banner.png" alt="About Banner" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
