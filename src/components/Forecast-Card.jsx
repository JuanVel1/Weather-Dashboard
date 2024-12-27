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
          <img id={`${icon}`} src={`https://github.com/JuanVel1/Weather-Dashboard/blob/master/src/assets/weather_icons/${icon}.png?raw=true`} alt="temp day logo" width={60} />
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
  selected: PropTypes.bool,
  icon: PropTypes.string,
  day: PropTypes.string,
  temp: PropTypes.string,
  time: PropTypes.string,
  wind_cdir: PropTypes.string,
  wind_spd: PropTypes.string,
  pressure: PropTypes.string,
  sunrise: PropTypes.string,
  sunset_ts: PropTypes.string,
};

export default ForecastCard;
