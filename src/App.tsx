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
import { LanguageContext } from './context/language-context';
import Basket from './components/Basket/Basket';
import ProfileUser from './components/Profile/ProfileUser';
import PasswordReset from './components/PasswordReset/PasswordReset';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [products, setProducts] = useState([]);
  const [language, setLanguage] = useState('EN');

  let role = 'admin';
  role = 'user';

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  const productsAdded = useCallback((products) => {
    setProducts(products);
  }, []);

  const changeLanguage = useCallback((products) => {
    setLanguage(products);
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
          <Route path='/' exact>
            <Products />
          </Route>
          <Route path='/basket' exact>
            <Basket />
          </Route>
          <Route path='/:userId/profile' exact>
            <ProfileUser />
          </Route>
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
        <Route path='/reset-password'>
          <PasswordReset />
        </Route>
        <Redirect to='/' />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, role }}>
      <ProductsContext.Provider value={{ products, productsAdded }}>
        <LanguageContext.Provider value={{ language, changeLanguage }}>
          <Router>
            <MainNavigation />
            <main>{routes}</main>
          </Router>
        </LanguageContext.Provider>
      </ProductsContext.Provider>
    </AuthContext.Provider>
  );
};

export default App;
