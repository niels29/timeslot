import React from 'react';
import { Button } from 'antd';
import { PushpinOutlined } from '@ant-design/icons';
import BtnCircle from '../UI/BtnCircle/BtnCircle';
import BtnRound from '../UI/BtnRound/BtnRound';

import styles from './CarouselCard.module.scss';

const CarouselCard = (props: any) => {
  let content = (
    <div className={`${styles.card}`}>
      <span className={styles.label}>STORE</span>
      <div className={styles.img_container}></div>
      <h1 className={styles.main_heading}>Long Beach </h1>
      <h2 className={styles.sub_heading}>Beach clothing store</h2>
      <BtnRound>View</BtnRound>
      <BtnCircle>
        <PushpinOutlined />
      </BtnCircle>
    </div>
  );

  return content;
};

export default CarouselCard;
