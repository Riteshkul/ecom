// src/components/Auth/Login.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../actions/authActions';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const handleLogin = () => {
    const hardcodedUser = { id: 1, username: 'abc@gmail.com', password: 'abc123' };

    if (username === hardcodedUser.username && password === hardcodedUser.password) {
      dispatch(loginSuccess(hardcodedUser));
      setLoginMessage('Login successful! Redirecting to the product page...');
      setTimeout(() => {
        history('/products');
      }, 2000); // Redirect after 2 seconds
    } else {
      setLoginMessage('Incorrect username or password. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="auth-button" type="button" onClick={handleLogin}>
          Login
        </button>

        {loginMessage && <p>{loginMessage}</p>}
      </form>
    </div>
  );
};

export default Login;
