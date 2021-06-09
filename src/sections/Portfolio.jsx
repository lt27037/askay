import React, { useState, useEffect} from 'react';

import getDate from '../getData';
import Button from '../components/Button';

import '../styles/PortfolioSection.scss';
import Loader from '../components/Loader';

const Portfolio = () => {
  const [content, setContent] = useState();

  useEffect(
    () => {
      getDate('realizations').then(data => setContent(data));
    },
    []
  );

  return(
  <section className="portfolio">
    <div className="portfolio__container">
      <h2 className="portfolio__title">
        Nasze
        <span> Realizacje</span>
      </h2>
      <p className="portfolio__discription">
        {content?.content || <Loader />}
      </p>
      <Button content="Zobacz więcej" />
    </div>
    <h2 className="portfolio__title mobile">Nasze Realizacje</h2>
    {
      content
      ? (
        <div className="portfolio__wrapper">
          <div className="portfolio__item">
            <img
              src={content?.topImg.url}
              alt="zdjęcie z portfolio"
              className="portfolio__item__img"
              loading="lazy"
            />
          </div>
          <div className="portfolio__item">
            <img
              src={content?.leftTopImg.url}
              alt="zdjęcie z portfolio"
              className="portfolio__item__img"
              loading="lazy"
            />
          </div>
          <div className="portfolio__item">
            <img
              src={content?.leftBottomImg.url}
              alt="zdjęcie z portfolio"
              className="portfolio__item__img"
              loading="lazy"
            />
          </div>
          <div className="portfolio__item">
            <img
              src={content?.rightImg.url}
              alt="zdjęcie z portfolio"
              className="portfolio__item__img"
              loading="lazy"
            />
          </div>
        </div>
      )
      : <Loader />
    }
    
    <Button content="Zobacz więcej" />
  </section>
);}

export default Portfolio;
