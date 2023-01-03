import React from "react";
import Navbar from "../components/navbar/Navbar";
import PortfolioTitle from "../components/portfolioTitle/PortfolioTitle";
import PortfolioTemplate from "../components/portfolioTemplate/PortfolioTemplate";
import Together from "../components/together/Together";
import Footer from "../components/footer/Footer";

const Portfolio = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  return (
    <>
      <Navbar />
      <PortfolioTitle />
      <PortfolioTemplate />
      <Together />
      <Footer />
    </>
  );
};

export default Portfolio;
