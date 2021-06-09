import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/PortfolioMenu.scss';

const PortfolioMenu = ({data}) => {


  return(
  <nav className="portfolioMenu">
    <ul className="portfolioMenu__list">
      {
        data && (
          data?.map(category => (
            <li className="portfolioMenu__item">
              <NavLink to={`/portfolio/${category.name}`} exact>
                {category.name}
              </NavLink>
            </li>
          ))
        )
      }
    </ul>
  </nav>
);}

export default PortfolioMenu;
