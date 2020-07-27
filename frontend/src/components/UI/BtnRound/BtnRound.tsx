import React from 'react';
import { Button } from 'antd';

import styles from './BtnRound.module.scss';

interface Props {
  onClickCallback: () => void;
  small?: boolean;
  children?: React.ReactNode;
}

const BtnRound = (props: Props) => {
  let content = (
    <Button
      className={styles.btn}
      shape="round"
      onClick={props.onClickCallback}>
      {props.children}
    </Button>
  );

  if (props.small) {
    content = (
      <Button
        className={`${styles.btn} ${styles.small}`}
        shape="round"
        onClick={props.onClickCallback}>
        {props.children}
      </Button>
    );
  }

  return content;
};

export default BtnRound;
