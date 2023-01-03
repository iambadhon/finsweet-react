import React from "react";
import { Link } from "react-router-dom";
import ReuseableOurWork from "../../reuseableComponent/reuseableOurWork/ReuseableOurWork";
import "./ourWork.css";

const OurWork = () => {
  return (
    <section className="our_work">
      <div className="container">
        <div className="our_work_flex">
          <div className="our_work_text">
            <h2>How we work</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <div className="our_work_btn cmn_btn">
              <Link to="/contact">
                Get in touch with us
                <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
          <div className="our_work_item_main">
            <div className="our_work_item_main_flex">
              <ReuseableOurWork
                img="images/our-work1.png"
                title="Strategy"
                para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam."
              />
              <ReuseableOurWork
                img="images/our-work2.png"
                title="Wireframing"
                para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam."
              />
              <ReuseableOurWork
                img="images/our-work3.png"
                title="Design"
                para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam."
              />
              <ReuseableOurWork
                img="images/our-work4.png"
                title="Development"
                para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
