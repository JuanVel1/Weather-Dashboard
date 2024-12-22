import PropTypes from 'prop-types';
import '../index.css';

const ForecastCard = ({ selected, day, temp, icon }) => {
  return (
    <>
      <div className={`card ${selected ? "cardselected" : "unselectedcard"}`}>
        <div className="card-header">
          <span className="day">{day}</span>
          <span className="time" style={{ display: selected ? "" : "none" }}>11:42 PM</span>
        </div>
        <div className={`card-temperature ${selected ? "audiowide-regular cardselected" : "unselectedcard"}`}>
          <p>{temp}</p>
          <img src={`./src/assets/images/${icon}`} alt="temp day logo" width={60} />
        </div>

        <div className="card-info" style={{ display: selected ? "block" : "none" }}>
          <span>Real Feel: 18°</span>
          <span>Wind: N-E, 5-8 km/h</span>
          <span>Pressure: 1000MB Sunrise: 6:02 AM</span>
          <span>Humidity: 51% Sunset: 9:18 PM</span>
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
};

export default ForecastCard;
