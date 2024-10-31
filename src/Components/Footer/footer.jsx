import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Discover NG. All rights reserved.</p>
        <div className="footer-links">
          <a href="#about">Home</a>
          <a href="#services">About</a>
          <a href="#contact">Explore</a>
          <a href="#privacy-policy">Map</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
