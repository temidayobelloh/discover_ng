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
    { geocode: [6.386667, 9.373889], popUp: "Obudu Mountain Resort, CrossRiver" },
    { geocode: [6.43639, 3.53556], popUp: "Lekki Conservation Center, Lagos" },
    { geocode: [9.130278, 7.233889], popUp: "Zuma Rock, Niger" },
    {geocode:[7.79688, 6.74048], popUp: "Confluence, Rivers Niger & Benue, Lokoja"},
    {geocode:[7.1540, 3.3457], popUp: "Olumo Rock, Ogun"},
    {geocode:[6.4484,3.3915], popUp:"Freedom Park, Lagos"},
    {geocode:[9.7500,10.5000], popUp:"Yankari Game Reserve, Bauchi"},
    {geocode:[7.3500, 5.1000], popUp:"Idanre Hills, Ondo"},
    {geocode:[6.71383337, 11.25002], popUp:"Mambilla Plateau, Plateau"},
    {geocode:[10.27704, 7.85783], popUp:"Karuju Castle, Kaduna"},
    {geocode:[8.340348, 5.142478], popUp:"Owu Waterfall, Kwara"},
    {geocode:[9.499998, 8.0],popUp:"Nok Settlement, Kaduna"},
    {geocode:[6.4457, 3.4835],popUp:"Nike Art Gallery, Lagos"},
    {geocode:[12.9932, 7.6111],popUp:"Katsina Royal Palace, Katsina"},
    {geocode:[10.1084,4.5692], popUp:"Kainji Dam, Niger"},
    {geocode:[ 6.2032, 8.9512], popUp: "Afi Mountain Wildlife Sanctuary, CrossRiver"},
    {geocode:[5.7121, 6.8089], popUp: "Oguta Lake, Imo"},
    {geocode: [5.9744, 8.7969],popUp:"Agbomkim Waterfalls, Crossriver"},
    {geocode:[9.3147, 6.0306], popUp: "Gurara Waterfall, Niger"},
    {geocode:[5.9656, 8.7144], popUp: "Alok Ikom Monoliths, CrossRiver"},
    {geocode:[7.6339, 3.6239], popUp: "Ado Awaye Lake, Oyo"},
    {geocode:[6.4912, 7.4875], popUp:"Ngwo Pine Forest, Enugu"},
    {geocode:[8.4362, 5.1175],popUp:"Esie Musuem, Kwara"},
    {geocode:[9.8689, 8.9611], popUp: "Farmland of ShereHills, Plateau"},
    {geocode:[7.5861, 4.8747], popUp: "Ikogosi WarmSprings, Ekiti"},
    {geocode:[7.0200, 11.0786], popUp:"Chappi Waddi, Taraba"},
    {geocode:[7.7673, 4.5567], popUp:"Osun Sacred Grove, Osun"},
    {geocode:[4.5690, 7.9787], popUp:"Ibeno beach, Akwa Ibom"},
    {geocode:[11.4581, 9.4603],popUp:"Birnin Kudu Rock Paintings, Jigawa"},
    {geocode:[6.4159, 2.8825], popUp:"Badagry Slave Musuem, Lagos"},
    {geocode:[9.9465, 8.8596], popUp:"Kura Falls, Plateau"},
    {geocode:[9.9465, 8.8596],popUp:"Mandara Mountains Borno"},
  ];

  return (
    <div className="leaflet-container-one">
      <MapContainer center={[9.081999, 8.675277]} zoom={6} style={{ height: '75vh', width: '80%' }}>
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
