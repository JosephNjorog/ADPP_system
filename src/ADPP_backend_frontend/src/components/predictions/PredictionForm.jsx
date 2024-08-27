import React, { useState } from 'react';
import { generatePrediction } from '../../services/predictionService';

const PredictionForm = ({ onPredictionGenerated }) => {
  const [formData, setFormData] = useState({
    location: '',
    diseaseType: '',
    timeFrame: 30,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const prediction = await generatePrediction(formData);
      onPredictionGenerated(prediction);
    } catch (err) {
      setError('Failed to generate prediction. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="prediction-form card">
      <h3>Generate New Prediction</h3>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="form-group">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="diseaseType">Disease Type</label>
        <select
          id="diseaseType"
          name="diseaseType"
          value={formData.diseaseType}
          onChange={handleChange}
          required
        >
          <option value="">Select disease type</option>
          <option value="influenza">Influenza</option>
          <option value="covid19">COVID-19</option>
          <option value="malaria">Malaria</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="timeFrame">Time Frame (days)</label>
        <input
          type="number"
          id="timeFrame"
          name="timeFrame"
          value={formData.timeFrame}
          onChange={handleChange}
          min="1"
          max="365"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary" disabled={loading}>
        {loading ? 'Generating...' : 'Generate Prediction'}
      </button>
    </form>
  );
};

export default PredictionForm;