import React from "react";
import "./featureSupport.css";

const FeatureSupport = () => {
  return (
    <section className="feature_support">
      <div className="container">
        <div className="feature_support_flex">
          <div className="feature_support_text">
            <h6>24/7 Support</h6>
            <h3>Working with us, you will be getting 24/7 priority support</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div className="feature_support_img">
            <img src="images/feature-support.png" alt="Feature Support" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSupport;
