import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const Header = () => {
  const { currentUser, logout, loading, error } = useAuth();

  // Display loading or error messages if needed
  if (loading) {
    return <header className="header"><div className="container">Loading...</div></header>;
  }

  if (error) {
    return <header className="header"><div className="container">Error: {error}</div></header>;
  }

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <img src="/assets/images/logo.png" alt="Logo" />
          <span>Disease Outbreak Predictor</span>
        </Link>
        <nav>
          {currentUser ? (
            <>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/data">Data</Link>
              <Link to="/predictions">Predictions</Link>
              <Link to="/alerts">Alerts</Link>
              <button onClick={logout} className="btn btn-primary">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
