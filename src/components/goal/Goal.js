import React from "react";
import "./goal.css";

const Goal = () => {
  return (
    <section className="goal">
      <div className="container">
        <div className="goal_flex">
          <div className="goal_text">
            <h6>Who we are</h6>
            <h3>Goal focussed</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="goal_text">
            <h3>Continuous improvement</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="goal_img">
            <img src="images/goal.png" alt="Goal" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Goal;
