import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import useFetchData from '../../hooks/useFetchData';

const AnalyticsDashboard = () => {
  const { data: analyticsData, loading, error } = useFetchData('/api/analytics');

  if (loading) return <div>Loading analytics...</div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div className="analytics-dashboard">
      <h2>Disease Outbreak Analytics</h2>
      <div className="chart-container">
        <div className="chart">
          <h3>Cases by Location</h3>
          <Bar data={analyticsData.casesByLocation} options={chartOptions} />
        </div>
        <div className="chart">
          <h3>Trend Over Time</h3>
          <Line data={analyticsData.trendOverTime} options={chartOptions} />
        </div>
        <div className="chart">
          <h3>Distribution by Disease Type</h3>
          <Pie data={analyticsData.distributionByType} />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;