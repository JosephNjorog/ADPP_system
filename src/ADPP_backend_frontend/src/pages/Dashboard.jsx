import React from 'react';
import DataVisualization from '../components/data/DataVisualization';
import PredictionDashboard from '../components/predictions/PredictionDashboard';
import AlertList from '../components/alerts/AlertList';
import { useAuth } from '../hooks/useAuth';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="dashboard">
      <h1>Holla! Welcome, {user.username}!</h1>
      <div className="dashboard-grid">
        <div className="dashboard-item">
          <h2>Recent Data</h2>
          <DataVisualization />
        </div>
        <div className="dashboard-item">
          <h2>Latest Predictions</h2>
          <PredictionDashboard />
        </div>
        <div className="dashboard-item">
          <h2>Active Alerts</h2>
          <AlertList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;