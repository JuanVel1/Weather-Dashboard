import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';
import { getHourlyWeatherData, getHourFromTimestamp } from '../services/weatherService';

let data = [
  {
    name: '10AM',
    temp: 2400,
  },
  {
    name: '11AM',
    temp: 1398,
  },
  {
    name: '12AM',
    temp: 9800,
  },
  {
    name: '01PM',
    temp: 3908,
  },
  {
    name: '02PM',
    temp: 4800,
  },
  {
    name: '03AM',
    temp: 3800,
  },
];

const RainChart = ({ weatherData }) => {
  
  const yAxisTicks = [2500, 5000, 7500]; // Define los valores numéricos que deseas mostrar en el eje Y
  const yAxisLabels = { 2500: 'Heavy', 5000: 'Sunny', 7500: 'Rainy' }; // Mapea los valores numéricos a los valores de tipo string
  let data2 = [];
  
  if (weatherData) {
    try {
      data2 = getHourlyWeatherData(weatherData.city_name, weatherData.data[0].datetime);
      console.log(data2);
      data = data2.data.map(item => ({
        name: getHourFromTimestamp(item.datetime),
        temp: parseInt(item.temp) * 100
      }));

    }
    catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }

  const formatYAxis = (tickItem) => {
    return yAxisLabels[tickItem] || tickItem;
  };


  return (
    <ResponsiveContainer width="100%" height={360}>
      <BarChart
        width={100}
        height={100}
        data={data}
        barSize={5}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis ticks={yAxisTicks} tickFormatter={formatYAxis} />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="temp" fill="#8884d8" background={{ fill: '#eee' }} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default RainChart;

RainChart.propTypes = {
  weatherData: PropTypes.object,
};

