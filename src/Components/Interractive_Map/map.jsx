import { MapContainer, TileLayer, Marker,Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { Icon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { divIcon, point } from "leaflet";
import './map.css';

const customIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/128/819/819814.png",
  iconSize: [25, 25],
  iconAnchor: [12.5, 25],
  popupAnchor: [0, -25],
});
const createCustomClusterIcon = (cluster) => {
  return new divIcon({
    html: `<div class='cluster-icon'>${cluster.getChildCount()}</div>`,
    iconSize: point(33, 33, true),
    className: 'custom-marker-cluster',
  });
};

const Map = () => {
  const markers = [
    { geocode: [6.386667, 9.373889], popUp: "Obudu Mountain Resort" },
    { geocode: [6.43639, 3.53556], popUp: "Lekki Conservation Center" },
    { geocode: [9.130278, 7.233889], popUp: "Zuma Rock" },
    {geocode:[7.79688, 6.74048], popUp: "Confluence, Rivers Niger & Benue"},
    {geocode:[7.1540, 3.3457], popUp: "Olumo Rock"},
    {geocode:[6.4484,3.3915], popUp:"Freedom Park"},
    {geocode:[9.7500,10.5000], popUp:"Yankari Game Reserve"},
    {geocode:[7.3500, 5.1000], popUp:"Idanre Hills"},
    
    
  ];

  return (
    <div>
       <h1 className="interractiveMapContainer">Discover NG Interactive Map</h1>
      <MapContainer center={[9.081999, 8.675277]} zoom={6} style={{ height: '100vh', width: '100%' }}>
        <TileLayer 
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
        />      
        <MarkerClusterGroup chunkedLoading iconCreateFunction={createCustomClusterIcon}>
        {markers.map((marker, idx) => (
          <Marker key={idx} position={marker.geocode} icon={customIcon}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}

export default Map;
