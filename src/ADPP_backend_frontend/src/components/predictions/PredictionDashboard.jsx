import React, { useState, useEffect } from 'react';
import { getPredictions } from '../../services/predictionService';
import PredictionDetails from './PredictionDetails';

const PredictionDashboard = () => {
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchPredictions();
  }, []);

  const fetchPredictions = async () => {
    try {
      const data = await getPredictions();
      setPredictions(data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch predictions');
      setLoading(false);
    }
  };

  if (loading) return <div>Loading predictions...</div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="prediction-dashboard">
      <h2>Outbreak Predictions</h2>
      <div className="prediction-grid">
        {predictions.map(prediction => (
          <PredictionDetails key={prediction.id} prediction={prediction} />
        ))}
      </div>
    </div>
  );
};

export default PredictionDashboard;