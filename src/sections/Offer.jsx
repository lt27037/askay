import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import getData from '../getData';

import SingleOffer from '../components/SingleOffer';

import '../styles/Offer.scss';
import Loader from '../components/Loader';

const Offer = () => {
  const offer = useRef(null);
  const location = useLocation();
  const [industries, setIndustries] = useState(null);

  useEffect(
    () => {
      if (location.pathname === '/oferta') offer.current?.scrollIntoView();
    },
    [location],
  );

  useEffect(
    () => {
      getData('industries').then(data => setIndustries(data));
    },
    []
  );

  return (
    <section className="offer" ref={offer} id={'oferta'}>
      <h2 className="offer__title">
        Czym się
        <span> zajmujemy?</span>
      </h2>
      <div className="offer__wrapper">
        {
          industries 
          ? (
            industries?.map(item => <SingleOffer key={item._id} offer={item} />)
          )
          : <Loader />
        }
      </div>
    </section>
  );
};

export default Offer;
