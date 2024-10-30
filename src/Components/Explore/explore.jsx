import './explore.css';

const Explore = () => {
  return (
    <div>
    <h2>What is Discover NG?</h2>
    <div className='explore-container'>
    <p> Discover NG is your gateway to Nigeria’s breathtaking attractions and cultural gems. Our web app offers a platform for virtual tours of hidden treasures, sharing intriguing facts and stories about each site.</p>
    <p>From travel tips to interactive maps and tourist guides, Discover NG ensures you have a smooth and 
      exciting experience across Nigeria’s diverse destinations.</p>
    </div>
    <div className='explore-icons'>
      <div>
        <img src="images/travel-tips-icon.png" alt="Travel Tips Icon" />
        <p>Travel Tips</p>
      </div>
      <div>
        <img src="images/guide-icon.png" alt="Tourism Guide Icon" />
        <p>Tourism Guide</p>
      </div>
      <div>
        <img src="images/culture-icon.png" alt="Cultural Events Icon" />
        <p>Cultural Events</p>
      </div>
    </div>

    <button>Check Popular Destinations</button>
    </div>
  )
}

export default Explore;
