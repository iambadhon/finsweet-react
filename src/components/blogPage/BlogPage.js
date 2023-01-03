import React from "react";
import { Link } from "react-router-dom";
import "./blogPage.css";

const BlogPage = () => {
  return (
    <section className="blog_page">
      <div className="container">
        <div className="blog_page_title">
          <h2>
            A UX Case Study on Creating a Studious Environment for Students
          </h2>
          <span>Andrew Jonson</span>
          <span>on 27th January 2021</span>
          <img src="images/blog-page-title.png" alt="Blog Images" />
          <p>
            Apparently we had reached a great height in the atmosphere, for the
            sky was a dead black, and the stars had ceased to twinkle. By the
            same illusion which lifts the horizon of the sea to the level of the
            spectator on a hillside.
          </p>
          <div className="blog_page_title_btn cmn_btn">
            <Link to="/read-case">Read more</Link>
          </div>
        </div>

        <div className="blog_page_main_title">
          <h2>Our Blog</h2>
        </div>
        <div className="blog_page_flex">
          <div className="blog_page_item">
            <img src="images/blog-page1.png" alt="Blog Item" />
            <span>27 Jan 2021</span>
            <h5>
              How one Webflow user grew his single person consultancy from
              $0-100K in 14 months
            </h5>
            <p>
              See how pivoting to Webflow changed one person’s sales strategy
              and allowed him to attract
            </p>
            <div className="blog_page_item_btn cmn_btn">
              <Link to="/read-blog">
                Read More <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
          <div className="blog_page_item">
            <img src="images/blog-page2.png" alt="Blog Item" />
            <span>27 Jan 2021</span>
            <h5>
              How one Webflow user grew his single person consultancy from
              $0-100K in 14 months
            </h5>
            <p>
              See how pivoting to Webflow changed one person’s sales strategy
              and allowed him to attract
            </p>
            <div className="blog_page_item_btn cmn_btn">
              <Link to="/read-blog">
                Read More <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
          <div className="blog_page_item">
            <img src="images/blog-page3.png" alt="Blog Item" />
            <span>27 Jan 2021</span>
            <h5>
              How one Webflow user grew his single person consultancy from
              $0-100K in 14 months
            </h5>
            <p>
              See how pivoting to Webflow changed one person’s sales strategy
              and allowed him to attract
            </p>
            <div className="blog_page_item_btn cmn_btn">
              <Link to="/read-blog">
                Read More <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
          <div className="blog_page_item">
            <img src="images/blog-page4.png" alt="Blog Item" />
            <span>27 Jan 2021</span>
            <h5>
              How one Webflow user grew his single person consultancy from
              $0-100K in 14 months
            </h5>
            <p>
              See how pivoting to Webflow changed one person’s sales strategy
              and allowed him to attract
            </p>
            <div className="blog_page_item_btn cmn_btn">
              <Link to="/read-blog">
                Read More <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
          <div className="blog_page_item">
            <img src="images/blog-page5.png" alt="Blog Item" />
            <span>27 Jan 2021</span>
            <h5>
              How one Webflow user grew his single person consultancy from
              $0-100K in 14 months
            </h5>
            <p>
              See how pivoting to Webflow changed one person’s sales strategy
              and allowed him to attract
            </p>
            <div className="blog_page_item_btn cmn_btn">
              <Link to="/read-blog">
                Read More <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
          <div className="blog_page_item">
            <img src="images/blog-page6.png" alt="Blog Item" />
            <span>27 Jan 2021</span>
            <h5>
              How one Webflow user grew his single person consultancy from
              $0-100K in 14 months
            </h5>
            <p>
              See how pivoting to Webflow changed one person’s sales strategy
              and allowed him to attract
            </p>
            <div className="blog_page_item_btn cmn_btn">
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

export default BlogPage;
