import React from "react";
import "./portfolioTemplate.css";

const PortfolioTemplate = () => {
  return (
    <section className="portfolio_template">
      <div className="container">
        <div className="portfolio_template_nav">
          <ul>
            <li>
              <a className="active" href="#">
                All
              </a>
            </li>
            <li>
              <a href="#">UI Design</a>
            </li>
            <li>
              <a href="#">Webflow Design</a>
            </li>
            <li>
              <a href="#">Figma Design</a>
            </li>
          </ul>
        </div>
        <div className="portfolio_template_flex">
          <div className="portfolio_template_item">
            <img src="images/portfolio1.png" alt="Portfolio" />
            <h3>Template 1</h3>
            <p>
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black, and the stars had ceased to twinkle.
            </p>
            <div className="portfolio_template_item_btn cmn_btn">
              <a href="#">
                View Portfolio <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
          <div className="portfolio_template_item">
            <img src="images/portfolio2.png" alt="Portfolio" />
            <h3>Template 2</h3>
            <p>
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black, and the stars had ceased to twinkle.
            </p>
            <div className="portfolio_template_item_btn cmn_btn">
              <a href="#">
                View Portfolio <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
          <div className="portfolio_template_item">
            <img src="images/portfolio3.png" alt="Portfolio" />
            <h3>Template 3</h3>
            <p>
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black, and the stars had ceased to twinkle.
            </p>
            <div className="portfolio_template_item_btn cmn_btn">
              <a href="#">
                View Portfolio <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
          <div className="portfolio_template_item">
            <img src="images/portfolio4.png" alt="Portfolio" />
            <h3>Template 4</h3>
            <p>
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black, and the stars had ceased to twinkle.
            </p>
            <div className="portfolio_template_item_btn cmn_btn">
              <a href="#">
                View Portfolio <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
          <div className="portfolio_template_item">
            <img src="images/portfolio5.png" alt="Portfolio" />
            <h3>Template 5</h3>
            <p>
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black, and the stars had ceased to twinkle.
            </p>
            <div className="portfolio_template_item_btn cmn_btn">
              <a href="#">
                View Portfolio <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
          <div className="portfolio_template_item">
            <img src="images/portfolio6.png" alt="Portfolio" />
            <h3>Template 6</h3>
            <p>
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black, and the stars had ceased to twinkle.
            </p>
            <div className="portfolio_template_item_btn cmn_btn">
              <a href="#">
                View Portfolio <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioTemplate;
