import React from "react";
import image1 from "../images/appstore.webp";
import image2 from "../images/googleplay.webp";
import image3 from "../images/trustpilot.webp";
import hero from "../images/hero.png";
function Hero() {
  return (
    <section className='hero-section'>
      <div className='hero-container container'>
        <div className='left-hero'>
          <h1>
            Open an account in minutes.
            <br />
            No credit checks.
          </h1>
          <p>
            Open a free account from your phone, in minutes. Free card &
            multi-currency wallet. Free instant top-up.
          </p>
          <img src={image1} alt='App Store' />
          <img src={image2} alt='Google Play' />
          <img src={image3} alt='Trustpilot' />
        </div>
        <img src={hero} alt='' />
      </div>
    </section>
  );
}

export default Hero;
