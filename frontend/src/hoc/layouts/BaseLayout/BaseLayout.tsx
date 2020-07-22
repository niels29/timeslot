import React from 'react';
import MobileNavigation from '../../../components/UI/TabBar/MobileNavigation/MobileNavigation';

import styles from './BaseLayout.module.scss';

const BaseLayout = () => {
  let content = (
    <React.Fragment>
      <MobileNavigation styleName={styles.mobile_navigation} />
    </React.Fragment>
  );

  return content;
};

export default BaseLayout;
