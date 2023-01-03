import React from "react";
import Navbar from "../components/navbar/Navbar";
import Banner from "../components/banner/Banner";
import OurWork from "../components/ourWork/OurWork";
import Project from "../components/project/Project";
import ProblemSolve from "../components/problemSolve/ProblemSolve";
import Testimonial from "../components/testimonial/Testimonial";
import FaqSec from "../components/faqSec/FaqSec";
import Inquiry from "../components/inquiry/Inquiry";
import BlogSec from "../components/blogSec/BlogSec";
import Footer from "../components/footer/Footer";

const Home = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  return (
    <>
      <Navbar />
      <Banner />
      <OurWork />
      <Project />
      <ProblemSolve />
      <Testimonial />
      <FaqSec />
      <Inquiry />
      <BlogSec />
      <Footer />
    </>
  );
};

export default Home;
