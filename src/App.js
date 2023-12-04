// src/App.js
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Routes from './Routes';
import Navbar from './components/Navbar';
import './App.css'
const App = () => {
  const isAuthenticated = useSelector((state) => !!state.auth.user);
  const username = useSelector((state) => state.auth.user?.username);
  const history = useNavigate();

  // Redirect to the login page if not authenticated
  React.useEffect(() => {
    if (!isAuthenticated) {
      history('/login');
    }
  }, [isAuthenticated, history]);

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} username={username} />
      <div className="container">
        <Routes />
      </div>
    </>
  );
};

export default App;
