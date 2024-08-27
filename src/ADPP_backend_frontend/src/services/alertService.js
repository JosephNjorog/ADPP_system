import axios from 'axios';

const getAlerts = async () => {
  const response = await axios.get('/api/alerts');
  return response.data;
};

const createAlert = async (alertData) => {
  const response = await axios.post('/api/alerts', alertData);
  return response.data;
};

const deleteAlert = async (alertId) => {
  const response = await axios.delete(`/api/alerts/${alertId}`);
  return response.data;
};

// Assign object to a variable
const alertService = {
  getAlerts,
  createAlert,
  deleteAlert
};

// Export the object and individual functions
export { getAlerts, createAlert, deleteAlert };
export default alertService;
