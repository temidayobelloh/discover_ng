import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import './map.css';

const InterractiveMap = () => {
  return (
      <div>
      <h1 className="interractiveMapContainer">Discover NG Interractive Map</h1>
      <MapContainer center={[9.0820, 8.6753]} zoom={6}>
        <TileLayer 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'/>
      </MapContainer>
      </div>
  
  )
}

export default InterractiveMap;
