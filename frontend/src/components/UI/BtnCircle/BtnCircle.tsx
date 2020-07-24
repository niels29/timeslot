import React from 'react';
import { Button } from 'antd';

import styles from './BtnCircle.module.scss';

interface Props {
  children?: React.ReactNode;
}

const BtnCircle = (props: Props) => {
  let content = (
    <Button className={styles.btn} shape="circle">
      {props.children}
    </Button>
  );

  return content;
};

export default BtnCircle;
