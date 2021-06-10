import React from 'react';
import {NavHashLink} from 'react-router-hash-link';

import '../styles/PortfolioMenu.scss';

const PortfolioMenu = ({data}) => {


  return(
  <nav className="portfolioMenu">
    <ul className="portfolioMenu__list">
      <li className="portfolioMenu__item">
        <NavHashLink to={'/portfolio/#wszystkie'} exact>
          Wszystkie
        </NavHashLink>
      </li>
      {
        data && (
          data?.map(category => (
            <li className="portfolioMenu__item" key={category.name}>
              <NavHashLink to={`/portfolio/#${category.name}`} exact activeClassName='active' >
                {category.name}
              </NavHashLink>
            </li>
          ))
        )
      }
    </ul>
  </nav>
);}

export default PortfolioMenu;
