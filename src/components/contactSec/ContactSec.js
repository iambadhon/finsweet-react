import React from "react";
import "./contactSec.css";

const ContactSec = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="contact_title">
          <h2>Contact Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>
        <div className="contact_form">
          <form action="#">
            <div className="input_flex">
              <div className="input_item">
                <label for="name">Name</label>
                <input
                  className="name"
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="input_item">
                <label for="email">Email</label>
                <input
                  className="email"
                  type="email"
                  id="email"
                  placeholder="Enter your Email"
                />
              </div>
              <div className="input_item">
                <label for="subject">Subject</label>
                <input
                  className="subject"
                  type="text"
                  id="subject"
                  placeholder="Provide context"
                />
              </div>
              <div className="input_item">
                <label for="subject">Subject</label>
                <select className="subject" name="" id="subject">
                  <option value="Country">Select Subject</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="India">India</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="US">US</option>
                  <option value="UK">UK</option>
                </select>
              </div>
              <div className="input_item">
                <label for="message">Message</label>
                <textarea
                  className="message"
                  name=""
                  id="message"
                  placeholder="Write your question here"
                ></textarea>
              </div>
            </div>
            <button className="submit" type="submit">
              Send Messege
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSec;
