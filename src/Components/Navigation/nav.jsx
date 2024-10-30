import './nav.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from '../Home/home';
import Explore from '../Explore/explore';
import Carousel from '../Carousel/carousel';
import Map from '../Interractive_Map/map';

const NavBar = () => {
  return (
    <Router>
      <nav className="navbar-container">
        <h1 className="navbar-logo">DiscoverNG</h1>
        <ul className="navbar-list">
          <li>
            <NavLink 
              to="/home" 
              className="navbar-link" 
              activeClassName="navbar-link-active"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className="navbar-link" 
              activeClassName="navbar-link-active"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/explore" 
              className="navbar-link" 
              activeClassName="navbar-link-active"
            >
              Explore
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/map" 
              className="navbar-link" 
              activeClassName="navbar-link-active"
            >
              Map
            </NavLink>
          </li>
         
        </ul>
      </nav>

      <div className="navbar-content">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<Explore />} />
          <Route path="/explore" element={<Carousel />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </div>
    </Router>
  );
};

export default NavBar;
