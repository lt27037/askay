import React, { useRef, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import napis from '../images/napis-askay.png';
import ilustracja from '../images/Illustracja-desktop.png';
import Button from '../components/Button';

import '../styles/Start.scss';

const Start = () => {
  const start = useRef(null);
  const location = useLocation();
  const history = useHistory();

  useEffect(
    () => {
      if (location.pathname === '/') start.current?.scrollIntoView();
    },
    [location],
  );

  return (
    <section className="start" ref={start}>
      <img src={napis} alt="napis ASKAY w tle" className="start__backgroundImage" />
      <div className="start__titleWrapper">
        <h1 className="start__title">
          Witamy na stronie
          <span> ASKAY</span>
        </h1>
        <h2 className="start__subtitle">
          Naszym celem jest twój
          <span> sukces!</span>
        </h2>
      </div>
      <img src={ilustracja} alt="ilustracja zespołu" className="start__ilustracja" />
      <div className="start__buttonWrapper">
        <Button content="Napisz do nas" click={() => history.push({ pathname: '/kontakt' })} />
        <Button content="Portfolio" click={() => history.push({ pathname: '/portfolio' })} />
      </div>
    </section>
  );
};

export default Start;
