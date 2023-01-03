import React from "react";
import { Link } from "react-router-dom";
import "./featureBanner.css";

const FeatureBanner = () => {
  return (
    <section className="feature_banner">
      <div className="container">
        <div className="feature_banner_flex">
          <div className="feature_banner_text">
            <h1>All the features you need</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="feature_banner_btn cmn_btn2">
              <Link to="/price">View Pricing</Link>
            </div>
          </div>
          <div className="feature_banner_img">
            <img src="images/feature-banner.png" alt="Feature Banner" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureBanner;
