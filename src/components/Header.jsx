import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';


import { ReactComponent as Logo } from '../images/Askay-logo-final 1.svg';

import '../styles/Header.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  useEffect(
    () => {
      setIsOpen(false);
    },
    [history.location.pathname],
  );

  return (
    <header className="mainHeader">
      <Logo className="mainHeader__logo" onClick={() => history.push({ pathname: '/' })} />
      <button className="mainHeader__menuButton" type="button" onClick={() => setIsOpen(!isOpen)}>
        <span className="mainHeader__menuButton__span" />
      </button>
      <nav className="mainHeader__menu">
        <ul className="mainHeader__menu__list" style={isOpen ? { transform: 'translateX(-100%)' } : { transform: 'translateX(0)' }}>
          <li className="mainHeader__menu__item" onClick={() => setIsOpen(false)}>
            <NavHashLink to="/" exact activeClassName='active'>Strona Główna</NavHashLink>
          </li>
          <li className="mainHeader__menu__item" onClick={() => setIsOpen(false)}>
            <NavLink to="/portfolio/#wszystkie">Portfolio</NavLink>
          </li>
          <li className="mainHeader__menu__item" onClick={() => setIsOpen(false)}>
            <NavHashLink to="/#oferta" activeClassName='active'>Oferta</NavHashLink>
          </li>
          <li className="mainHeader__menu__item" onClick={() => setIsOpen(false)}>
            <NavHashLink to="/#o-nas" activeClassName='active'>O nas</NavHashLink>
          </li>
          <li className="mainHeader__menu__item" onClick={() => setIsOpen(false)}>
            <NavHashLink to="/#kontakt" activeClassName='active'>Kontakt</NavHashLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
