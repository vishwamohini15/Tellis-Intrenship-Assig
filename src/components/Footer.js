import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Better</h4>
        <p>Better is a family of companies serving all your homeownership needs.</p>
        
        <div className="footer-columns">
          <div className="footer-column">
            <h5>Better Mortgage</h5>
            <p>We can't wait to say “Welcome home.” Apply 100% online, with expert customer support.</p>

            <h5>Better Real Estate</h5>
            <p>Connect with a local Better Real Estate Partner Agent to find out all the ways you can save.</p>

            <h5>Better Cover</h5>
            <p>Shop, bundle, and save on insurance coverage for home, auto, life, and more.</p>

            <h5>Better Inspect</h5>
            <p>Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee.</p>

            <h5>Better Settlement Services</h5>
            <p>Get transparent rates when you shop for title insurance all in one convenient place.</p>
          </div>

          <div className="footer-column">
            <h5>Resources</h5>
            <p>Home affordability calculator</p>
            <p>Mortgage calculator</p>
            <p>Free mortgage calculator</p>
            <p>Mortgage calculator with taxes</p>
            <p>Mortgage calculator with PMI</p>
            <p>Rent vs buy calculator</p>
            <p>HELOC payment calculator</p>
            <p>HELOC vs cash-out refinance calculator</p>
            <p>Buy a home</p>
            <p>Sell a home</p>
            <p>Get home inspection</p>
          </div>

          <div className="footer-column">
            <h5>Company</h5>
            <p>About Us</p>
            <p>Careers</p>
            <p>Media</p>
            <p>Partner with us</p>
            <p>Learning center</p>
            <p>FAQs</p>
            <p>Investor relations</p>
            <p>Contact Us</p>
            <p>hello@better.com</p>
            <p>415-523-8837</p>
          </div>

          <div className="footer-column">
            <h5>Legal</h5>
            <p>NMLS Consumer Access</p>
            <p>Privacy Policy</p>
            <p>Terms of use</p>
            <p>Disclosures & Licensing</p>
            <p>Affiliate Business</p>
            <p>Browser Disclaimer</p>
          </div>
        </div>

        <div className="footer-disclaimer">
          <p>
            Better Mortgage's One Day Mortgage™ promotion offers qualified customers who provide certain required financial information/documentation to Better Mortgage within 4 hours of locking a rate on a mortgage loan the opportunity to receive an underwriting determination from Better Mortgage within 24 hours of their rate lock. The underwriting determination is subject to customary terms, including fraud and anti-money laundering checks, that take place pre-closing and which may trigger additional required documentation from the customer. Better Mortgage does not guarantee that initial underwriting approval will result in a final underwriting approval. See One Day Mortgage™ Terms and Conditions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
