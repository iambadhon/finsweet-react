import React from "react";
import "./process.css";

const Process = () => {
  return (
    <section className="process">
      <div className="container">
        <div className="process_title">
          <h2>The process we follow</h2>
        </div>
        <div className="process_flex">
          <div className="process_item">
            <h5>Planning</h5>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
          </div>
          <div className="process_item">
            <h5>Conception</h5>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
          </div>
          <div className="process_item">
            <h5>Design</h5>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
          </div>
          <div className="process_item">
            <h5>Development</h5>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
