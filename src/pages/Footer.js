import React from 'react';
import video from '../videos/cooking-video.mp4';
import '../styles/Footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Cooking Video Section */}
        <div className="cooking-video-container">
          <video autoPlay muted loop className="video">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="about-section">
          <h3>Connect with Us</h3>
          <div className="footer-links">
            <a href="https://www.instagram.com/luffyo_o14" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.linkedin.com/in/rohith-reddy" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="tel:+91 8008318764">Mobile No</a>
            <a href="https://github.com/Rohith309" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
