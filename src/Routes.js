// src/Routes.js
import React from 'react';
import {Route, Routes as Switch } from 'react-router-dom';
import Login from './components/Auth/Login';
import Logout from './components/Auth/Logout';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart';

const Routes = () => {

  return (
   
      <Switch>
        <Route path="/login" element={<Login/>} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="/products" element={<ProductList/>} />
        <Route path="/cart" element={<Cart/>} />
        {/* Add a default route for the home page */}
        <Route exact path="/" element={<ProductList/>} />
      </Switch>
   
  );
};

export default Routes;
