import React from "react";

import image from "../images/privacy.png";
import { FaAward } from "react-icons/fa";

function Privacy() {
  return (
    <section className='services-section'>
      <div className='services-container container'>
        <h1>We protect your data and privacy</h1>
        <p>We are taking privacy to a new level.</p>
        <img src={image} alt='' className='service-images' />

        <ul className='services'>
          <li className='service'>
            <FaAward />A free contact-less card issued by MasterCard.
          </li>
          <li className='service'>
            <FaAward />A free contact-less card issued by MasterCard.
          </li>
          <li className='service'>
            <FaAward />A free contact-less card issued by MasterCard.
          </li>
          <li className='service'>
            <FaAward />A free contact-less card issued by MasterCard.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Privacy;
