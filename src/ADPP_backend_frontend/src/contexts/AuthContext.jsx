import React, { createContext, useState, useEffect } from 'react';
import { login as loginService, register as registerService, logout as logoutService } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    const token = localStorage.getItem('token');
    if (token) {
      // Verify token and set user
      // This is a placeholder, implement actual token verification
      setUser({ username: 'User' });
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const data = await loginService(email, password);
    setUser(data.user);
    localStorage.setItem('token', data.token);
  };

  const register = async (username, email, password) => {
    const data = await registerService(username, email, password);
    setUser(data.user);
    localStorage.setItem('token', data.token);
  };

  const logout = () => {
    logoutService();
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};