import React from "react";
import Navbar from "../components/navbar/Navbar";
import AboutBanner from "../components/aboutBanner/AboutBanner";
import Goal from "../components/goal/Goal";
import Process from "../components/process/Process";
import Mission from "../components/mission/Mission";
import TeamWork from "../components/teamWork/TeamWork";
import Brand from "../components/brand/Brand";
import OurTeam from "../components/ourTeam/OurTeam";
import Footer from "../components/footer/Footer";

const About = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  return (
    <>
      <Navbar />
      <AboutBanner />
      <Goal />
      <Process />
      <Mission />
      <TeamWork padT="100px" />
      <Brand padT="50px" />
      <OurTeam />
      <Footer />
    </>
  );
};

export default About;
