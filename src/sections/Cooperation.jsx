import React, { useState, useEffect } from 'react';

import Button from '../components/Button';
import illustration from '../images/Illustracja_wspolpraca_desktop.png';
import getData from '../getData';

import '../styles/Cooperation.scss';
import Loader from '../components/Loader';
import { HashLink } from 'react-router-hash-link';

const Cooperation = () => {

  const [content, setContent] = useState();

  useEffect(
    () => {
      getData('colaboration').then(data => setContent(data))
    },
    []
  )

  return (
  <section className="cooperation">
    <h2 className="cooperation__title">
      <span>Zacznij </span>z nami Współparcę.
    </h2>
    <p className="cooperation__text">{content?.content || null}</p>
    <HashLink className='cooperation__link' to={'/#kontakt'} >
      <Button content="Napisz do nas" />
    </HashLink>
    <div className="cooperation__stepWrapper">
      {
        content
        ? (
          <>
            <p className="cooperation__step">{content?.stepOne || null}</p>
            <p className="cooperation__step">{content?.stepTwo|| null}</p>
            <p className="cooperation__step">{content?.stepThree || null}</p>
          </>
        )
        : <Loader />
      }
    </div>
    <img
      src={illustration}
      alt="ilustracja współpracy"
      className="cooperation__illustration"
    />
  </section>
);}

export default Cooperation;
