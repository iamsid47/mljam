import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Timeline from "./Timeline";
import WhatHappens from "./WhatHappens";
import CTA from "./CTA";
import Footer from "./Footer";

const Home = () => {
  return (
    <section className="bg-gradient-to-tr from-slate-900 via-gray-800 to-gray-950 tracking-tighter">
      <Navbar />
      <Hero />
      <Timeline />
      <WhatHappens />
      <CTA />
      <Footer />
    </section>
  );
};

export default Home;
