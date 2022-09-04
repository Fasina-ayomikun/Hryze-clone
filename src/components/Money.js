import React from "react";
import image from "../images/money.png";
import { FaAward } from "react-icons/fa";
function Money() {
  return (
    <section className='services-section'>
      <div className='services-container container'>
        <h1>Let's grow your money.</h1>
        <p>
          Understand your spending better with our spend analysis to help you
          budget.
        </p>
        <img src={image} alt='' className='service-images' />
        <p className='quote'>
          "Our budget feature enables you to manage your money effortlessly and
          digitally."
        </p>
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

export default Money;
