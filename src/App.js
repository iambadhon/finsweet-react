import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Feature from "./pages/Feature";
import Price from "./pages/Price";
import Faq from "./pages/Faq";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import ReadBlog from "./pages/ReadBlog";
import Policy from "./pages/Policy";
import ReadCase from "./pages/ReadCase";

function App() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/feature" element={<Feature />}></Route>
        <Route path="/price" element={<Price />}></Route>
        <Route path="/faq" element={<Faq />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/read-blog" element={<ReadBlog />}></Route>
        <Route path="/policy" element={<Policy />}></Route>
        <Route path="/read-case" element={<ReadCase />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
