import axios from 'axios';

const getPredictions = async () => {
  const response = await axios.get('/api/predictions');
  return response.data;
};

const createPrediction = async (predictionData) => {
  const response = await axios.post('/api/predictions', predictionData);
  return response.data;
};

// Assign object to a variable
const predictionService = {
  getPredictions,
  createPrediction
};

// Export the object and individual functions
export { getPredictions, createPrediction };
export default predictionService;
