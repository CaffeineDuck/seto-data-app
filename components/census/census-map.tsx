'use client';

import React, { useEffect, useRef, useState } from 'react';
import L, { GeoJSON as GeoJSONType } from 'leaflet';
import { GeoJSON, MapContainer, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import { getDistrictDataByAreaName } from '@/data/censusData';
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

export default function CensusMap() {
  const mapRef = useRef<L.Map | null>(null);
  const [hoveredDistrict, setHoveredDistrict] = useState<any>();
  const [selectedDistrict, setSelectedDistrict] = useState<any>({
    province: 1,
    district: 1,
    area_name: 'taplejung',
    type: 'pop_size',
    total: 120590,
  });

  const onEachFeature = (feature: any, layer: L.Layer) => {
    layer.on({
      mouseover: () => {
        highlightFeature;
        setHoveredDistrict(feature.properties);
      },
      mouseout: resetHighlight,
      click: () => {
        zoomToProvince;
        setSelectedDistrict(
          getDistrictDataByAreaName(feature.properties.TARGET),
        );
      },
    });
  };

  const style = (feature: any) => ({
    weight: 2,
    opacity: 1,
    color: '#FFF',
    dashArray: '1',
    fillOpacity: 0.7,
    fillColor: getProvinceColor(feature.properties.Province as number),
    backgroundColor: 'red',
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

    layer.setStyle({
      weight: 5,
      color: '#666',
      dashArray: '',
      fillOpacity: 0.7,
    });
  };

  const resetHighlight = (e: L.LeafletMouseEvent) => {
    const map = mapRef.current;
    if (map) {
      (map as any).resetStyle(e.target);
    }
  };

  const zoomToProvince = (e: L.LeafletMouseEvent) => {
    const map = mapRef.current;
    if (map) {
      map.fitBounds(e.target.getBounds());
    }
  };

  return (
    <>
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
        <GeoJSON
          //@ts-ignore
          data={provinceData}
          style={style}
          onEachFeature={onEachFeature}
        />
      </MapContainer>
      <span className="italic">
        Click on any district to see the details view.
      </span>
      {selectedDistrict && (
        <div className="grid w-fit min-w-[30vw] gap-2 rounded-lg bg-white p-3">
          <div>
            District:{' '}
            <span className="font-bold capitalize">
              {selectedDistrict?.area_name}
            </span>
          </div>
          <div>
            Population: <span>{selectedDistrict?.total}</span>
          </div>
        </div>
      )}
    </>
  );
}
