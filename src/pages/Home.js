import React from "react";
import Countries from "../components/Countries";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Money from "../components/Money";
import Privacy from "../components/Privacy";
import Safe from "../components/Safe";
import Services from "../components/Services";
import SignUp from "../components/SignUp";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Money />
      <SignUp />
      <Experience />
      <Countries />
      <Safe />
      <Privacy />
      <Footer />
    </>
  );
}

export default Home;
