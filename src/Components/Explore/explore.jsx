import './explore.css';
import travelTips from '../assets/explore_24dp_34495E_FILL0_wght400_GRAD0_opsz24.svg';
import travelGuider from '../assets/navigation_24dp_34495E_FILL0_wght400_GRAD0_opsz24.svg';
import travelMap from '../assets/map_24dp_34495E_FILL0_wght400_GRAD0_opsz24.svg';
const Explore = () => {
  return (
    <div className='explore-background'>
    <h2 className='explore-heading'>What is Discover NG?</h2>
    <div className='explore-container'>
    <p> Discover NG is your gateway to Nigeria’s breathtaking attractions and cultural gems. Our web app offers a platform for virtual tours of hidden treasures, sharing intriguing facts and stories about each site.</p>
    <button className='explore-btn'>Check Popular Destinations</button>
    </div>
    <div className='explore-icons-container'>
      <div>
        <img src={travelTips} alt="Travel Tips Icon" />
        <p>Travel Tips</p>
        <p className='tips'>The app offers smart travel tips like the best hidden gems to explore, and safety advice to make your adventures across Nigeria unforgettable. </p>
      </div>
      <div>
        <img src={travelGuider} alt="Tourism Guide Icon" />
        <p>Tourism Guide</p>
        <p className='tips'>Discover NG allows users to uncover fascinating facts about various places, enriching their journey with insights that make each visit special.</p>
      </div>
      <div>
        <img src={travelMap} alt="Cultural Events Icon" />
        <p>Map</p>
        <p className='tips'>Discover NG includes a map feature that allows users to pinpoint and explore locations effortlessly, enhancing their travel experience across Nigeria.</p>
      </div>
    </div>
    </div>
  )
}

export default Explore;
