// src/components/Auth/Logout.js
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logoutSuccess } from '../../actions/authActions';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Immediately dispatch logout and redirect to login on component mount
    dispatch(logoutSuccess());
    navigate('/login');
  }, [dispatch, navigate]);

  // No content returned from the render function
  return null;
};

export default Logout;
