import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import ReadCaseHead from "../components/readCaseHead/ReadCaseHead";
import ReadCaseDescp from "../components/readCaseDescp/ReadCaseDescp";
import Together from "../components/together/Together";

const ReadCase = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  return (
    <>
      <Navbar />
      <ReadCaseHead />
      <ReadCaseDescp />
      <Together />
      <Footer />
    </>
  );
};

export default ReadCase;
