import { Navbar, Container, Form } from 'react-bootstrap';
import BellIcon from '@heroicons/react/24/solid/BellIcon';
import MapPinIcon from '@heroicons/react/24/solid/MapPinIcon';
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import { useState } from 'react';
import { getWeatherData } from '../services/weatherService';
import PropTypes from 'prop-types';

const Header = ({ onWeatherDataChange }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [cities, setCities] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [location, setLocation] = useState('');
    let city = 'Nueva York, YK';
    if (location != null) {
        city = location + ', CO';
    }

    const fetchWeatherData = async (location) => { 

        if (showSuggestions && cities.length > 0) {
            try {
                const data = await getWeatherData(location);
                onWeatherDataChange(data);
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        }
    };


    const searchCities = async (query) => {
        try {
            const response = await fetch(`https://api-colombia.com/api/v1/City/search/${query}`);
            const data = await response.json();

            setCities(data);

        } catch (error) {
            console.error('Error buscando ciudades:', error);
        }
    };

    const handleSearch = (e) => {
        document.getElementById('search').style.display = 'none';
        const value = e.target.value;
        setSearchTerm(value);
        if (value.length > 2) {
            searchCities(value);
            setShowSuggestions(true);
        } else {
            setCities([]);
            setShowSuggestions(false);
        }
    };

    const handleCitySelect = (city) => {
        setSearchTerm(city.name);
        setShowSuggestions(false);
        setLocation(city.name);
        fetchWeatherData(city.name);
    };

    return (
        <Navbar expand="md" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand>Weather Dashboard</Navbar.Brand>
                <Navbar.Text className="me-auto my-2 my-lg-0">
                    <BellIcon width={30} className="icon" />
                    <MapPinIcon width={30} className="icon" />
                    {city}
                </Navbar.Text>
                <Form className="d-flex">
                    <div className="search-container position-relative">
                        <MagnifyingGlassIcon id='search' className="search-icon" width={30} />
                        <Form.Control
                            type="search"
                            value={searchTerm}
                            placeholder="        Buscar ciudad"
                            className="w-300 search-input"
                            aria-label="Search"
                            onChange={handleSearch}
                        />
                        {showSuggestions && cities.length > 0 && (
                            <div className="suggestions-container position-absolute w-100 bg-white shadow-sm">
                                {cities.map((city) => (
                                    <div
                                        key={city.id}
                                        className="suggestion-item p-2 cursor-pointer hover:bg-gray-100"
                                        onClick={() => handleCitySelect(city)}
                                    >
                                        {city.name}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </Form>
            </Container>
        </Navbar>
    );
};

export default Header;

Header.propTypes = {
    onWeatherDataChange: PropTypes.func.isRequired
};

