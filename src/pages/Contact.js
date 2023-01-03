import React from "react";
import ContactSec from "../components/contactSec/ContactSec";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const Contact = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  return (
    <>
      <Navbar />
      <ContactSec />
      <Footer />
    </>
  );
};

export default Contact;
