import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import BtnRound from '../UI/BtnRound/BtnRound';

import styles from './DetailCard.module.scss';

interface Props extends RouteComponentProps<any> {
  cardData: IDetailCardData;
}

export interface IDetailCardData {
  name: string;
  mainBtnLink: string;
  mainBtnText: string;
  headline: string;
  subheadline: string;
  label: string;
  imgUrl: string;
  text: string;
  textHeadline: string;
}

const DetailCard = (props: Props) => {
  let content = (
    <div className={styles.outer}>
      <div className={`${styles.detail_summary}`}>
        <span className={styles.label}>{props.cardData.label}</span>
        <h1 className={styles.main_heading}>{props.cardData.headline}</h1>
        <h2 className={styles.sub_heading}>{props.cardData.subheadline}</h2>
        <div className={styles.img_container}></div>
      </div>
      <div className={styles.detail_info}>
        <p className={styles.text_headline}>{props.cardData.textHeadline}</p>
        <p className={styles.text}>{props.cardData.text}</p>
        <BtnRound
          onClickCallback={() =>
            props.history.push(props.cardData.mainBtnLink)
          }>
          {props.cardData.mainBtnText}
        </BtnRound>
      </div>
    </div>
  );

  return content;
};

export default withRouter(DetailCard);
