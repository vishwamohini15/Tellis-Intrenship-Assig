import React, { useState } from 'react';
import Footer from '../components/Footer';

import './About.css';
import Header from '../components/Header';

const About = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoClick = () => {
    setIsVideoPlaying(true);
  };



  const timelineData = [
    { year: 2014, text: 'After Vishal Garg’s first attempt to purchase his own home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all.' },
    { year: 2015, text: 'Better Mortgage funds its first mortgage loan entirely online (without a single phone call).' },
    { year: 2016, text: 'Better Mortgage becomes a Fannie Mae approved seller-servicer and establishes relationships with top mortgage investors.' },
    { year: 2017, text: 'Better Cover launches as an insurance marketplace.' },
    { year: 2018, text: 'Better Mortgage partners with Ally Bank to build Ally Home powered by Better.' },
    { year: 2019, text: 'Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers.' },
    { year: 2021, text: 'Better Mortgage launches One Day Mortgage¹: The first offering to customers to go from application to full mortgage Commitment Letter within 24 hours vs. typical industry process of 30+ days.' },
    { year: 2022, text: 'Better Mortgage becomes the first fintech to fund $100B home loans entirely online.' },
    { year: 2023, text: 'Better Inspect offers comprehensive inspection services.' },
    { year: 'Today', text: 'You become part of the story by joining tens of thousands of happy Better Mortgage borrowers.' },

  ];

  return (
    <div className="about-page">

      <Header></Header>


      {/* Section 1: Mission */}
      <section className="about-section mission-section">
        <h2>Our mission</h2>
        <h1>We're making homeownership simpler, faster — <br /> and most importantly, more accessible for all <br /> Americans.</h1>
      </section>

      {/* Section 2: Status Quo */}
      <section className="status-section">
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
          {isVideoPlaying ? (
            <div className="video-container expanded">
              <iframe
                className="about-video"
                src="https://www.youtube.com/embed/1KjYlLBM9j4?si=A8ee_WORBZ8blwL_"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{ width: '400px', height: '400px' }} // Inline styles for width and height
              ></iframe>
            </div>
          ) : (
            <div className="image-container" onClick={handleVideoClick}>
              <span className='playbtn'> ▶</span>
              <img src="/vishal-mission.webp" alt="Vishal Garg" className="status-image" />
            </div>
          )}
        </div>
      </section>

      {/* Section 3: Changing Things */}
      <section className="about-section change-section">
        <h1>How we're changing things</h1>
        <p>
          Homeownership is a huge part of our economy. Housing overall is a $33 trillion business, and mortgages account for
          $15 trillion. Yet home finance operates in the same way it has for decades — through opaque systems and expensive
          intermediaries whose interests are misaligned with consumers'.
        </p>
        <br />
        <p>
          That's why Better.com is redefining the homeownership process from the ground up. We're using technology to make it
          faster and more efficient, and humans to help make it friendly and enjoyable.
        </p>
      </section>

      {/* Section 4: Timeline */}
      {/* <section className="about-section timeline-section">
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
      </section> */}


      <section className=" timeline-section">
        <h3 className="timeline-title">Company Timeline</h3>
        <div className="timeline">
          <div className="timeline-column left-column">
            {timelineData.slice(0, 5).map((item, index) => ( // 2018 tak
              <div key={index} className="timeline-item">
                <div className={`timeline-content left`}>
                  <span className="timeline-year">{item.year}</span>
                  <p className="timeline-text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="timeline-column right-column">
            {timelineData.slice(5).map((item, index) => (  // 2019 se aage
              <div key={index + 5} className="timeline-item">
                <div className={`timeline-content right`}>
                  <span className="timeline-year">{item.year}</span>
                  <p className="timeline-text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="timeline-line"></div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
