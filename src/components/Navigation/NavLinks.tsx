import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/auth-context';
import './NavLinks.css';

const NavLinks = () => {
  const auth = useContext(AuthContext);

  return (
    <ul className='nav-links'>
      <li>
        <NavLink to='/' exact>
          SHOP NOW
        </NavLink>
      </li>
      {auth.isLoggedIn && auth.role === 'admin' && (
        <li>
          <NavLink to='/users' exact>
            ALL USERS
          </NavLink>
        </li>
      )}
      {auth.isLoggedIn && auth.role === 'user' && (
        <li>
          <NavLink to='/u1/favourites'>MY FAVOURITES</NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to='/auth'>AUTHENTICATE</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout}>LOGOUT</button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
