


// import React from 'react';
// import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './Home.css';
import React, { useState } from 'react';
import Header from '../components/Header';

const Home = () => {
  const [selectedStory, setSelectedStory] = useState('Arian');

  const handleStoryClick = (storyName) => {
    setSelectedStory(storyName);
  };

  const storyData = [
    {
      name: "Arian",
      quote: "Find out why we're better",
      trustpilot: "Trustpilot",
      rating: "Excellent 4.4 out of 5",
      image: "/still-quote-Arian.webp",
    },
    {
      name: "Amanda",
      quote: "My experience was amazing",
      trustpilot: "Trustpilot",
      rating: "Excellent 4.6 out of 5",
      image: "/still-quote-Amanda.webp", // Changed to Amanda's image
    },
    {
      name: "Paul",
      quote: "The process was so smooth",
      trustpilot: "Trustpilot",
      rating: "Excellent 4.8 out of 5",
      image: "/still-quote-Paul.webp", // Changed to Paul's image
    },
  ];

  const faqData = [
    {
      title: "Buying your first home with Better",

      image: "/first-home.webp"
    },
    {
      title: "One Day Mortgage",
      des: "Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter in a few weeks.",
      image: "/one-day-mortgage.webp"
    },
    {
      title: "Better HELOC",
      des: "Introducing One Day HELOC™—your express lane to getting cash from your home with our Home Equity Line of Credit2. Access up to 90% of your home equity as cash in as little as 7 days.",
      image: "/better-heloc.webp"
    },
    { title: "Insurance Support", image: "/insurance.webp" },
  ];


  return (
    <>
      <Header></Header>

      <div className="home-page">

        {/* Section 1: Hero Section */}
        <section className="hero-section">
          <div className="hero-content-wrapper">
            <h1 className="hero-text">
              Mortgages <br />
              made simple
            </h1>
            <div className="rating-and-button">
              <div className="button-container">
                <button className="home-start">Start my Approval</button>
                <p className="home-pp">⌚ 3min | No credit impact</p>
              </div>
              <div className="google-rating">
                <div className="google-rate">
                  <img
                    src="/1000px-Google_-G-_Logo.svg_.png"
                    alt="Google Logo"
                    className="google-img"
                  />
                  <span className="checked">⭐</span>
                  <span className="checked">⭐</span>
                  <span className="checked">⭐</span>
                  <span className="checked">⭐</span>
                  <span className="checked">⭐</span>
                </div>
                <p className="rate-pp">4.6 star | 3177 Google reviews</p>
              </div>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img src="/hero-variant.webp" alt="Hero" className="hero-image" />
          </div>
        </section>


        {/* Section 2: Story Section */}
        <section className="story-section">
          <div className="story-content">
            {/* Display the selected story's content */}
            {storyData.find(story => story.name === selectedStory) && (
              <div className="story-text">
               <div className='fiximg'>
                 <img
                  src={storyData.find(story => story.name === selectedStory).image}
                  alt={selectedStory}
                  className="story-image"
                />
               </div>
                <div className="aboutimg">
                  <h2 >{storyData.find(story => story.name === selectedStory).quote}</h2>
                  <p>{storyData.find(story => story.name === selectedStory).trustpilot}</p>
                  <p>{storyData.find(story => story.name === selectedStory).rating}</p>
                  <button className="story-button">See all our stories</button>

                </div>
              </div>
            )}
          </div>

          <div className="imgWithname">
            {storyData.map((story) => (
              <div
                key={story.name}
                className={`story-name-container ${selectedStory === story.name ? "active" : ""}`}
                onClick={() => handleStoryClick(story.name)}
              >
                {story.name}
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: FAQ Section */}
        <section className="faq-section">
          <h2>Got Questions?</h2>
          <h3>We've got answers</h3>
          <div className="faq-grid"> {/* Changed to faq-grid */}
            {faqData.map((item, index) => (
              <div key={index} className="faq-item">
                <h4>{item.title}</h4>
                <p>{item.des}</p>
                <img src={item.image} alt={item.title} className="faq-image" />
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Home;
