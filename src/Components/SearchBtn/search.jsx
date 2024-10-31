import React, { useState } from "react";
import './search.css';
import search from '../assets/search_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg';
const destinations = [
  { id: 1, name: "Abia", description: "Known as 'God's Own State', Abia is famous for its commercial hub, Aba." },
  { id: 2, name: "Adamawa", description: "Home to the Mandara Mountains and the Sukur Cultural Landscape, a UNESCO World Heritage site." },
  { id: 3, name: "Akwa Ibom", description: "Known for its rich oil reserves and beautiful beaches like Ibeno Beach." },
  { id: 4, name: "Anambra", description: "Famous for its historical town of Onitsha and the Ogbunike Caves." },
  { id: 5, name: "Bauchi", description: "Home to the Yankari National Park, a large wildlife park in Nigeria." },
  { id: 6, name: "Bayelsa", description: "Known for its oil and gas industry and the beautiful Oloibiri Oil Museum." },
  { id: 7, name: "Benue", description: "Often referred to as the 'Food Basket of the Nation' due to its rich agricultural produce." },
  { id: 8, name: "Borno", description: "Famous for the Sambisa Forest and the historic city of Maiduguri." },
  { id: 9, name: "Cross River", description: "Known for the Obudu Mountain Resort and the annual Calabar Carnival." },
  { id: 10, name: "Delta", description: "Rich in oil and gas, and known for the Asaba and Warri cities." },
  { id: 11, name: "Ebonyi", description: "Known for its salt lakes and the Abakaliki rice." },
  { id: 12, name: "Edo", description: "Home to the ancient Benin Kingdom and the famous Benin Bronzes." },
  { id: 13, name: "Ekiti", description: "Known for its many hills and the Ikogosi Warm Springs." },
  { id: 14, name: "Enugu", description: "Famous for its coal mines and the Awhum Waterfall." },
  { id: 15, name: "Gombe", description: "Known for the Gombe Stream National Park, home to chimpanzees." },
  { id: 16, name: "Imo", description: "Famous for the Oguta Lake and the Mbari cultural centers." },
  { id: 17, name: "Jigawa", description: "Known for its sand dunes and the Birnin Kudu rock paintings." },
  { id: 18, name: "Kaduna", description: "Home to the Kajuru Castle and the Nok Culture artifacts." },
  { id: 19, name: "Kano", description: "Famous for its ancient city walls and the Kurmi Market." },
  { id: 20, name: "Katsina", description: "Known for the Gobarau Minaret and the Emir's Palace." },
  { id: 21, name: "Kebbi", description: "Famous for the Argungu Fishing Festival." },
  { id: 22, name: "Kogi", description: "Home to the confluence of the Niger and Benue rivers." },
  { id: 23, name: "Kwara", description: "Known for the Esie Museum and the Ilorin Emirate." },
  { id: 24, name: "Lagos", description: "The commercial capital of Nigeria, known for its beaches and nightlife." },
  { id: 25, name: "Nasarawa", description: "Famous for the Farin Ruwa Falls and the Keffi town." },
  { id: 26, name: "Niger", description: "Home to the Kainji Dam and the Gurara Falls." },
  { id: 27, name: "Ogun", description: "Known for the Olumo Rock and the Adire textile industry." },
  { id: 28, name: "Ondo", description: "Famous for the Idanre Hills and the Owo Museum." },
  { id: 29, name: "Osun", description: "Home to the Osun-Osogbo Sacred Grove, a UNESCO World Heritage site." },
  { id: 30, name: "Oyo", description: "Known for the ancient city of Ibadan and the Cocoa House." },
  { id: 31, name: "Plateau", description: "Famous for the Jos Plateau and the Shere Hills." },
  { id: 32, name: "Rivers", description: "Known for its oil industry and the Port Harcourt city." },
  { id: 33, name: "Sokoto", description: "Home to the Sultan's Palace and the Usman Dan Fodio University." },
  { id: 34, name: "Taraba", description: "Famous for the Mambilla Plateau and the Gashaka Gumti National Park." },
  { id: 35, name: "Yobe", description: "Known for the Nguru wetlands and the Bade Emirate." },
  { id: 36, name: "Zamfara", description: "Famous for the Zamfara Forest and the Gusau Dam." },
  { id: 37, name: "Abuja (FCT)", description: "The capital city of Nigeria, known for the Aso Rock and the National Mosque." },
];

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  // Handle input changes
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setResults([]);
    }
  };

  // Handle search on button click
  const handleSearch = (e) => {
    e.preventDefault();
    const value = query.trim();

    if (value === "") {
      setResults([]);
      return;
    }

    const filtered = destinations.filter(destination =>
      destination.name.toLowerCase().includes(value.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <div className='btn'>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="search"
          placeholder="Search facts about states in Nigeria.."
          value={query}
          onChange={handleInputChange}
        />
        <button className="search-btn" type="submit">
          <img className='search-icon' src={search} alt="search-icon-btn"/>
        </button>
      </form>

      {results.length > 0 && (
        <ul className="results-list">
          {results.map((result) => (
            <li key={result.id} className="result-item">
              <h2>{result.name}</h2>
              <p>{result.description}</p>

            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
