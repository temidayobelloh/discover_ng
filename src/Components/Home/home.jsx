import React, { useEffect, useState } from 'react';
import './home.css'; 
import Search from '../SearchBtn/search';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    'https://images.unsplash.com/photo-1537372023620-37161b1ad8ac?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.pexels.com/photos/27640704/pexels-photo-27640704/free-photo-of-elmina-fishing-community.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.unsplash.com/photo-1626882920560-80b382db2bc9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3',
    'https://images.pexels.com/photos/4673995/pexels-photo-4673995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, [slides.length]);

  return (
    <div className="hero">
      <div 
        className="slides" 
        style={{ transform: `translateX(${-currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <h2 className="tag">Discover the Beauty of NIGERIA!</h2>
      <Search/>
    </div>
  );
};

export default Home;
