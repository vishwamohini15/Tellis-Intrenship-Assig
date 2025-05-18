import React from 'react';
import './Start.css';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

const Start = () => {
  return (
    <>
    <div className="start-page">
      <div className="start-header">
        <h2>Better Mortgage</h2>
        <div className="help-section">
          <Phone className="phone-icon" />
          <p>Need help? Call (+91) 1239432235</p>
        </div>
      </div>

      <div className="line"></div>

      <div className="intro">
        <h1>Hi, I'm Betsy!</h1>
        <p>What can I help you with?</p>
      </div>

      <div className="options">
        <div className="option"  
        
        >
           <Link to="/" className="nav-link"></Link>
          
          Buying Home</div>
        <div className="option">Refinance My Mortgage</div>
        <div className="option">Get Cash from My Home</div>
      </div>

      <div className="stats">
        <p>$100B home loans funded entirely online</p>
        <p>400K Customers who chose a Better Mortgage</p>
      </div>

      <div className="info-box">
        <p>After a few questions, you'll unlock:</p>
        <ul>
          <li>Custom mortgage rates</li>
          <li>Exclusive offers</li>
          <li>A personalized dashboard</li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default Start;
