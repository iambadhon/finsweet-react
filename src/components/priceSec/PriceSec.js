import React from "react";
import "./priceSec.css";

const PriceSec = () => {
  return (
    <section className="price">
      <div className="container">
        <div className="price_title">
          <h2>Our Pricing Plans</h2>
          <p>
            When you’re ready to go beyond prototyping in Figma, Webflow is
            ready to help you bring your designs to life — without coding them.
          </p>
        </div>
        <div className="price_item_flex">
          <div className="price_item">
            <h3>$299</h3>
            <span>Per Design</span>
            <h5>Landing Page</h5>
            <p>When you’re ready to go beyond prototyping in Figma,</p>
            <ul>
              <li>
                <i className="fa-solid fa-play"></i>All limited links
              </li>
              <li>
                <i className="fa-solid fa-play"></i>Own analytics platform
              </li>
              <li>
                <i className="fa-solid fa-play"></i>Chat support
              </li>
              <li>
                <i className="fa-solid fa-play gray"></i>Optimize hashtags
              </li>
              <li>
                <i className="fa-solid fa-play gray"></i>Unlimited users
              </li>
            </ul>
            <div className="price_item_btn cmn_btn2">
              <a href="#">Get started</a>
            </div>
          </div>
          <div className="price_item">
            <h3>$399</h3>
            <span>Multi Design</span>
            <h5>Website Page</h5>
            <p>
              When you’re ready to go beyond prototyping in Figma, Webflow’s
              ready to help.
            </p>
            <ul>
              <li>
                <i className="fa-solid fa-play"></i>All limited links
              </li>
              <li>
                <i className="fa-solid fa-play"></i>Own analytics platform
              </li>
              <li>
                <i className="fa-solid fa-play"></i>Chat support
              </li>
              <li>
                <i className="fa-solid fa-play"></i>Optimize hashtags
              </li>
              <li>
                <i className="fa-solid fa-play"></i>Unlimited users
              </li>
            </ul>
            <div className="price_item_btn cmn_btn2">
              <a href="#">Get started</a>
            </div>
          </div>
          <div className="price_item">
            <h3>$499 +</h3>
            <span>Per Design</span>
            <h5>Complex Project</h5>
            <p>When you’re ready to go beyond prototyping in Figma,</p>
            <ul>
              <li>
                <i className="fa-solid fa-play"></i>All limited links
              </li>
              <li>
                <i className="fa-solid fa-play"></i>Own analytics platform
              </li>
              <li>
                <i className="fa-solid fa-play"></i>Chat support
              </li>
              <li>
                <i className="fa-solid fa-play"></i>Optimize hashtags
              </li>
              <li>
                <i className="fa-solid fa-play"></i>Unlimited users
              </li>
              <li>
                <i className="fa-solid fa-play"></i>Assist and Help
              </li>
            </ul>
            <div className="price_item_btn cmn_btn2">
              <a href="#">Get started</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceSec;
