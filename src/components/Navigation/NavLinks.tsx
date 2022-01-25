import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/auth-context';
import { LanguageContext } from '../../context/language-context';
import Button from '../../shared/components/FormElements/Button';

import { NAVBAR } from '../../shared/util/copy';

import './NavLinks.css';

const NavLinks = () => {
  const auth = useContext(AuthContext);
  const { language, changeLanguage } = useContext(LanguageContext);

  return (
    <ul className='nav-links'>
      <li>
        <Button
          onClick={() => {
            language === 'EN' ? changeLanguage('RO') : changeLanguage('EN');
          }}
        >
          {language}
        </Button>
      </li>
      <li>
        <NavLink to='/' exact>
          {NAVBAR.SHOP_NOW[language]}
        </NavLink>
      </li>
      <li>
        <NavLink to='/basket' exact>
          {NAVBAR.BASKET[language]}
        </NavLink>
      </li>
      {auth.isLoggedIn && auth.role === 'admin' && (
        <li>
          <NavLink to='/users' exact>
            {NAVBAR.ALL_USERS[language]}
          </NavLink>
        </li>
      )}
      {auth.isLoggedIn && auth.role === 'user' && (
        <li>
          <NavLink to='/u1/profile'>{NAVBAR.MY_PROFILE[language]}</NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to='/auth'>{NAVBAR.AUTHENTICATE[language]}</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout}>{NAVBAR.LOGOUT[language]}</button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
