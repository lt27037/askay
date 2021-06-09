import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import getData from '../getData';

import askayNapis from '../images/napis-askay.png';
import illustration from '../images/Illustracja_about_desktop.png';

import '../styles/About.scss';

const About = () => {
  const about = useRef(null);
  const location = useLocation();
  const [content, setContent] = useState();

  useEffect(
    () => {
      if (location.pathname === '/o-nas') about.current?.scrollIntoView();
    },
    [location],
  );

  useEffect(
    () => {
      getData('about').then(data => setContent(data));
    },
    []
  )

  return (
    <div className="about" ref={about} id={'o-nas'}>
      <img src={askayNapis} alt="" className="about__backgroundImg" />
      <div className="about__textWrapper">
        <h2 className="about__title">
          <span>Kim </span>
          jesteśmy?
        </h2>
        <p className="about__text">{content?.content}</p>
      </div>
      <img src={illustration} alt="illustracja zespołu" className="about__img" />
      <div className="about__wrapper">
        <span className="about__data">
          <h3 className="about__data__title">projektów</h3>
          <span className="about__data__value">+{content?.projectsQty || 103}</span>
        </span>
        <span className="about__data">
          <h3 className="about__data__title">Współprac</h3>
          <span className="about__data__value">+{content?.cooperationsQty || 34}</span>
        </span>
        <span className="about__data">
          <h3 className="about__data__title">Zadowolonych klientów</h3>
          <span className="about__data__value">+{content?.clientsQty || 67}</span>
        </span>
      </div>
    </div>
  );
};

export default About;
