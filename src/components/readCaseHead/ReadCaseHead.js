import React from "react";
import "./readCaseHead.css";

const ReadCaseHead = () => {
  return (
    <section className="read_case_head">
      <div className="container">
        <div className="read_case_head_item">
          <h5>Web design and development</h5>
          <h2>Finsweet Design case studies</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse.
          </p>
          <img src="images/read-case-head.png" alt="Read Case Head" />
          <div className="read_case_inner_flex">
            <div className="read_case_head_inner_item">
              <span>Client</span>
              <h5>facebook.com</h5>
            </div>
            <div className="read_case_head_inner_item">
              <span>Service</span>
              <h5>Product Design</h5>
            </div>
            <div className="read_case_head_inner_item">
              <span>Deliverable</span>
              <h5>UI Screens, UX Flow & Prototype</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadCaseHead;
