import React from "react";
import "./mission.css";

const Mission = () => {
  return (
    <section className="mission">
      <div className="container">
        <div className="mission_flex">
          <div className="mission_text">
            <span>Our Mission</span>
            <h3>Inspire, Innovate, Share</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="mission_img">
            <img src="images/our-mission.png" alt="Our Mission" />
          </div>
        </div>
        <div className="mission_flex">
          <div className="mission_img">
            <img src="images/our-vision.png" alt="Our Vision" />
          </div>
          <div className="mission_text">
            <span>Our Mission</span>
            <h3>Laser focus</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
