import React from 'react';
import CarouselCard from '../CarouselCard/CarouselCard';
// import styles from './CardsCarousel.module.scss';

interface Props {
  data: ICardData;
}

export interface ICardData {
  mainBtnLink: string;
  mainBtnText: string;
  headline: string;
  subheadline: string;
  label: string;
  imgUrl: string;
}

const CardsCarousel = (props: Props) => {
  let content = (
    <div>
      <CarouselCard cardData={props.data}></CarouselCard>
    </div>
  );

  return content;
};

export default CardsCarousel;
