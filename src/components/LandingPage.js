import React, { useState } from "react";
import Footer from "./Footer";
import About from "./about/About";
import Carousel from "./Carousel";
import NewsAndUpdates from "./NewsAndUpdates";
import ChooseUs from "./about/ChooseUs";
import Services from "./Services";

function LandingPage() {
  return (
    <>
      <Carousel />
      <About/>
      <Services/>
      <ChooseUs/>
      <NewsAndUpdates/>
      <Footer/>
    </>
  );
}

export default LandingPage;
