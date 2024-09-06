import React, { useState } from 'react';
import './carousel.css';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalContent, setModalContent] = useState('');

  const slides = [
    {
      src: 'https://cimages.timbu.com/guides/2017/07/Obudu-3.jpg',
      alt: "Devil's Elbow, Obudu Cattle Ranch",
      description: "Devil's Elbow, Obudu Cattle Ranch",
      extraInfo: "When heading to Devil's Elbow at Obudu Cattle Ranch, be ready for quick weather changes and navigate the steep road cautiously. Each turn and weather shift demands attention. Stay safe and enjoy the adventure!",
    },
    {
      src: 'https://th.bing.com/th/id/R.9caa69a4beeb6425fee9dd67af688714?rik=aq2Uy0FHoqxYwA&pid=ImgRaw&r=0',
      alt: 'Lekki Conservation Center, Lagos',
      description: 'Lekki Conservation Center, Lagos',
      extraInfo: 'Lekki Conservation Center proudly holds the title of having the longest canopy walkway in Africa. It is an impressive feat that offers visitors a unique and thrilling experience while enjoying the beauty of nature.',
    },
    {
      src: 'https://images.pexels.com/photos/21715785/pexels-photo-21715785/free-photo-of-view-of-the-zuma-rock-in-niger-state-nigeria.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Zuma Rock, Suleja, Niger',
      description: 'Zuma Rock, Suleja, Niger',
      extraInfo: 'Zuma Rock is situated in Suleja, Niger State, not in Abuja as commonly believed. It is remarkable that it is visible from Abuja due to the proximity of Suleja to the capital city. The rocks presence is quite a sight to behold and holds significant cultural importance in the region.',
    },
    {
      src: 'https://example.com/image4.jpg',
      alt: 'Image 4',
      description: 'Description 4',
      extraInfo: 'More about Image 4...',
    },
    {
      src: 'https://example.com/image5.jpg',
      alt: 'Image 5',
      description: 'Description 5',
      extraInfo: 'More about Image 5...',
    }
  ];

  const nextSlide = () => {
    if (currentIndex < slides.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const showModal = (info) => {
    setModalContent(info);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-slider">
        <h5>Items</h5>
        <button className="carousel-control prev" onClick={prevSlide}>❮</button>

        <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}>
          {slides.map((slide, index) => (
            <div className="carousel-slide" key={index}>
              <div className="slide-container">
                <img src={slide.src} alt={slide.alt} className="carousel-image" />
                <div className="carousel-overlay">
                  <h5>{slide.description}</h5>
                  <button className="view-more-btn" onClick={() => showModal(slide.extraInfo)}>🢃</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-control next" onClick={nextSlide}>❯</button>
      </div>

      {modalContent && (
        <div className="carousel-modal">
          <div className="modal-content">
            <span className="close-btn" onClick={() => setModalContent('')}>×</span>
            <p>{modalContent}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
