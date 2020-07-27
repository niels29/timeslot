import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import BtnRound from '../UI/BtnRound/BtnRound';
import { ICardData } from '../CardsCarousel/CardsCarousel';

import styles from './CarouselCard.module.scss';

interface Props extends RouteComponentProps<any> {
  cardData: ICardData;
}

const CarouselCard = (props: Props) => {
  let content = (
    <div className={`${styles.card}`}>
      <span className={styles.label}>{props.cardData.label}</span>
      <div className={styles.img_container}></div>
      <h1 className={styles.main_heading}>{props.cardData.headline}</h1>
      <h2 className={styles.sub_heading}>{props.cardData.subheadline}</h2>
      <BtnRound
        onClickCallback={() => props.history.push(props.cardData.mainBtnLink)}>
        {props.cardData.mainBtnText}
      </BtnRound>
    </div>
  );

  return content;
};

export default withRouter(CarouselCard);
