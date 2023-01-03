import React from "react";
import Footer from "../components/footer/Footer";
import PriceSec from "../components/priceSec/PriceSec";
import FaqSec from "../components/faqSec/FaqSec";
import Navbar from "../components/navbar/Navbar";

const Price = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  return (
    <>
      <Navbar />
      <PriceSec />
      <FaqSec />
      <Footer />
    </>
  );
};

export default Price;
