import PropTypes from 'prop-types';
import '../index.css';

const ForecastCard = ({ day, temp, icon, time, wind_cdir, wind_spd, pressure, sunrise, sunset_ts }) => {
  return (
    <>
      <div className={"card unselectedcard"}>
        <div className="card-header">
          <span className="day" style={{ marginRight: "5px" }}>{day}</span>
          <span className="time">{time}</span>
        </div>
        <div className={"card-temperature unselectedcard"}>
          <p>{temp}</p>
          <img id={`${icon}`} src={`./assets/weather_icons/${icon}.png`} alt="temp day logo" width={60} />
        </div>

        <div className="card-info">
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
