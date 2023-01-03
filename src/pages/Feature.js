import React from "react";
import Navbar from "../components/navbar/Navbar";
import FeatureBanner from "../components/featureBanner/FeatureBanner";
import Brand from "../components/brand/Brand";
import TeamWork from "../components/teamWork/TeamWork";
import FeatureAgencie from "../components/featureAgencie/FeatureAgencie";
import FeatureRevision from "../components/featureRevision/FeatureRevision";
import FeatureSupport from "../components/featureSupport/FeatureSupport";
import FeatureDelivery from "../components/featureDelivery/FeatureDelivery";
import FaqSec from "../components/faqSec/FaqSec";
import Footer from "../components/footer/Footer";

const Feature = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  return (
    <>
      <Navbar />
      <FeatureBanner />
      <Brand />
      <TeamWork />
      <FeatureAgencie />
      <FeatureRevision />
      <FeatureSupport />
      <FeatureDelivery />
      <FaqSec />
      <Footer />
    </>
  );
};

export default Feature;
