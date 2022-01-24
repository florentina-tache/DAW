import React, { useState, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import MainNavigation from './components/Navigation/MainNavigation';
import Auth from './components/Users/Auth';
import Users from './components/Users/Users';
import Products from './components/Products/Products';

import { AuthContext } from './context/auth-context';
import { ProductsContext } from './context/products-context';
import Basket from './components/Basket/Basket';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [products, setProducts] = useState([]);

  const role = 'admin';

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  const productsAdded = useCallback((products) => {
    setProducts(products);
  }, []);

  let routes;

  if (isLoggedIn) {
    if (role === 'admin') {
      routes = (
        <Switch>
          <Route path='/' exact>
            <Products />
          </Route>
          <Route path='/users' exact>
            <Users />
          </Route>
          <Redirect to='/' />
        </Switch>
      );
    } else {
      routes = (
        <Switch>
          <Route path='/' exact></Route>
          <Route path='/:userId/favourites' exact></Route>
          <Redirect to='/' />
        </Switch>
      );
    }
  } else {
    routes = (
      <Switch>
        <Route path='/' exact>
          <Products />
        </Route>
        <Route path='/basket' exact>
          <Basket />
        </Route>
        <Route path='/auth'>
          <Auth />
        </Route>
        <Redirect to='/' />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, role }}>
      <ProductsContext.Provider value={{ products, productsAdded }}>
        <Router>
          <MainNavigation />
          <main>{routes}</main>
        </Router>
      </ProductsContext.Provider>
    </AuthContext.Provider>
  );
};

export default App;
