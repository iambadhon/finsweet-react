import React from "react";
import { Link } from "react-router-dom";
import "./together.css";

const Together = () => {
  return (
    <section className="portfolio_together">
      <div className="container">
        <div className="portfolio_together_text">
          <h2>Let's build something great together</h2>
          <p>
            Nullam vitae purus at tortor mattis dapibus. Morbi purus est,
            ultricies nec dolor sit amet, scelerisque cursus purus.
          </p>
          <div className="portfolio_together_btn cmn_btn2">
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Together;
