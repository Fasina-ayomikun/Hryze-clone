import React from "react";
import image from "../images/mask.png";
import { FaAward } from "react-icons/fa";
function Experience() {
  return (
    <section className=' services-section'>
      <div className='experience services-container container'>
        <h1>One wallet. Endless possibilities</h1>
        <p>
          Global is the new local with our multi-currency wallet, ensuring your
          experience abroad is seamless and enjoyable.
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

export default Experience;
