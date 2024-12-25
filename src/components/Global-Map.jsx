import { Map, Marker } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useLayoutEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const GlobalMap = ({ weatherData }) => {
  const mapContainerRef = useRef(null);
  Map.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
  console.log(weatherData);


  useLayoutEffect(() => {

    let lat = 5.06889
    let lon = -75.51738
    if (weatherData) {
      lat = weatherData.lat
      lon = weatherData.lon
    }
    const map = new Map({
      container: mapContainerRef.current, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [lon, lat], // starting position [lng, lat]
      zoom: 13, // starting zoom

    });

    new Marker({
      element: createCustomIcon(),
    }).setLngLat([lon + 20, lat + 20]).addTo(map)


  }
  );

  function createCustomIcon() {
    const icon = document.createElement('div');
    icon.className = 'custom-marker';
    if (weatherData) {
      icon.style.backgroundImage = `url('./assets/weather_icons/${weatherData.data[0].weather.icon}.png')`;
    }
    else {
      icon.style.backgroundImage = `url('./assets/weather_icons/a01d.png')`;
    }
    icon.style.width = '50px';
    icon.style.height = '50px';
    icon.style.backgroundSize = 'cover';
    return icon;
  }

  return (
    <div
      style={{ width: '70%', height: '600px', borderRadius: '1rem', border: '1px solid var(--Dark-slate-gray)' }}
      className="map-container"
      ref={mapContainerRef}
      id='map'
    />
  );
};

export default GlobalMap;

GlobalMap.propTypes = {
  weatherData: PropTypes.object,
};
