import React from "react";
import Hero from "../components/Hero";
import Overview from "../components/Overview";
import Amenities from "../components/Amenities";
import Services from "../components/Services";

const Home = () => {
  return (
    <div>
      <Hero />
      <Overview />
      <Amenities />
      <Services />
    </div>
  );
};

export default Home;
