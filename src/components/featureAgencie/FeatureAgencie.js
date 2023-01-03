import React from "react";
import "./featureAgencie.css";

const FeatureAgencie = () => {
  return (
    <section className="feature_agencie">
      <div className="container">
        <div className="feature_agencie_flex">
          <div className="feature_agencie_text">
            <h6>Use Client-first</h6>
            <h3>
              Top agencies and freelancers around the world use Client-first
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>
          <div className="feature_agencie_img">
            <img src="images/feature-agencie.png" alt="Feature Agencie" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureAgencie;
