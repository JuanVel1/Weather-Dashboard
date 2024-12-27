import { Navbar, Container, Nav } from 'react-bootstrap';
import ForecastCard from './Forecast-Card';
import RainChart from './Rain-Chart';
import PropTypes from 'prop-types';
import { getHourFromTimestamp } from '../services/weatherService';
const Days = ({ weatherData }) => { 
    function getDayName(dateString) {
        const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        const date = new Date(dateString); // Convierte el string a un objeto Date
        const dayIndex = date.getDay();    // Obtiene el índice del día de la semana 
        return daysOfWeek[dayIndex];       // Devuelve el nombre del día
    }

    return (
        <>
            <div className="days">
                <Navbar expand="lg" style={{ width: '70%', height: '300px' }}>
                    <div>
                        <Container className='' fluid>
                            <Nav className="me-auto">
                                <Nav.Link href="#home" className='days-nav'>Today</Nav.Link>
                                <Nav.Link href="#link" className='days-nav'>Tomorrow</Nav.Link>
                                <Nav.Link href="#link" className='days-nav'>Next 7 days</Nav.Link>
                            </Nav>
                        </Container>
                        <Nav>
                            <Nav.Link href="#forecast">Forecast</Nav.Link>
                            <Nav.Link href="#airquality">Air Quality</Nav.Link>
                        </Nav>
                        <Nav>
                            {weatherData ? <ForecastCard wind_cdir={weatherData.wind_cdir} wind_spd={weatherData.wind_spd} pressure={weatherData.data[0].pres} sunset_ts={getHourFromTimestamp(weatherData.data[0].sunset_ts)} sunrise={weatherData.data[0].sunrise} time={getHourFromTimestamp(weatherData.data[0].ts)} selected={true} day={getDayName(weatherData.data[0].datetime)} temp={weatherData.data[0].temp + "°"} icon={weatherData.data[0].weather.icon} /> : <ForecastCard day={"Monday"} temp={"16°"} icon='a01d' selected={false} time={""} />}
                            {weatherData ? <ForecastCard wind_cdir={weatherData.wind_cdir} wind_spd={weatherData.wind_spd} pressure={weatherData.data[1].pres} sunset_ts={getHourFromTimestamp(weatherData.data[1].sunset_ts)} sunrise={weatherData.data[1].sunrise} time={getHourFromTimestamp(weatherData.data[1].ts)} selected={false} day={getDayName(weatherData.data[1].datetime)} temp={weatherData.data[1].temp + "°"} icon={weatherData.data[1].weather.icon} /> : <ForecastCard day={"Tue"} temp={"10°"} icon='a01d' selected={false} time={""} />}
                            {weatherData ? <ForecastCard wind_cdir={weatherData.wind_cdir} wind_spd={weatherData.wind_spd} pressure={weatherData.data[2].pres} sunset_ts={getHourFromTimestamp(weatherData.data[2].sunset_ts)} sunrise={weatherData.data[2].sunrise} time={getHourFromTimestamp(weatherData.data[2].ts)} selected={false} day={getDayName(weatherData.data[2].datetime)} temp={weatherData.data[2].temp + "°"} icon={weatherData.data[2].weather.icon} /> : <ForecastCard day={"wed"} temp={"15°"} icon='a01d' selected={false} time={""} />}
                            {weatherData ? <ForecastCard wind_cdir={weatherData.wind_cdir} wind_spd={weatherData.wind_spd} pressure={weatherData.data[3].pres} sunset_ts={getHourFromTimestamp(weatherData.data[3].sunset_ts)} sunrise={weatherData.data[3].sunrise} time={getHourFromTimestamp(weatherData.data[3].ts)} selected={false} day={getDayName(weatherData.data[3].datetime)} temp={weatherData.data[3].temp + "°"} icon={weatherData.data[3].weather.icon} /> : <ForecastCard day={"Thu"} temp={"11°"} icon='a01d' selected={false} time={""} />}
                            {weatherData ? <ForecastCard wind_cdir={weatherData.wind_cdir} wind_spd={weatherData.wind_spd} pressure={weatherData.data[4].pres} sunset_ts={getHourFromTimestamp(weatherData.data[4].sunset_ts)} sunrise={weatherData.data[4].sunrise} time={getHourFromTimestamp(weatherData.data[4].ts)} selected={false} day={getDayName(weatherData.data[4].datetime)} temp={weatherData.data[4].temp + "°"} icon={weatherData.data[4].weather.icon} /> : <ForecastCard day={"Fri"} temp={"18°"} icon='a01d' selected={false} time='' />}
                            {weatherData ? <ForecastCard wind_cdir={weatherData.wind_cdir} wind_spd={weatherData.wind_spd} pressure={weatherData.data[5].pres} sunset_ts={getHourFromTimestamp(weatherData.data[5].sunset_ts)} sunrise={weatherData.data[5].sunrise} time={getHourFromTimestamp(weatherData.data[5].ts)} selected={false} day={getDayName(weatherData.data[5].datetime)} temp={weatherData.data[5].temp + "°"} icon={weatherData.data[5].weather.icon} /> : <ForecastCard day={"Sat"} temp={"12°"} icon='a01d' selected={false} time={""} />}
                            {weatherData ? <ForecastCard wind_cdir={weatherData.wind_cdir} wind_spd={weatherData.wind_spd} pressure={weatherData.data[6].pres} sunset_ts={getHourFromTimestamp(weatherData.data[6].sunset_ts)} sunrise={weatherData.data[6].sunrise} time={getHourFromTimestamp(weatherData.data[6].ts)} selected={false} day={getDayName(weatherData.data[6].datetime)} temp={weatherData.data[6].temp + "°"} icon={weatherData.data[6].weather.icon} /> : <ForecastCard day={"Sun"} temp={"10°"} icon='a01d' selected={false} time={""} />}
                        </Nav>
                    </div>
                </Navbar>
                <Navbar style={{ width: '30%' }}>
                    <RainChart weatherData={weatherData} />
                </Navbar>
            </div>
        </>
    );
};

Days.propTypes = {
    weatherData: PropTypes.object
};


export default Days;