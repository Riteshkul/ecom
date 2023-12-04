// src/actions/cartActions.js
import * as actionTypes from './actionTypes';

export const addToCart = item => ({
  type: actionTypes.ADD_TO_CART,
  item,
});

export const removeFromCart = itemId => ({
  type: actionTypes.REMOVE_FROM_CART,
  itemId,
});
