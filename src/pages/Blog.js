import React from "react";
import Navbar from "../components/navbar/Navbar";
import BlogPage from "../components/blogPage/BlogPage";
import Footer from "../components/footer/Footer";

const Blog = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  return (
    <>
      <Navbar />
      <BlogPage />
      <Footer />
    </>
  );
};

export default Blog;
