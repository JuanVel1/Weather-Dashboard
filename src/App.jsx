import './App.css'
import Header from './components/Header'
import Days from './components/Days'
import GlobalMap from './components/Global-Map'
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import OtherCities from './components/Other-Cities';

mapboxgl.accessToken = 'pk.eyJ1IjoianVhbnZlbCIsImEiOiJjbTUwMjNjMWwxZ2gzMmxvbzR5aTZzOHhqIn0.K4zBgii-jff6uvpb9CeKvw';

function App() {

  return (
    <>
      <Header />
      <Days />
      <div className="map"><GlobalMap /><OtherCities/></div>

    </>
  )
}

export default App
