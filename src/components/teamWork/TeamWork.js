import React from "react";
import "./teamWork.css";

const TeamWork = ({ padT }) => {
  return (
    <section className="feature_team_work" style={{ paddingTop: `${padT}` }}>
      <div className="container">
        <div className="feature_team_work_title">
          <h2>The benefits of working with us</h2>
        </div>
        <div className="feature_team_work_flex">
          <div className="feature_team_work_item">
            <i className="fa-solid fa-pen-ruler"></i>
            <h5>Customize with ease</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut
              enim.
            </p>
          </div>
          <div className="feature_team_work_item">
            <i className="fa-solid fa-pen-ruler"></i>
            <h5>Perfectly Responsive</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut
              enim.
            </p>
          </div>
          <div className="feature_team_work_item">
            <i className="fa-solid fa-users"></i>
            <h5>Friendly Support</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut
              enim.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamWork;
