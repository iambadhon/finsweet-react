import React from "react";
import "./ourTeam.css";

const OurTeam = () => {
  return (
    <section className="team">
      <div className="container">
        <div className="team_title">
          <h2>Meet our team</h2>
        </div>
        <div className="team_item_flex">
          <div className="team_item">
            <div className="team_item_img">
              <img src="images/team1.png" alt="Team" />
              <div className="tean_item_img_overlay">
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
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <h5>John Smith</h5>
            <span>CEO</span>
          </div>
          <div className="team_item">
            <div className="team_item_img">
              <img src="images/team2.png" alt="Team" />
              <div className="tean_item_img_overlay">
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
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <h5>Simon Adams</h5>
            <span>CTO</span>
          </div>
          <div className="team_item">
            <div className="team_item_img">
              <img src="images/team3.png" alt="Team" />
              <div className="tean_item_img_overlay">
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
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <h5>Paul Jones</h5>
            <span>Design Lead</span>
          </div>
          <div className="team_item">
            <div className="team_item_img">
              <img src="images/team4.png" alt="Team" />
              <div className="tean_item_img_overlay">
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
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <h5>Sara Hardin</h5>
            <span>Project Manager</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
