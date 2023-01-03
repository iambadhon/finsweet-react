import React from "react";
import "./portfolioTitle.css";

const PortfolioTitle = () => {
  return (
    <section className="portfolio_title">
      <div className="container">
        <div className="portfolio_title_text">
          <span>What we created</span>
          <h2>Our Work Portfolio</h2>
          <p>
            We help teams create great digital products by providing them with
            tools and technology to make the design-to-code process universally
            accessible.
          </p>
          <div className="portfolio_title_social">
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
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioTitle;
