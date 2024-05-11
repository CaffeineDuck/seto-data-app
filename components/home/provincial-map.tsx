import React, { useRef } from 'react';
import L, { GeoJSON as GeoJSONType, LatLngExpression } from 'leaflet';
import { GeoJSON, MapContainer, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import { nepalProvince } from '@/data/provinceData/nepalProvince';
import { provinceOne } from '@/data/provinceData/province-1';
import { provinceTwo } from '@/data/provinceData/province-2';
import { provinceThree } from '@/data/provinceData/province-3';
import { provinceFour } from '@/data/provinceData/province-4';
import { provinceFive } from '@/data/provinceData/province-5';
import { provinceSix } from '@/data/provinceData/province-6';
import { provinceSeven } from '@/data/provinceData/province-7';

const provinceData = [
  nepalProvince,
  provinceOne,
  provinceTwo,
  provinceThree,
  provinceFour,
  provinceFive,
  provinceSix,
  provinceSeven,
];

export default function NepalMap() {
  const mapRef = useRef<L.Map | null>(null);

  const onEachFeature = (feature: any, layer: L.Layer) => {
    layer.on({
      mouseover: () => {},
      mouseout: resetHighlight,
      click: highlightFeature,
    });
  };

  const style = (feature: any) => ({
    weight: 2,
    opacity: 1,
    color: '#FFF',
    dashArray: '1',
    fillOpacity: 0.7,
    fillColor: getProvinceColor(feature.properties.Province as number),
  });

  const getProvinceColor = (province: number) => {
    switch (province) {
      case 1:
        return '#C1E8F9';
      case 2:
        return '#F7CEC7';
      case 3:
        return '#CBFBDC';
      case 4:
        return '#C4C4FE';
      case 5:
        return '#F5D1A7';
      case 6:
        return '#F4D0FE';
      case 7:
        return '#C1E8F9';
      default:
        return '#F7CEC7';
    }
  };

  const highlightFeature = (e: L.LeafletMouseEvent) => {
    var layer = e.target as L.Path;
    // @ts-ignore
    console.log(layer.feature.properties);
  };

  const resetHighlight = (e: L.LeafletMouseEvent) => {
    const map = mapRef.current;
    if (map) {
      (map as any).resetStyle(e.target); // Note: You might need a type assertion or method modification if TypeScript gives an error here.
    }
  };

  const zoomToProvince = (e: L.LeafletMouseEvent) => {
    const map = mapRef.current;
    if (map) {
      map.fitBounds(e.target.getBounds());
    }
  };

  const center: LatLngExpression | undefined = [28.3949, 84.124];

  return (
    <MapContainer
      center={center}
      preferCanvas={true}
      zoom={7}
      scrollWheelZoom={true}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <GeoJSON
        //@ts-ignore
        data={provinceData}
        style={style}
        onEachFeature={onEachFeature}
      />
    </MapContainer>
  );
}
