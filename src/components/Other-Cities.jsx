const OtherCities = () => {
  const cities = [
    { name: "Pereira", logo: 'cloud-sun.svg', weather: "Mostly Sunny", temp: 29 },
    { name: "Medellin", logo: 'cloud-rain.svg', weather: "Cloudy", temp: 19 },
    { name: "Bogotá", logo: 'sun-dim.svg', weather: "Sunny", temp: 31 },
  ];

  return (
    <div className="other-cities">
      <h3>Other Cities</h3>
      <ul>
        {cities.map((city, index) => (
          <li key={index} className="city">
            {city.name} <img src={`./src/assets/images/${city.logo}`} alt="temp day logo" width={40} />
            <br />
            {city.weather} {city.temp}°C 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OtherCities;
