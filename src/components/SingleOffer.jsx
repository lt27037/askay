import React from 'react';

import img from '../images/ikona.png';

import '../styles/SingleOffer.scss';

// eslint-disable-next-line react/prop-types
const SingleOffer = ({offer}) => (
  <div className="singleOffer">
    <img src={offer.obrazek.url} alt="ikona oferty" className="singleOffer__img" />
    <div className="singleOffer__wrapper">
      <h3 className="singleOffer__title">{offer.tytul}</h3>
      <p className="singleOffer__text">{offer.opis}</p>
    </div>
  </div>
);

export default SingleOffer;
