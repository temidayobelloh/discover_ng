import './footer.css';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Logo and Description */}
      <div>
        <h2 className="footer-logo">DiscoverNG</h2>
      </div>

      {/* Navigation Links */}
      <ul className="footer-nav">
        <h3>Quick Links</h3>
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/explore">Explore</NavLink></li>
        <li><NavLink to="/tour">Tour</NavLink></li>
        <li><NavLink to="/map">Map</NavLink></li>
      </ul>

      {/* Social Media Links */}
      <div className="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        </a>
      </div>

      {/* Copyright Section */}
      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} DiscoverNG. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
