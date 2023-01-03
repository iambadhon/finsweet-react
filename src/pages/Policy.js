import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import PolicySec from "../components/policySec/PolicySec";

const Policy = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  return (
    <>
      <Navbar />
      <PolicySec />
      <Footer />
    </>
  );
};

export default Policy;
