import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">

     <header className="header">
        <h1>Better Take Home</h1>
        <nav>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/calculator" className="nav-link">Calculator</Link>
          <Link to="/start" className="nav-link">Start</Link>
        </nav>
      </header>


      {/* Section 1: Hero Section */}
      <section className="hero-section">
        <img src="/hero-variant.webp" alt="Hero" className="hero-image" />
      </section>

      {/* Section 2: Story Section */}
      <section className="story-section">
        <div className="story-content">
          <img src="/still-quote-Arian.webp" alt="Person" className="story-image" />
          <div className="story-text">
            <h2>Find out why we're better</h2>
            <p>See all our stories</p>
            <p>Trustpilot</p>
            <p>Excellent 4.4 out of 5</p>
            <button className="story-button">See all our stories</button>
          </div>
        </div>
      </section>

      {/* Section 3: FAQ Section */}
      <section className="faq-section">
        <h2>Got Questions?</h2>
        <h3>We've got answers</h3>
        <div className="faq-content">
          <div className="faq-item">
            <h4>Our Products</h4>
            <img src="/first-home.webp" alt="Product" className="faq-image" />
          </div>
          <div className="faq-item">
            <h4>Calculators</h4>
            <img src="/one-day-mortgage.webp" alt="Calculator" className="faq-image" />
          </div>
          <div className="faq-item">
            <h4>Guides & FAQs</h4>
            <img src="/better-heloc.webp" alt="Guide" className="faq-image" />
          </div>
          <div className="faq-item">
            <h4>Support</h4>
            <img src="/insurance.webp" alt="Support" className="faq-image" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
