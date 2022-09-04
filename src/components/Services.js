import React from "react";
import image from "../images/services.png";
import { FaAward } from "react-icons/fa";
function Services() {
  return (
    <section className='services-section'>
      <div className='services-container  container'>
        <h1>Manage your money effortlessly</h1>
        <p>
          100% digital online sign-up in minutes. UK customer services. No fees.
        </p>
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

export default Services;
