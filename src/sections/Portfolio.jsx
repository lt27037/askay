import React, { useState, useEffect} from 'react';

import getDate from '../getData';
import Button from '../components/Button';

import '../styles/PortfolioSection.scss';

const Portfolio = () => {
  const [content, setContent] = useState();

  useEffect(
    () => {
      getDate('realizations').then(data => setContent(data));
    },
    []
  );

  console.log(content)

  return(
  <section className="portfolio">
    <div className="portfolio__container">
      <h2 className="portfolio__title">
        Nasze
        <span> Realizacje</span>
      </h2>
      <p className="portfolio__discription">
        {content?.content || null}
      </p>
      <Button content="Zobacz więcej" />
    </div>
    <h2 className="portfolio__title mobile">Nasze Realizacje</h2>
    <div className="portfolio__wrapper">
      <div className="portfolio__item">
        <img
          src={content?.imgTop.url}
          alt="zdjęcie z portfolio"
          className="portfolio__item__img"
          loading="lazy"
        />
      </div>
      <div className="portfolio__item">
        <img
          src={content?.imgLeftTop.url}
          alt="zdjęcie z portfolio"
          className="portfolio__item__img"
          loading="lazy"
        />
      </div>
      <div className="portfolio__item">
        <img
          src={content?.imgLeftBottom.url}
          alt="zdjęcie z portfolio"
          className="portfolio__item__img"
          loading="lazy"
        />
      </div>
      <div className="portfolio__item">
        <img
          src={content?.imgRight.url}
          alt="zdjęcie z portfolio"
          className="portfolio__item__img"
          loading="lazy"
        />
      </div>
    </div>
    <Button content="Zobacz więcej" />
  </section>
);}

export default Portfolio;
