import React from "react";
import { Link } from "react-router-dom";
import "./blogSec.css";

const BlogSec = () => {
  return (
    <section className="blog">
      <div className="container">
        <div className="blog_title">
          <h2>Our Blog</h2>
        </div>
        <div className="blog_flex">
          <div className="blog_item">
            <img src="images/blog1.png" alt="blog" />
            <span>19 Jan 2022</span>
            <h5>
              How one Webflow user grew his single person consultancy from
              $0-100K in 14 months
            </h5>
            <p>
              See how pivoting to Webflow changed one person’s sales strategy
              and allowed him to attract
            </p>
            <div className="blog_btn cmn_btn">
              <Link to="/read-blog">
                Read More <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
          <div className="blog_item">
            <img src="images/blog2.png" alt="blog" />
            <span>19 Jan 2022</span>
            <h5>
              How one Webflow user grew his single person consultancy from
              $0-100K in 14 months
            </h5>
            <p>
              See how pivoting to Webflow changed one person’s sales strategy
              and allowed him to attract
            </p>
            <div className="blog_btn cmn_btn">
              <Link to="/read-blog">
                Read More <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
          <div className="blog_item">
            <img src="images/blog3.png" alt="blog" />
            <span>19 Jan 2022</span>
            <h5>
              How one Webflow user grew his single person consultancy from
              $0-100K in 14 months
            </h5>
            <p>
              See how pivoting to Webflow changed one person’s sales strategy
              and allowed him to attract
            </p>
            <div className="blog_btn cmn_btn">
              <Link to="/read-blog">
                Read More <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSec;
