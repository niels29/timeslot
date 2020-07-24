import React from 'react';
import { Button } from 'antd';

import styles from './BtnCircle.module.scss';

interface Props {
  children?: React.ReactNode;
}

const BtnCircle = (props: Props) => {
  let content = (
    <Button shape="round" size={'large'}>
      {props.children}
    </Button>
  );

  return content;
};

export default BtnCircle;
