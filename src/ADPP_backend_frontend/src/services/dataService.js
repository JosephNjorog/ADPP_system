import api from '../utils/api';

// Function to upload data
export const uploadData = async (data) => {
  try {
    const response = await api.post('/data', data);
    return response.data;
  } catch (error) {
    // Handle errors appropriately
    console.error('Error uploading data:', error);
    throw error; // Re-throw the error if needed
  }
};

// Function to get data with parameters
export const getData = async (params) => {
  try {
    const response = await api.get('/data', { params });
    return response.data;
  } catch (error) {
    // Handle errors appropriately
    console.error('Error fetching data:', error);
    throw error; // Re-throw the error if needed
  }
};

// Function to get data by location
export const getDataByLocation = async (location) => {
  try {
    const response = await api.get(`/data/${location}`);
    return response.data;
  } catch (error) {
    // Handle errors appropriately
    console.error('Error fetching data by location:', error);
    throw error; // Re-throw the error if needed
  }
};
