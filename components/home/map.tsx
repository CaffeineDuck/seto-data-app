import { MapContainer, Marker, TileLayer, Tooltip } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

export default function MyMap(props: any) {
  const { position, zoom } = props;

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }

  function showPosition(position: {
    coords: { latitude: number; longitude: number };
  }) {
    console.log(
      'Latitude: ' +
        position.coords.latitude +
        ', Longitude: ' +
        position.coords.longitude,
    );
  }

  getLocation();
  return (
    <MapContainer
      preferCanvas={true}
      center={[27.7179392, 85.3446311]}
      zoom={20}
      scrollWheelZoom={true}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position ? position : [27.7179392, 85.3446311]}>
        <Tooltip>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Tooltip>
      </Marker>
    </MapContainer>
  );
}
