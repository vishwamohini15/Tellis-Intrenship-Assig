import React, { useState } from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

import './About.css';

const About = () => {
 const [isVideoExpanded, setIsVideoExpanded] = useState(false);

  const handleVideoClick = () => {
    setIsVideoExpanded(!isVideoExpanded);
  };


  return (
    <div className="about-page">

        <header className="header">
            <h1>Better Take Home</h1>
            <nav>
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/calculator" className="nav-link">Calculator</Link>
              <Link to="/start" className="nav-link">Start</Link>
            </nav>
          </header>



      {/* Section 1: Mission */}
      <section className="about-section mission-section">
        <h2>Our mission</h2>
        <p>We're making homeownership simpler, faster — and most importantly, more accessible for all Americans.</p>
      </section>

      {/* Section 2: Status Quo */}
      <section className="about-section status-section"  onClick={handleVideoClick}>
        <div className="status-content">
          <div className="status-text">
            <h3>The status quo is broken</h3>
            <p>
              The traditional processes around homeownership are opaque and stressful. Fees aren't transparent and some are 
              simply outrageous in size. Traditional mortgage lending is rife with unnecessary fees and slow, painful processes. 
              It's a system set up to benefit insiders — not you. Better.com CEO, Vishal Garg, set out to change that.
            </p>
            <button className="status-button">Read Vishal's Story</button>
          </div>
          {/* <img src="/one-day-mortgage.webp" alt="Vishal Garg" className="status-image" /> */}
           <div className={`video-container ${isVideoExpanded ? 'expanded' : ''}`}>
          <video
            className="about-video"
            src="/localhost_3000 - Google Chrome 2025-03-31 13-50-32.mp4"
            controls
            alt="About Video"
          />
        </div>
        </div>
      </section>

      {/* Section 3: Changing Things */}
      <section className="about-section change-section">
        <h3>How we're changing things</h3>
        <p>
          Homeownership is a huge part of our economy. Housing overall is a $33 trillion business, and mortgages account for 
          $15 trillion. Yet home finance operates in the same way it has for decades — through opaque systems and expensive 
          intermediaries whose interests are misaligned with consumers'.
        </p>
        <p>
          That's why Better.com is redefining the homeownership process from the ground up. We're using technology to make it 
          faster and more efficient, and humans to help make it friendly and enjoyable.
        </p>
      </section>

      {/* Section 4: Timeline */}
      <section className="about-section timeline-section">
        <h3>Our Journey</h3>
        <div className="timeline">
          {[
            { year: 2014, text: 'Better Mortgage becomes a Fannie Mae approved seller + servicer.' },
            { year: 2015, text: 'Better Mortgage funds its first mortgage loan entirely online.' },
            { year: 2017, text: 'Better Cover launches as an insurance marketplace.' },
            { year: 2019, text: 'Better Real Estate launches to assist home buyers and sellers.' },
            { year: 2021, text: 'Better Mortgage reaches $100 billion in funded loans.' },
            { year: 2023, text: 'Better Inspect offers comprehensive inspection services.' },
            { year: 'Today', text: 'Continuing to innovate in homeownership.' },
          ].map((item, index) => (
            <div key={index} className="timeline-item">
              <div className={`timeline-content ${index % 2 === 0 ? 'left' : 'right'}`}>
                <span className="timeline-year">{item.year}</span>
                <p>{item.text}</p>
              </div>
              <div className="timeline-line"></div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
