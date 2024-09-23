import React, { useState } from 'react';
import './carousel.css';
import facts from '../assets/facts.svg';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalContent, setModalContent] = useState('');

  const slides = [
    {
      src: 'https://cimages.timbu.com/guides/2017/07/Obudu-3.jpg',
      alt: "Devil's Elbow, Obudu",
      description: "Devil's Elbow, Obudu",
      extraInfo: "When heading to Devil's Elbow at Obudu Cattle Ranch, be ready for quick weather changes and navigate the steep road cautiously. Each turn and weather shift demands attention. Stay safe and enjoy the adventure!",
    },
    {
      src: 'https://static.wixstatic.com/media/b98b0a_03c45048a05b4b3bb64892c3f8525824~mv2.jpg/v1/fit/w_1000%2Ch_1000%2Cal_c%2Cq_80/file.jpg',
      alt: 'Owu waterfall',
      description: 'Owu Waterfall, Kwara',
      extraInfo: 'It is known as the highest waterfall in West Africa, cascading height from about 120 meters.',
    },
    {
      src: 'https://netstorage-legit.akamaized.net/images/vllkyt2j9ak76j18m.jpg',
      alt: 'Ancient Nok settlement, Kaduna',
      description: 'Nok Settlement, Kaduna',
      extraInfo: 'The site is where the famous Nok terracotta sculptures were discovered, dating back to 1000 BC.',
    },
    {
      src: 'https://images.pexels.com/photos/21715785/pexels-photo-21715785/free-photo-of-view-of-the-zuma-rock-in-niger-state-nigeria.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Zuma Rock, Suleja, Niger',
      description: 'Zuma Rock, Suleja, Niger',
      extraInfo: 'Zuma Rock is situated in Suleja, Niger State, not in Abuja as commonly believed. It is remarkable that it is visible from Abuja due to the proximity of Suleja to the capital city. The rocks presence is quite a sight to behold and holds significant cultural importance in the region.',
    },
    {
      src: 'https://static.wixstatic.com/media/b98b0a_5aef202c037d4fdeb349f0ab974d71d6~mv2.jpg/v1/fill/w_980,h_735,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b98b0a_5aef202c037d4fdeb349f0ab974d71d6~mv2.jpg',
      alt: 'Olumo Rock',
      description: 'Olumo Rock, Abeokuta, Ogun',
      extraInfo: 'There is a tree near Olumo Rock that has been standing for over 200 years, and never sheds its leaves, regardless of the season.',
    },
    {
      src: 'https://i0.wp.com/kaynuli.com/wp-content/uploads/2018/07/yankari.png?resize=948%2C627&ssl=1',
      alt: 'Yankari Game Reserve',
      description: 'Yankari Game Reserve, Bauchi',
      extraInfo: 'The Yankari National park is home to the largest surving elephant population in Nigeria, and it also features ancient iron-smelting sites that date back centuries.',
    }    ,
    {
      src: 'https://th.bing.com/th/id/R.4c028de5be7f52919bd5ea7a18a14f4c?rik=ZY%2fXqL92645e4Q&riu=http%3a%2f%2fbuzznigeria.com%2fwp-content%2fuploads%2f2015%2f03%2fidanrehills.jpg&ehk=eW4hTKLivXhkuUonWHkGMzg6O%2f2zV6O26sDs52UrtdY%3d&risl=&pid=ImgRaw&r=0',
      alt: 'Idanre Hills',
      description: 'Idanre Hills, Ondo',
      extraInfo: 'The hills are home to a mysterious footprint believed to belong to a deity, which locals say never fades.',
    },
    {
      src: 'https://c1.staticflickr.com/3/2496/4202980259_04248bdd3b_b.jpg',
      alt: 'Nike Art Gallery',
      description: 'Nike Art Gallery, Lagos',
      extraInfo: 'The gallery was established in 1983 by Nike Davies-Okundaye without any governental assistance, solely from her earnings as an artist.',
    },
    {
      src: 'https://th.bing.com/th/id/R.519e68c99b03dd73acecf0b044537492?rik=Ir2wu6oWpDAFaQ&pid=ImgRaw&r=0',
      alt: 'Mambilla Plateau',
      description: 'Mambilla Plateau',
      extraInfo: 'The Plateau is home to Nigerias only highland tea plantation, producing some of the best tea in the country.',
    },
    {
      src: 'https://th.bing.com/th/id/R.cb3eae5ba230293dc791eb8f2f9bae0b?rik=TB5W0vNR9cbNLQ&pid=ImgRaw&r=0',
      alt: 'Lekki Conservation Center, Lagos',
      description: 'Lekki Conservation Center, Lagos',
      extraInfo: 'Lekki Conservation Center proudly holds the title of having the longest canopy walkway in Africa (401 meters long). It is an impressive feat that offers visitors a unique and thrilling experience while enjoying the beauty of nature.',
    },
    {
      src: 'https://images.timbu.com/contents-ef55dd2d0f504d469ea8fd03e5ce842e/691df2f3-f211-4af6-8bfb-df312542cc59.png',
      alt: 'River Niger & Benue',
      description: 'The Confluence, Lokoja, Kogi',
      extraInfo: 'The rivers Niger and Benue have distinct temperatures, with Niger being warmer and the Benue river. This phenomenon is due to the different sources and flow patterns of the two rivers.',
    },
    {
      src: 'https://www.britishcouncil.org.ng/sites/default/files/freedom_park.jpg',
      alt: 'Freedom Park',
      description: 'Freedom Park, Lagos',
      extraInfo: 'The Freedon park was once a colonial-era prison where notable political activists, including Herbert Macaulay were imprisoned.',
    },
    {
      src: 'https://netstorage-legit.akamaized.net/images/vllkyt5tojm4i62gf.jpg',
      alt: 'Kainji Dam',
      description: 'Kainji Dam, Niger',
      extraInfo: 'The dam is one of the largest dams in Africa, providing hydroelectric power.',
    },
    {
      src: 'https://www.cometonigeria.com/wp-content/uploads/2020/01/Afi-Mountain-Wildlife-Sanctuary10-1.jpg',
      alt: 'Afi Mountain Wildlife Sanctuary, CrossRiver',
      description: 'Afi Mountain Wildlife Sanctuary',
      extraInfo: 'The sanctuary is located in CrossRiver state. It is home to the critically endangered CrossRiver gorilla.',
    },
    {
      src: 'https://www.nairaland.com/attachments/4447425_theogutabluelakeoftreasure1024x680_jpeg06a833f878cf0a9170b814fd08129676',
      alt: 'Oguta Lake, Imo',
      description: 'Oguta Lake, Imo',
      extraInfo: 'A natural lake known for its clear blue waters.',
    },


   
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
    

    setTimeout(() => {
      const modal = document.querySelector('.carousel-modal');
      if (modal) {
        const modalPosition = modal.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: modalPosition,
          behavior: 'smooth'
        });
      }
      modal.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-slider">
        <h5 style={{textAlign:"center", fontSize:"20px", padding:"30px 10px", color:"black"}}>Facts on Specific Locations in Nigeria <img src={facts} alt="facts-logo"/></h5>
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
