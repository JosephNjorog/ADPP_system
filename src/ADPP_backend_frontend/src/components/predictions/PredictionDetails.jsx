import React from 'react';

const PredictionDetails = ({ prediction }) => {
  return (
    <div className="prediction-details card">
      <h3>{prediction.location}</h3>
      <p>Prediction Date: {new Date(prediction.predictionDate).toLocaleDateString()}</p>
      <p>Predicted Cases: {prediction.predictedCases}</p>
      <p>Predicted Deaths: {prediction.predictedDeaths}</p>
      <p>Confidence: {(prediction.confidence * 100).toFixed(2)}%</p>
      <div className="prediction-chart">
        {/* Add a mini chart here to visualize the prediction */}
      </div>
    </div>
  );
};

export default PredictionDetails;