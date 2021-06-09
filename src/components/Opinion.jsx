import React from 'react';

import avatar from '../images/opinion-avatar.png';

import '../styles/OpinionComponent.scss';

const Opinion = ({opinion}) => (
  <div className="opinion">
    <img src={opinion.avatar.formats.thumbnail.url || avatar} alt="Zdjęcie klienta" className="opinion__avatar" />
    <span className="opinion__name">{opinion.name}</span>
    <span className="opinion__info">{opinion.from}</span>
    <p className="opinion__text">{opinion.content}</p>
  </div>
);

export default Opinion;
