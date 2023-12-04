// src/actions/authActions.js
import * as actionTypes from './actionTypes';

export const loginSuccess = user => ({
  type: actionTypes.LOGIN_SUCCESS,
  user,
});

export const logoutSuccess = () => ({
  type: actionTypes.LOGOUT_SUCCESS,
});
