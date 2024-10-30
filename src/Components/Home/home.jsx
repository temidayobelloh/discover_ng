import React, { useEffect, useState } from 'react';
import './home.css'; 

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    'https://images.pexels.com/photos/3172830/pexels-photo-3172830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/2100686/pexels-photo-2100686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.unsplash.com/photo-1559833064-6f4573ec1ac9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1626882920560-80b382db2bc9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1704230093731-8dad84d386a9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3',
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
      <h2 className="tagline">Discover the Beauty of NIGERIA!</h2>
      <button className="btn">Explore</button>
    </div>
  );
};

export default Home;
