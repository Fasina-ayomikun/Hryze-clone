import React from "react";
import app from "../images/appstore.webp";
import google from "../images/googleplay.webp";
import image from "../images/phone.png";
function SignUp() {
  return (
    <section className='signup-section'>
      <div className='signup-container container'>
        <h1>Let's get started</h1>
        <div className='signup-details'>
          <img src={image} alt='' />
          <ul className='signup-infos'>
            <li className='signup-info'>1. Download the app.</li>
            <li className='signup-info'>2. Sign up in a few minutes.</li>
            <li className='signup-info'>3. Order your card.</li>
            <li className='signup-info'>4. Enjoy our services for free.</li>
            <img src={app} alt='App Store' />
            <img src={google} alt='Google Play' />
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
