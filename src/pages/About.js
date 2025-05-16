import React from 'react';
import Footer from '../components/Footer';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h2>About Us</h2>
      <p>
        At Better Take Home, we simplify the mortgage process with easy-to-use tools 
        and accurate estimates. Whether you're buying a new home or refinancing, 
        we are here to assist you at every step.
      </p>
      <Footer />
    </div>
  );
};

export default About;
