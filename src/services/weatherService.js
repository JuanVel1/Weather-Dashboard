const API_KEY = import.meta.env.VITE_API_WEATHERBIT_KEY;

export const getWeatherData = async (city) => {
    try {
        const response = await fetch(

            `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${API_KEY}`
        );
        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Error obteniendo datos del clima:', error);
        return [];
    }
};

export const getHourlyWeatherData = async (city, day) => {
    const response = await fetch(`https://api.weatherbit.io/v2.0/history/hourly?city=${city}&start_date=${day}:08&end_date=${day}:14&tz=local&key=${API_KEY}`);
    const data = await response.json();
    return data;
};

export function getHourFromTimestamp(timestamp) {
    const date = new Date(timestamp); // Crea un objeto Date a partir del timestamp
    const hours = date.getHours();    // Obtiene la hora (en formato 24 horas) 
    const label = hours > 12 ? 'PM' : 'AM';
    return `${hours.toString().padStart(2, '0')}${label}`;
}

