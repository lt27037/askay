import React, { useState, useEffect } from 'react';

import { ReactComponent as Askay } from '../images/Askay-logo-final 1.svg';
import Contact from './Contact';
import getData from '../getData';

import facebook from '../images/icons/facebook-f-brands.svg';
import twitter from '../images/icons/twitter-brands.svg';
import instagram from '../images/icons/instagram-brands.svg';
import twitch from '../images/icons/twitch-brands.svg';
import behance from '../images/icons/behance-brands.svg';
import linkedin from '../images/icons/linkedin-in-brands.svg';

import '../styles/Footer.scss';

const icons = {
  'facebook': facebook,
  'instagram': instagram,
  'twitter': twitter,
  'twitch': twitch,
  'behance': behance,
  'linkedin': linkedin,
}

const Footer = () => {
  const [content, setContent] = useState();
  const [socials, setSocials] = useState();

  useEffect(
    () => {
      getData('footer-data').then(data => setContent(data));
      getData('social-medias').then(data => setSocials(data));
    },
    []
  )

  return(
  <>
    <section className="footer__wrapper" id={'kontakt'}>
      <Contact />
      <footer className="footer">
        <h2 className="footer__title">Skontaktuj się z nami.</h2>
        <h3 className="footer__subtitle">Askay Studio</h3>
        <section className="footer__department">
          <h3 className="footer__department__name">Dział Graficzny</h3>
          <span className="footer__department__text">{content?.personName1|| null}</span>
          <span className="footer__department__text">{content?.personEmail1 || null}</span>
          <span className="footer__department__text">{content?.personNumber1 || null}</span>
        </section>
        <section className="footer__department">
          <h3 className="footer__department__name">Dział Marketingu</h3>
          <span className="footer__department__text">{content?.personName2|| null}</span>
          <span className="footer__department__text">{content?.personEmail2 || null}</span>
          <span className="footer__department__text">{content?.personNumber2 || null}</span>
        </section>
        <h3 className="footer__subtitle">Social Media</h3>
        <section className="footer__social">
          {
            socials && (
              socials.map(item => (
                <span className="footer__social__item" key={item.id}>
                  <img
                    src={icons[item.icon]}
                    alt="Ikona media społecznościowe"
                    className="footer__social__icon"
                  />
                  {item.nickname}
                </span>
              ))
            )
          }
        </section>
      </footer>
    </section>
    <div className="footer__copyright">
      <Askay className="footer__copyright__logo" />
      <span className="footer__copyright__text">Wszelkie prawa zastrzeżone.</span>
    </div>
  </>
);}

export default Footer;
