import React, { useEffect, useState } from 'react';

import Opinion from '../components/Opinion';
import AliceCarousel from 'react-alice-carousel';
import getData from '../getData';

import '../styles/Opinions.scss';
import 'react-alice-carousel/lib/scss/alice-carousel.scss';
import Loader from '../components/Loader';

const responsivePartners = {
  0: {
    items: 1
  },
  768: {
    items: 2
  },
  1024:{
    items: 4
  },
  1240: {
    items: 5
  }
}

const responsiveOpinions = {
  0: {
    items: 1
  },
  1024:{
    items: 2
  },
  1240: {
    items: 3
  },
  1500: {
    items: 3
  }
}

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
    <div className={'partners__box'}>
      <img src={partner.logo.url} key={partner.id} alt="Logo partnera" className={'partners__image'}/>
    </div>
  ))

  const itemsOpinions = opinions?.map(opinion => (
    <Opinion key={opinion.id} opinion={opinion} />
  ))

  return(
  <section className="opinions">
    <section className="partners">
      <h3 className="partners__title">Partnerzy</h3>
      <div className="partners__sliderBox">
        <AliceCarousel 
          items={itemsPartners} 
          responsive={responsivePartners}
          mouseTracking
          infinite
          disableButtonsControls
          disableDotsControls
          disableSlideInfo
          autoPlay
          autoPlayInterval={1500}
        /> 
      </div>
    </section>
    <h2 className="opinions__title">
      Opinie<span> Klientów</span>
    </h2>
    <h3 className="opinions__subtitle">Dowiedz się, co sądza o nas Klienci.</h3>
    <div className="opinions__wrapper">
      {
        opinions
        ? (
          <AliceCarousel
            items={itemsOpinions}
            responsive={responsiveOpinions}
            mouseTracking
            infinite
          />
        )
        : <Loader />
      }
    </div>
  </section>
);}

export default Opinions;
