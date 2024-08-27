import { useState, useEffect } from 'react';
import api from '../utils/api';

const useFetchData = (url, initialData = null) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(url);
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError('An error occurred while fetching data');
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchData;