import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <h1>Better Take Home</h1>
        <nav>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/calculator" className="nav-link">Calculator</Link>
          <Link to="/start" className="nav-link">Start</Link>
        </nav>
      </header>
      
      <section className="hero">
        <h2>Your Mortgage Journey Starts Here</h2>
        <p>Get accurate mortgage calculations and start your application effortlessly.</p>
        <Link to="/calculator" className="cta-button">Get Started</Link>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;
