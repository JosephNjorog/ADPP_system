import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PrivateRoute from './components/common/PrivateRoute';
import { ADPP_backend_backend } from 'declarations/ADPP_backend_backend';

const App = () => {
  const [greeting, setGreeting] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    ADPP_backend_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Header />
          <main className="container">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <img src="/logo2.svg" alt="DFINITY logo" />
                    <br />
                    <br />
                    <form action="#" onSubmit={handleSubmit}>
                      <label htmlFor="name">Enter your name: &nbsp;</label>
                      <input id="name" alt="Name" type="text" />
                      <button type="submit">Click Me!</button>
                    </form>
                    <section id="greeting">{greeting}</section>
                  </>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/dashboard"
                element={(
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                )}
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
