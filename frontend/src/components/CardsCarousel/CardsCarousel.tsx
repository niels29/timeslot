import React from 'react';
import CarouselCard from '../CarouselCard/CarouselCard';
import styles from './CardsCarousel.module.scss';

const CardsCarousel = (props: any) => {
  let content = (
    <div>
      <CarouselCard></CarouselCard>
    </div>
  );

  return content;
};

export default CardsCarousel;
