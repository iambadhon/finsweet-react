import React from "react";
import "./brand.css";

const Brand = ({ padT }) => {
  return (
    <section className="feature_brand" style={{ paddingTop: `${padT}` }}>
      <div className="container">
        <div className="feature_brand_flex">
          <div className="feature_brand_item">
            <h3>100.000+</h3>
            <span>Figma Users</span>
          </div>
          <div className="feature_brand_item">
            <a href="#">
              <img src="images/feature-brand1.png" alt="Feature Brand" />
            </a>
          </div>
          <div className="feature_brand_item">
            <a href="#">
              <img src="images/feature-brand2.png" alt="Feature Brand" />
            </a>
          </div>
          <div className="feature_brand_item">
            <a href="#">
              <img src="images/feature-brand3.png" alt="Feature Brand" />
            </a>
          </div>
          <div className="feature_brand_item">
            <a href="#">
              <img src="images/feature-brand4.png" alt="Feature Brand" />
            </a>
          </div>
          <div className="feature_brand_item">
            <a href="#">
              <img src="images/feature-brand5.png" alt="Feature Brand" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;
