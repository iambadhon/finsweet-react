import React from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import ReadBlogSec from "../components/readBlogSec/ReadBlogSec";

const ReadBlog = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  return (
    <>
      <Navbar />
      <ReadBlogSec />
      <Footer />
    </>
  );
};

export default ReadBlog;
