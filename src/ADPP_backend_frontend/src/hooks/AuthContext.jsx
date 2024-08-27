import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the AuthContext
export const AuthContext = createContext();

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const login = (email, password) => {
    const user = { email };
    localStorage.setItem('user', JSON.stringify(user));
    setCurrentUser(user);
  };

  const signup = (email, password) => {
    const user = { email };
    localStorage.setItem('user', JSON.stringify(user));
    setCurrentUser(user);
  };

  const logout = () => {
    localStorage.removeItem('user');
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
