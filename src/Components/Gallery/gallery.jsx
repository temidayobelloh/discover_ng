
import DevilsElbow from '../Devil\'s_Elbow/devilselbow';
import LCC from '../LCC/lcc';
import Zuma from '../ZumaRock/zuma';
import './gallery.css';

const Gallery = () => {
  return (
    <div className='gallery_wrapper'>
    <Zuma/>
    <LCC/>
    <DevilsElbow/>
    </div>
  )
}

export default Gallery
