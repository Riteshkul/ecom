// src/reducers/cartReducer.js
import * as actionTypes from '../actions/actionTypes';

const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.item],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.itemId),
      };
    default:
      return state;
  }
};

export default cartReducer;
