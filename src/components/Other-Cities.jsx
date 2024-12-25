import { useState, useEffect } from 'react';
import { getWeatherData } from '../services/weatherService'

const OtherCities = () => {
  const [cities, setCities] = useState([
    { name: "Pereira", logo: "a01d", temp: "16°", weather: "Cloudy" },
    { name: "Medellin", logo: "a01d", temp: "10°", weather: "Cloudy" },
    { name: "Bogotá", logo: "a01d", temp: "15°", weather: "Cloudy" },
  ]);

  useEffect(() => {
    const fetchCitiesData = async () => {
      try {
        // Crear un nuevo array con los datos actualizados
        const updatedCities = await Promise.all(
          cities.map(async (city) => {
            const data = await getWeatherData(city.name);
            return {
              ...city,
              logo: data.data[0].weather.icon,
              weather: data.data[0].weather.description,
              temp: data.data[0].temp
            };
          })
        );
        
        // Actualizar el estado con los nuevos datos
        setCities(updatedCities);
      } catch (error) {
        console.error('Error fetching cities data:', error);
      }
    };

    fetchCitiesData();
  }, [cities]); // Se ejecuta solo una vez al montar el componente

  return (
    <div className="other-cities">
      <h3>Other Cities</h3>
      <ul>
        {cities.map((city, index) => (
          <li key={index} className="city">
            {city.name}
            {city.logo && (
              <img 
                src={`./src/assets/weather_icons/${city.logo}.png`} 
                alt="temp day logo" 
                width={40} 
                style={{ borderRadius: '1rem' }}
              />
            )}
            <br />
            {city.weather && city.temp && (
              <span>{city.weather} {city.temp}°C</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OtherCities;
