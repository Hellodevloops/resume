import React from 'react';
import './Footer.css';
import Link from 'next/link';
import Image from 'next/image';
import logoSrc from "public/tts.png";

const Footer: React.FC = () => {
  return (
    <footer className="footer mb-0">
      <div className="footer-container">
        <div className="footer-column">
          <div className="footer-logo">
          <Link href="/">
          <span className="sr-only">OpenResume</span>
          <Image src={logoSrc} alt='footer-logo'
            />  
        </Link>
            {/* <p>CV Builder</p> */}
          </div>
        </div>
        <div className="footer-column">
          <h3>About Us</h3>
          <p>CV Builder is a platform that helps job seekers create professional CVs quickly and easily.</p>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Add: 2nd Floor, Kanchwala Building, College Rd, above Viju's Dabeli, near BYK College, Kulkarni Baug, Nashik, Maharashtra 422005</p>
          <p>Email: enquiry@ttsnasik.com</p>
          <p>Phone: +91-7249725544</p>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="https://www.facebook.com/ttsnasik">Facebook</a></li>
            <li><a href="https://www.instagram.com/ttsnasik/">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">LinkedIn</a></li>
           
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;