import React, { useState } from 'react';
import { uploadData } from '../../services/dataService';

const DataUpload = () => {
  const [formData, setFormData] = useState({
    location: '',
    date: '',
    cases: '',
    deaths: '',
    recoveries: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await uploadData(formData);
      setMessage('Data uploaded successfully');
      setFormData({ location: '', date: '', cases: '', deaths: '', recoveries: '' });
    } catch (error) {
      setMessage('Error uploading data. Please try again.');
    }
  };

  return (
    <div className="data-upload card">
      <h2>Upload New Data</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
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
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cases">Cases</label>
          <input
            type="number"
            id="cases"
            name="cases"
            value={formData.cases}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="deaths">Deaths</label>
          <input
            type="number"
            id="deaths"
            name="deaths"
            value={formData.deaths}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="recoveries">Recoveries</label>
          <input
            type="number"
            id="recoveries"
            name="recoveries"
            value={formData.recoveries}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Upload Data</button>
      </form>
    </div>
  );
};

export default DataUpload;