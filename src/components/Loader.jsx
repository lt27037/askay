import React from 'react';

import {ReactComponent as Image} from '../images/reload.svg';

import '../styles/Loader.scss';

const Loader = () => {
  return (
    <div className='loader'>
      <Image className="loader__img" />
    </div>
  )
}

export default Loader;
