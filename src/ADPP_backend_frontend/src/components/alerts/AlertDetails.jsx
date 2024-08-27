import React from 'react';

const AlertDetails = ({ alert }) => {
  const getSeverityClass = (severity) => {
    switch(severity) {
      case 1: return 'low';
      case 2: return 'medium';
      case 3: return 'high';
      default: return '';
    }
  };

  return (
    <div className={`alert-details card ${getSeverityClass(alert.severity)}`}>
      <h3>{alert.location}</h3>
      <p>{alert.message}</p>
      <p>Severity: {alert.severity}</p>
      <p>Date: {new Date(alert.timestamp).toLocaleString()}</p>
    </div>
  );
};

export default AlertDetails;