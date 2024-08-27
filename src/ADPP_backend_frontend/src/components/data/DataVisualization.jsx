import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DataVisualization = ({ data }) => {
  const chartData = {
    labels: data.map(d => d.date),
    datasets: [
      {
        label: 'Cases',
        data: data.map(d => d.cases),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Deaths',
        data: data.map(d => d.deaths),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Disease Outbreak Data',
      },
    },
  };

  return (
    <div className="data-visualization">
      <Line options={options} data={chartData} />
    </div>
  );
};

export default DataVisualization;