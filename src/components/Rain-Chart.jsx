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


async function getData(weatherData) {
  return await getHourlyWeatherData(weatherData.city_name, weatherData.data[0].datetime);
}

const RainChart = ({ weatherData }) => {

  const yAxisTicks = [2500, 5000, 7500]; // Define los valores numéricos que deseas mostrar en el eje Y
  const yAxisLabels = { 2500: 'Rainy', 5000: 'Heavy', 7500: 'Sunny' }; // Mapea los valores numéricos a los valores de tipo string

  if (weatherData) {
    try {
      getData(weatherData).then((wdata) => {
        console.log(wdata.data);
        data = wdata.data.map(item => (
          {
            name: getHourFromTimestamp(item.timestamp_local),
            temp: parseInt(item.temp) * 100
          }));
      }).finally(
        console.log(data)
      );

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
        <Bar dataKey="temp" fill="#0f7868" background={{ fill: '#eee' }} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default RainChart;

RainChart.propTypes = {
  weatherData: PropTypes.object,
};

