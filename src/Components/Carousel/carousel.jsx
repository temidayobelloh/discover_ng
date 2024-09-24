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
      src: 'https://th.bing.com/th/id/R.519e68c99b03dd73acecf0b044537492?rik=Ir2wu6oWpDAFaQ&pid=ImgRaw&r=0',
      alt: 'Mambilla Plateau',
      description: 'Mambilla Plateau, Plateau',
      extraInfo: 'The Plateau is home to Nigerias only highland tea plantation, producing some of the best tea in the country.',
    },
    {
      src: 'https://ibiene.com/wp-content/uploads/2021/01/Kajuru-castle-kaduna-state-nigeria-travel-5.jpg',
      alt: 'Kajuru Castle, Kaduna State',
      description: 'Kajuru Castle, Kaduna',
      extraInfo: 'Kajuru Castle is a medieval-style villa built in 1989 by a German expatriate in Nigeria. The castle, complete with dungeons, turrets, and a drawbridge, is a popular spot for weekend getaways and private events.'
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
      extraInfo: 'Zuma Rock is situated in Suleja, Niger State, not in Abuja as commonly believed. It is remarkable that it is visible from Abuja due to the proximity of Suleja to the capital city. The rock has a natural human face carved into it, which becomes more defined as you approach. Local folklore says the face is that of an ancient warrior guarding the city.',
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
      extraInfo: 'Yankari is the largest wildlife reserve in Nigeria, home to over 50 species of animals, including elephants, lions, and baboons. It’s one of the best places to see wildlife in its natural habitat in West Africa',
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
      extraInfo: 'Nike Art Gallery is one of the largest art galleries in Africa, showcasing over 8,000 works from traditional Nigerian textiles, sculptures, and contemporary art. The gallery is owned by Chief Nike Davies-Okundaye, who personally trains women in rural areas in textile arts, helping to preserve ancient techniques',
    },
    {
      src: 'https://m.psecn.photoshelter.com/img-get2/I0000VkWvqb7q95E/fit=1000x750/g=G0000X9MCoZDi.bE/GIDAN-KORAU-2012.jpg',
      alt: 'Katsina Royal Palace, Katsina State',
      description: 'Katsina Royal Palace, Katsina State',
      extraInfo: 'The Gidan Korau, or Katsina Royal Palace, is one of the oldest and largest palaces in Nigeria, built in 1348. The palace still serves as the residence of the Emir of Katsina, and its grand architecture reflects centuries of Hausa culture.'
    },
    {
      src: 'https://th.bing.com/th/id/R.cb3eae5ba230293dc791eb8f2f9bae0b?rik=TB5W0vNR9cbNLQ&pid=ImgRaw&r=0',
      alt: 'Lekki Conservation Center, Lagos',
      description: 'Lekki Conservation Center, Lagos',
      extraInfo: 'Lekki Conservation Centre is a 78-hectare nature reserve, known for its longest canopy walkway in Africa, spanning 401 meters above the forest.',
    },
    {
      src: 'https://images.timbu.com/contents-ef55dd2d0f504d469ea8fd03e5ce842e/691df2f3-f211-4af6-8bfb-df312542cc59.png',
      alt: 'River Niger & Benue',
      description: 'The Confluence, Lokoja, Kogi',
      extraInfo: 'The rivers Niger and Benue have distinct temperatures, with Niger being warmer than the Benue river. This phenomenon is due to the different sources and flow patterns of the two rivers.',
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
      description: 'Afi Mountain Wildlife Sanctuary, CrossRiver',
      extraInfo: 'The sanctuary is located in CrossRiver state. It is home to the critically endangered CrossRiver gorilla.',
    },
    {
      src: 'https://www.nairaland.com/attachments/4447425_theogutabluelakeoftreasure1024x680_jpeg06a833f878cf0a9170b814fd08129676',
      alt: 'Oguta Lake, Imo',
      description: 'Oguta Lake, Imo',
      extraInfo: 'Oguta Lake is the largest natural lake in southeastern Nigeria and is notable for its deep blue water. It’s a great spot for fishing, boating, and picnics.',
    },
    {
      src: 'https://i.pinimg.com/originals/96/bc/28/96bc287d61541f507ee6ec638e07f434.jpg',
      alt: 'Agbokim Waterfalls, Cross River',
      description: 'Agbokim Waterfalls, Cross River',
      extraInfo: 'The waterfalls known for its seven streams cascading over a cliff.'
    },
    {
      src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/e7/19/be/base-of-tree-house.jpg?w=1200&h=1200&s=1',
      alt: 'Agbokim Waterfalls, Cross River',
      description: 'Agbokim Waterfalls, Cross River',
      extraInfo: 'A rainforest reserve home to endangered species like the white-throated monkey.'
    },
    {
      src: 'https://media-cdn.tripadvisor.com/media/photo-s/1b/8d/d8/c8/views-at-gurara-waterfalls.jpg',
      alt: 'Gurara Waterfalls',
      description: 'Gurara Waterfalls, Niger',
      extraInfo: 'Named after two dieties, Gura and Rara. The falls is one of Nigeria’s largest waterfalls.'
    },
    {
      src: 'https://th.bing.com/th/id/R.da50782d4ca7be41e51e995ad882f94f?rik=Ih0kAajFJItlkg&riu=http%3a%2f%2fartsymoments.com%2fwp-content%2fuploads%2f2017%2f04%2fIMG_9501.jpg&ehk=ewGahusSwEw9ZKy09RLuis6HRRYI2pGCr9yvpN0AcLY%3d&risl=&pid=ImgRaw&r=0',
      alt: 'Alok Ikom Monoliths, Cross River State',
      description: 'Alok Ikom Monoliths, Cross River',
      extraInfo: 'The Ikom Monoliths are over 300 carved stones, dating back to between the 16th and 18th centuries, arranged in circles across several communities.Each monolith bears distinct geometric and human-like engravings, which are believed to symbolize ancient gods or ancestors. The site is considered Nigeria’s “Stonehenge.'
    },
    {
      src: 'https://i.pinimg.com/736x/a4/ea/0d/a4ea0d78875e0d68a8f2b7461873930a.jpg',
      alt: 'Ado Awaye Lake',
      description: 'Ado Awaye Lake, Oyo',
      extraInfo: 'Ado Awaye Suspended Lake is one of only two suspended lakes in the world, with the other located in Colorado, USA.'
    },
    {
      src: 'https://i0.wp.com/outravelandtour.com/wp-content/uploads/2020/02/Ngwo-pine-forest-4.jpg?w=1633&ssl=1',
      alt: 'Ngwo Pine Forest, Enugu State',
      description: 'Ngwo Pine Forest, Enugu',
      extraInfo: 'This man-made forest features towering pine trees and a natural cave with a small waterfall hidden within'
    },
    {
      src: 'https://kwaraconnect.com/wp-content/uploads/2023/04/20230413_120854-01.jpeg',
      alt: 'Esie Museum, Kwara State',
      description: 'Esie Museum, Kwara',
      extraInfo: 'Esie Museum is Nigerias first museum, founded in 1945, and houses over 800 soapstone figurines, believed to be the largest collection in Africa. he origin of the soapstone figures remains a mystery, and locals believe the statues are the remnants of a cursed tribe, adding a layer of intrigue.'
    },
    {
      src: 'https://heroesofadventure.com/wp-content/uploads/2018/12/Shiem-Yusuf_190_jos.jpg',
      alt: 'Farmlands of Shere Hills, Plateau State',
      description: 'Farmlands of Shere Hills, Plateau',
      extraInfo: 'The Shere Hills are the highest point in Northern Nigeria, offering spectacular views and trekking trails. The area is dotted with traditional farmlands, where you can find rare crops and medicinal plants used by indigenous peoples.'
    },
    {
      src: 'https://refinedng.com/wp-content/uploads/2020/05/Ikogosi-Warm-Spring.jpg',
      alt: 'Ikogosi Warm Springs, Ekiti State',
      description: 'Ikogosi Warm Springs, Ekiti ',
      extraInfo: 'Ikogosi Warm Springs is unique because it is a confluence of both warm and cold springs, flowing side by side without mixing. The mystery of these two springs merging has baffled scientists, while visitors enjoy the soothing warmth of the springs natural pools.'
    },
    {
      src: 'https://img1.wsimg.com/isteam/ip/16d54e25-041b-4908-9eb5-301e964623b7/20210307_121522.jpg',
      alt: 'Chappal Waddi (Gangirwal), Taraba State',
      description: 'Chappal Waddi (Gangirwal), Taraba',
      extraInfo: 'At 2,419 meters, Chappal Waddi is the highest mountain in Nigeria and is part of the Gashaka-Gumti National Park.'
    },
    {
      src: 'https://res-3.cloudinary.com/hpwmsw17c/image/upload/q_auto/v1/ghost-blog-images/Osun-Osogbo-Sacred-Grove--A-story-about-the-oldest-and-remaining-sacred-grove-in-Yorubaland.jpg',
      alt: 'Osun Sacred Grove, Osun State',
      description: 'Osun Sacred Grove, Osun State',
      extraInfo: 'The Osun Sacred Grove is a UNESCO World Heritage Site and the sacred heartland of the Yoruba deity Osun. The grove is filled with shrines, sculptures, and artworks, making it a spiritual and cultural center.'
    },
    {
      src: 'https://akstrending.com/wp-content/uploads/2018/02/Ibeno-Beach-In-Akwa-Ibom-State.jpg',
      alt: 'Ibeno Beach, Akwa Ibom State',
      description: 'Ibeno Beach, Akwa Ibom',
      extraInfo: 'Ibeno Beach is the longest beach in West Africa, stretching over 90 kilometers along the coast. The beach offers pristine white sand and is known for its peaceful environment and excellent opportunities for fishing and beach sports.'
    },
    {
      src: 'https://th.bing.com/th/id/R.3a4c023019efaf3d63ab3f9aaae49b44?rik=x7TBoUauHijJdA&riu=http%3a%2f%2fbradshawfoundation.com%2fafrica%2fnigeria%2fbirnin_kudu%2fdutsen_habude%2f3b.jpg&ehk=7kmF8cWlHU8TNa3vX%2fnJJQz81%2bjDEj9zHEYff0DHUO4%3d&risl=&pid=ImgRaw&r=0',
      alt: 'Birnin Kudu Rock Paintings, Jigawa State',
      description: 'Birnin Kudu Rock Paintings, Jigawa',
      extraInfo: 'Birnin Kudu is home to some of Nigeria’s oldest rock paintings, dating back thousands of years. The paintings depict human and animal figures and provide insight into the prehistoric culture of the region.'
    },
    {
      src: 'https://heroesofadventure.com/wp-content/uploads/2018/12/The_First_Administrative_Building_Badagry_Lagos2.jpg',
      alt: 'Badagry Slave Museum, Lagos State',
      description: 'Badagry Slave Museum, Lagos',
      extraInfo: 'The Badagry Slave Museum is a poignant reminder of Nigerias involvement in the transatlantic slave trade. Visitors can see the Point of No Return, where slaves were shipped out to the Americas, and the chains and relics used during the slave trade.'
    },
    {
      src: 'https://www.hlimg.com/images/things2do/738X538/ttd_1520680430m1.jpg',
      alt: 'Kura Falls, Plateau State',
      description: 'Kura Falls, Plateau State',
      extraInfo: 'Kura Falls is a hidden gem nestled in the rocky highlands of Plateau State.The area around the falls is known for its diverse wildlife, including antelopes and rare birds, making it a perfect spot for nature enthusiasts.'
    },
    {
      src: 'https://d6qyz3em3b312.cloudfront.net/upload/images/media/2016/11/16/25989204581_d432ce2411_o.2048x1024.jpg',
      alt: 'Mandara Mountains, Borno State',
      description: 'Mandara Mountains, Borno State',
      extraInfo: 'The Mandara Mountains form part of the natural border between Nigeria and Cameroon, featuring sharp ridges and peaks. The mountains are home to ancient terraced farming methods, and the area is rich in culture, including the unique architecture of the local people.'
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
