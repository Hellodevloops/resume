import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer mb-0">
      <div className="footer-container">
        <div className="footer-column">
          <div className="footer-logo">
            <img src="/tts.png" alt="Logo" />
            {/* <p>CV Builder</p> */}
          </div>
        </div>
        <div className="footer-column">
          <h3>About Us</h3>
          <p>CV Builder is a platform that helps job seekers create professional CVs quickly and easily.</p>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>123 Main St, Anytown, USA</p>
          <p>Email: info@cvbuilder.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;