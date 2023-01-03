import React from "react";

const ReuseableOurWork = (props) => {
  return (
    <div className="our_work_item">
      <img src={props.img} alt="Our work" />
      <h4>{props.title}</h4>
      <p>{props.para}</p>
    </div>
  );
};

export default ReuseableOurWork;
