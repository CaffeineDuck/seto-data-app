import React from 'react';
import { kmlData } from '@/data/pollution';
import AllData from '@/data/pollution_data/all.json';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import ReactLeafletKml from 'react-leaflet-kml';

import 'leaflet/dist/leaflet.css';
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";


export default function PollutionMap() {
  const parser = new DOMParser();
  const kml = parser.parseFromString(kmlData, 'text/xml');
  return (
    <MapContainer
      center={[28.3949, 84.124]}
      preferCanvas={true}
      zoom={7}
      scrollWheelZoom={true}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <ReactLeafletKml kml={kml} />
      {AllData &&
        (AllData as any).map((item: any, key: number) => (
          <Marker key={key} position={[item.latitude, item.longitude]} >
            <Popup>
              <div className='min-w-[300px]'>

                <div style={{ background: item.AQIcolor ?? "red" }} className='text-xl rounded-md text-center' >{ item.AQI === '-' ? "No AQI data" : (item.AQI as number).toFixed(0)}</div>
                
                {  
                item.observations.map((item: any, key2: number) => (
                  <div key={"row_Data_"+item.parameter_code+"_"+key2} className=' border-b border-black flex w-full justify-between my-2' >
                    <span>{item.parameter_name}</span>
                    <span>{item.data?.value} {item.unit}</span>
                  </div>
                ))
                }
              </div>
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  );
}
