import React from 'react';
import './Start.css';
import Footer from '../components/Footer';

const Start = () => {
  return (
    <>
    <div className="start-page">
      <div className="start-header">
        <h2>Better <br /> Mortgage</h2>
        <div className="help-section">
          <span className="phone-icon" >📞</span>
          <p className='callpp'>Need help? Call (+91) 1239432235</p>
          <br /> 
           <a href="/">
                    <button className="continue-button">
                        Continue
                    </button>
                   </a>
        </div>
        
      </div>

      <div className="intro">
        <h1>Hi, I'm Betsy!</h1>
        <p>What can I help you with?</p>
      </div>

      <div className="options">
        <a href="/">
        <div className="option" > 
           🏡 Buying Home
         </div>
        </a>
        <a href="/">
        <div className="option">
          🐱‍💻Refinance My Mortgage
        </div>
        </a>
        <a href="/">
        <div className="option">
          💰 Get Cash from My Home
        </div>
        </a>
        
      </div>

      <div className="stats">
        <p><span>$100B</span> <br /> home loans funded entirely online</p>
        <p><span>400K</span>  <br /> Customers who chose a Better Mortgage</p>
      </div>

      <div className="info-box">
        <p>After a few questions, you'll unlock:</p>
        <ul>
          <li>✔ Custom mortgage rates</li>
          <li>💲 Exclusive offers</li>
          <li>📱 A personalized dashboard</li>
        </ul>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default Start;
