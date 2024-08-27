import React, { useState, useEffect } from 'react';
import { getAlerts } from '../../services/alertService';
import AlertDetails from './AlertDetails';

const AlertList = () => {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchAlerts();
  }, []);

  const fetchAlerts = async () => {
    try {
      const data = await getAlerts();
      setAlerts(data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch alerts');
      setLoading(false);
    }
  };

  if (loading) return <div>Loading alerts...</div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="alert-list">
      <h2>Active Alerts</h2>
      {alerts.length === 0 ? (
        <p>No active alerts at the moment.</p>
      ) : (
        alerts.map(alert => <AlertDetails key={alert.id} alert={alert} />)
      )}
    </div>
  );
};

export default AlertList;