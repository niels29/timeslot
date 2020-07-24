import React from 'react';
import { Button } from 'antd';

import styles from './BtnRound.module.scss';

interface Props {
  children?: React.ReactNode;
}

const BtnRound = (props: Props) => {
  let content = (
    <Button className={styles.btn} shape="round">
      {props.children}
    </Button>
  );

  return content;
};

export default BtnRound;
