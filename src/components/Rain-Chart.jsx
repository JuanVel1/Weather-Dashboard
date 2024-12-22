import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '10AM',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '11AM',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '12AM',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '01PM',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '02PM',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '03AM',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
];
const RainChart = () => {
  const yAxisTicks = [2500, 5000, 7500]; // Define los valores numéricos que deseas mostrar en el eje Y
  const yAxisLabels = { 2500: 'Heavy', 5000: 'Sunny', 7500: 'Rainy' }; // Mapea los valores numéricos a los valores de tipo string

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
          <YAxis ticks = {yAxisTicks} tickFormatter={formatYAxis} />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
      </ResponsiveContainer>
  );
};

export default RainChart;
