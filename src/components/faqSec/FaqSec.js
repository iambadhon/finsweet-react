import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./faqSec.css";

const FaqSec = () => {
  let [accordian, setAccordian] = useState([
    {
      title: "How much time does it take?",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      status: true,
    },
    {
      title: "What is your class naming convention?",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      status: false,
    },
    {
      title: "How do you communicate?",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      status: false,
    },
    {
      title: "I have a bigger project. Can you handle it?",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      status: false,
    },
    {
      title: "What is your class naming convention?",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      status: false,
    },
  ]);

  let handelAccordian = (id) => {
    accordian.map((item, index) => {
      if (id == index) {
        item.status = true;
        setAccordian([...accordian]);
      } else {
        item.status = false;
        setAccordian([...accordian]);
      }
    });
  };

  return (
    <section className="faq">
      <div className="container">
        <div className="faq_flex">
          <div className="faq_title">
            <h3>Frequently asked questions</h3>
            <Link to="/contact">Contact us for more info</Link>
          </div>
          <div className="faq_main">
            {accordian.map((item, index) => (
              <div className="faq_item" onClick={() => handelAccordian(index)}>
                <span>{index + 1 > 9 ? index + 1 : `0${index + 1}`}</span>
                <h5>{item.title}</h5>
                {item.status && <p>{item.details}</p>}
                {item.status ? (
                  <i className="fa-solid fa-xmark"></i>
                ) : (
                  <i className="fa-solid fa-plus"></i>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSec;
