import React, { useEffect, useState } from 'react';
import  {useLocation} from 'react-router-dom';
import { motion } from 'framer-motion';
import Masonry from 'react-masonry-css';
import getData from '../getData';
import Loader from '../components/Loader';
import {ReactComponent as TopArrow} from '../images/up-arrow.svg';

import PortfolioMenu from '../components/PortfolioMenu';

import '../styles/Portfolio.scss';

const Portfolio = () => {
  const [data, setData] = useState(null);
  const [photos, setPhotos] = useState(null);
  const location = useLocation();

  useEffect(
    () => {
      getData('portfolio-categories').then(data => setData(data));
      window.scrollTo(0, 0);
    },
    []
  );

  const handleSetPhotos = (data) => {
    if(data){
      const arr = data?.map(category => {
        const images = category.images?.map(image => (
          <img src={image?.formats?.small?.url || image.url} alt="element protfolio" key={image.url} loading="lazy" className="portfolioPage__image" />
        ))
        return {
          name: category.name,
          images,
        }
      })
      setPhotos(arr);
    }
  }

  useEffect(
    () => {
      handleSetPhotos(data);
    },
    [data]
  )

  useEffect(
    () => {
      const name = location.hash.substr(1);
      if(name === 'wszystkie'){
        handleSetPhotos(data);

      } else {
        if(name !== ''){
          const photos = data.filter(category => category.name === name);
          handleSetPhotos(photos);
        }
      }
    },
    [location.hash, data]
  )

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <motion.div
      className="portfolioPage"
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <header className="portfolioPage__header">
        <h1 className="portfolioPage__title">Realizacje</h1>
        <h3 className="portfolioPage__subtitle">Zobacz nasze portfolio i przekonaj się, że warto z nami współpracować! </h3>
        <PortfolioMenu data={data || null} />
        <div className="portfolioPage__container">
          { data
          ? (<Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {photos ? photos?.map(arr => arr.images) : null}
          </Masonry>)
          : <Loader />
          }
        </div>
      </header>
      <button className="portfolioPage__toTop" title={'Do góry'} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <TopArrow className={'portfolioPage__toTop__icon'}/>
      </button>
    </motion.div>
  );
};

export default Portfolio;
