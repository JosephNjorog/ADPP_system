import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const Sidebar = () => {
  const { user } = useAuth();

  return (
    <nav className="sidebar">
      <ul>
        <li>
          <NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/data" activeClassName="active">Data Management</NavLink>
        </li>
        <li>
          <NavLink to="/predictions" activeClassName="active">Predictions</NavLink>
        </li>
        <li>
          <NavLink to="/analytics" activeClassName="active">Analytics</NavLink>
        </li>
        <li>
          <NavLink to="/alerts" activeClassName="active">Alerts</NavLink>
        </li>
        <li>
          <NavLink to="/map" activeClassName="active">Outbreak Map</NavLink>
        </li>
        {user.role === 'admin' && (
          <li>
            <NavLink to="/admin" activeClassName="active">Admin Panel</NavLink>
          </li>
        )}
        <li>
          <NavLink to="/profile" activeClassName="active">User Profile</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;