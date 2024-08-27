import React from 'react';
import { Link } from 'react-router-dom';
import OutbreakMap from '../components/map/OutbreakMap';

const Home = () => {
  return (
    <div className="home">
      <header className="hero">
        <h1>AI-Powered Disease Outbreak Prediction System</h1>
        <p>Empowering health professionals with advanced predictive analytics</p>
        <Link to="/signup" className="btn btn-primary">Get Started</Link>
      </header>
      <section className="features">
        <div className="feature">
          <h2>Real-time Predictions</h2>
          <p>Utilize cutting-edge AI models to forecast disease outbreaks</p>
        </div>
        <div className="feature">
          <h2>Data Visualization</h2>
          <p>Visualize complex epidemiological data with interactive charts</p>
        </div>
        <div className="feature">
          <h2>Early Warning Alerts</h2>
          <p>Receive timely notifications about potential outbreaks</p>
        </div>
      </section>
      <section className="map-preview">
        <h2>Global Outbreak Map</h2>
        <OutbreakMap />
      </section>
    </div>
  );
};

export default Home;