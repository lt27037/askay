import React, { useEffect, useState } from 'react';

import Opinion from '../components/Opinion';
import AliceCarousel from 'react-alice-carousel';
import getData from '../getData';

import '../styles/Opinions.scss';
import 'react-alice-carousel/lib/scss/alice-carousel.scss';

const Opinions = () => {
  const [opinions, setOpinions] = useState();
  const [partners, setPartners] = useState();

  useEffect(
    () => {
      getData('opinions').then(data => setOpinions(data));
      getData('partners').then(data => setPartners(data));
    },
    []
  )

  const itemsPartners = partners?.map(partner => (
    <img src={partner.logo.url} key={partner.id} alt="Logo partnera" />
  ))

  const itemsOpinions = opinions?.map(opinion => (
    <Opinion key={opinion.id} opinion={opinion} />
  ))


  return(
  <section className="opinions">
    <section className="partners">
      <h3 className="partners__title">Partnerzy</h3>
      <div className="partners__sliderBox">
        <AliceCarousel mouseTracking items={itemsPartners} />
      </div>
    </section>
    <h2 className="opinions__title">
      Opinie<span> Klientów</span>
    </h2>
    <h3 className="opinions__subtitle">Dowiedz się, co sądza o nas Klienci.</h3>
    <div className="opinions__wrapper">
      <AliceCarousel mouseTracking items={itemsOpinions} />
    </div>
  </section>
);}

export default Opinions;
