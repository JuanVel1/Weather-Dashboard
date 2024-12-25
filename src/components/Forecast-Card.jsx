import PropTypes from 'prop-types';
import '../index.css';

const ForecastCard = ({ selected, day, temp, icon, time, wind_cdir, wind_spd, pressure, sunrise, sunset_ts }) => {
  return (
    <>
      <div className={`card ${selected ? "cardselected" : "unselectedcard"}`}>
        <div className="card-header">
          <span className="day" style={{marginRight: "5px"}}>{day}</span>
          <span className="time" style={{ display: selected ? "" : "none" }}>{time}</span>
        </div>
        <div className={`card-temperature ${selected ? "audiowide-regular cardselected" : "unselectedcard"}`}>
          <p>{temp}</p>
          <img src={`./src/assets/weather_icons/${icon}.png`} alt="temp day logo" width={60} />
        </div>

        <div className="card-info" style={{ display: selected ? "block" : "none" }}> 
          <span>Wind: {wind_cdir}, {wind_spd} km/h</span><br />
          <span>Pressure: {pressure} Sunrise: {sunrise}</span><br />
          <span>Sunset: {sunset_ts}</span>
        </div>
      </div>
    </>
  );
};

ForecastCard.propTypes = {
  selected: PropTypes.bool.isRequired,
  icon: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  temp: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  wind_cdir: PropTypes.string.isRequired,
  wind_spd: PropTypes.string.isRequired,
  pressure: PropTypes.string.isRequired,
  sunrise: PropTypes.string.isRequired,
  sunset_ts: PropTypes.string.isRequired,
};

export default ForecastCard;
