import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-background">
        <img className="bg-left" src="img/background/footer-background-design-left.png" alt="footer" />
        <img className="bg-right" src="img/background/footer-background-degin-right.png" alt="footer" />
        <div className="footer-content">
          <div className="footer-content-left">
            <div className="footer-contact-us">
              <h2>Shop Togethr</h2>
              <div className="footer-social-icons">
                <img className="social-icon" src="img/icons/facebook-icon.png" alt="social-icon" />
                <img className="social-icon" src="img/icons/linkedIn-icon.png" alt="social-icon" />
                <img className="social-icon" src="img/icons/twitter-icon.png" alt="social-icon" />
                <img className="social-icon" src="img/icons/youtube-icons.png" alt="social-icon" />
              </div>
            </div>
            <div className="pink-arrow-div"><img className="pink-arrow" src="img/icons/pink-arrow.png" alt="arrow" /></div>
          </div>
          <div className="footer-content-right footer-links">
            <div>
              <p>Electronics</p>
              <ul>
                <li>Laptops</li>
                <li>Phones</li>
                <li>Headphones</li>
                <li>Smart Watches</li>
              </ul>
            </div>
            <div>
              <p>Sports & Hobbies</p>
              <ul>
                <li>Bicycles</li>
              </ul>
            </div>
            <div>
              <p>Togethr</p>
              <ul>
                <li>About Us</li>
                <li>Shop something else</li>
                <li>Leave feedback</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Togethr. All rights reserved</p>
        <p>Privacy Policy</p>
        <p>Terms of services</p>
      </div>
    </div>
  );
};

export default Footer;
