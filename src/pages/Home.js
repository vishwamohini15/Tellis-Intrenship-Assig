








// import React from 'react';
// import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './Home.css';
import React, { useState } from 'react';
import Header from '../components/Header';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

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
        { title: "Our Products", image: "/first-home.webp" },
        { title: "Calculators", image: "/one-day-mortgage.webp" },
        { title: "Guides & FAQs", image: "/better-heloc.webp" },
        { title: "Support", image: "/insurance.webp" },
    ];
    

  return (
    <div className="home-page">

     {/* <header className="header">
        <h1>Better Take Home</h1>
        <nav>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/calculator" className="nav-link">Calculator</Link>
          <Link to="/start" className="nav-link">Start</Link>
        </nav>
      </header> */}

      <Header></Header>


      {/* Section 1: Hero Section */}
      <section className="hero-section">
        <h1 className='heroText'>Mortgages <br /> made simple</h1>
        <div className='rating'>
        <div >
          <button className='homestart'>Start my Approvel</button>
          <p className='homepp'>⌚ 3min | No credit impact</p>
        </div>

        <div > 
        <div className='googlr-rate'>
           <img src="/1000px-Google_-G-_Logo.svg_.png" alt=""  className='googleimg'/> 
          <span className=" checked">⭐</span>
        <span className=" checked">⭐</span>
<span className=" checked">⭐</span>
<span className="checked">⭐</span>
<span className="checked">⭐</span>
        </div>
<p className='ratepp'>4.6 star | 3177 Google review</p>
        </div>
        </div>
        <img src="/hero-variant.webp" alt="Hero" className="hero-image" />
      </section>

      {/* Section 2: Story Section */}
      {/* <section className="story-section">
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
      </section> */}

         {/* Section 2: Story Section */}
            <section className="story-section">
                <div className="story-content">
                    {storyData.map((story) => (
                        <div
                            key={story.name}
                            className={`story-name-container ${selectedStory === story.name ? "active" : ""}`}
                            onClick={() => handleStoryClick(story.name)}
                        >
                            {story.name}
                        </div>
                    ))}
                    {/* Display the selected story's content */}
                    {storyData.find(story => story.name === selectedStory) && (
                        <div className="story-text">
                            <img
                                src={storyData.find(story => story.name === selectedStory).image}
                                alt={selectedStory}
                                className="story-image"
                            />
                            <h2>{storyData.find(story => story.name === selectedStory).quote}</h2>
                            <p>{storyData.find(story => story.name === selectedStory).trustpilot}</p>
                            <p>{storyData.find(story => story.name === selectedStory).rating}</p>
                            <button className="story-button">See all our stories</button>
                        </div>
                    )}
                </div>
            </section>

      {/* Section 3: FAQ Section */}
      {/* <section className="faq-section">
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
      </section> */}


       <section className="faq-section">
                <h2>Got Questions?</h2>
                <h3>We've got answers</h3>
                <div className="faq-grid"> {/* Changed to faq-grid */}
                    {faqData.map((item, index) => (
                        <div key={index} className="faq-item">
                            <h4>{item.title}</h4>
                            <img src={item.image} alt={item.title} className="faq-image" />
                        </div>
                    ))}
                </div>
            </section>

      <Footer />
    </div>
  );
};

export default Home;
