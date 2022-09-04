import React from "react";
import image from "../images/services.png";
import { FaAward } from "react-icons/fa";
function Countries() {
  return (
    <section className='countries-section services-section'>
      <div className='services-container  container'>
        <h1>Available in 31 countries</h1>
        <p>
          Whether you are travelling or shopping, our multi-currency wallet has
          you covered.
        </p>
        <p>United Kingdom, and:</p>
        <ul className='countries-list'>
          <li className='countries'>
            Austria <br /> Belgium
            <br /> Bulgaria
            <br /> Croatia
            <br /> Republic of Cyprus
            <br /> Czech Republic
            <br /> Denmark
            <br /> Estonia
            <br /> Finland
          </li>
          <li className='countries'>
            Austria <br /> Belgium
            <br /> Bulgaria
            <br /> Croatia
            <br /> Republic of Cyprus
            <br /> Czech Republic
            <br /> Denmark
            <br /> Estonia
            <br /> Finland
          </li>
          <li className='countries'>
            Austria <br /> Belgium
            <br /> Bulgaria
            <br /> Croatia
            <br /> Republic of Cyprus
            <br /> Czech Republic
            <br /> Denmark
            <br /> Estonia
            <br /> Finland
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Countries;
