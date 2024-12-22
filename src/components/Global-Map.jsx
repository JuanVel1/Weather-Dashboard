import { Map } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useLayoutEffect, useRef } from 'react';

const GlobalMap = () => {
  const mapContainerRef = useRef (null);
  Map.accessToken = "pk.eyJ1IjoianVhbnZlbCIsImEiOiJja2UxZjRzNW4yeTdrMnNtcHF2YmptNXZjIn0.QsPuUwiiCaAv-OVd_-vD4g";

  useLayoutEffect(() => {
    {
        const map = new Map({
          container: mapContainerRef.current, // container ID
          style: 'mapbox://styles/mapbox/streets-v12', // style URL
          center: [-74.5, 40], // starting position [lng, lat]
          zoom: 9, // starting zoom
        });
    }
  });

  return (
    <div
      style={{ width: '70%', height: '600px', backgroundColor: 'red' }}
      className="map-container"
      ref={mapContainerRef}
      id='map'
    />
  );
};

export default GlobalMap;