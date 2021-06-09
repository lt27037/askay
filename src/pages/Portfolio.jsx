import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Masonry from 'react-masonry-css';
import getData from '../getData';

import PortfolioMenu from '../components/PortfolioMenu';

import '../styles/Portfolio.scss';

const Portfolio = () => {
  const [data, setData] = useState(null);
  const [photos, setPhotos] = useState(null);

  useEffect(
    () => {
      getData('portfolio-categories').then(data => setData(data));

    },
    []
  );

  useEffect(
    () => {
      if(data){
        const arr = data?.map(category => {
          const images = category.images?.map(image => (
            <img src={image?.formats?.small?.url || image.url} alt="element protfolio" key={image.url} className="portfolioPage__image" />
          ))
          return {
            name: category.name,
            images,
          }
        })
        setPhotos(arr);
      }
    },
    [data]
  )
  console.log(photos)

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
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {photos ? photos?.map(arr => arr.images) : null}
          </Masonry>
        </div>
      </header>
    </motion.div>
  );
};

export default Portfolio;
