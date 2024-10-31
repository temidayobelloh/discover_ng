import { useRef } from 'react';
import './nav.css';
import Home from '../Home/home';
import Explore from '../Explore/explore';
import Carousel from '../Carousel/carousel'
import Map from '../Interractive_Map/map'


const NavBar = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const exploreRef = useRef(null);
  const mapRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <nav className="navbar-container">
        <h1 className="navbar-logo">DiscoverNG</h1>
        <ul className="navbar-list">
          <li>
            <span onClick={() => scrollToSection(homeRef)} className="navbar-link">
              Home
            </span>
          </li>
          <li>
            <span onClick={() => scrollToSection(aboutRef)} className="navbar-link">
              About
            </span>
          </li>
          <li>
            <span onClick={() => scrollToSection(exploreRef)} className="navbar-link">
              Explore
            </span>
          </li>
          <li>
            <span onClick={() => scrollToSection(mapRef)} className="navbar-link">
              Map
            </span>
          </li>
        </ul>
      </nav>


      <div ref={homeRef} className="section">
        <Home/>
      </div>
      <div ref={aboutRef} className="section">
        <Explore/>
      </div>
      <div ref={exploreRef} className="section">
        <Carousel/>
      </div>
      <div ref={mapRef} className="section">
        <Map/>
      </div>
    </div>
  );
};

export default NavBar;
