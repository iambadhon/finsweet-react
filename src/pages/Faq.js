import React from "react";
import Navbar from "../components/navbar/Navbar";
import FaqSec from "../components/faqSec/FaqSec";
import Footer from "../components/footer/Footer";

const Faq = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  return (
    <>
      <Navbar />
      <FaqSec />
      <Footer />
    </>
  );
};

export default Faq;
