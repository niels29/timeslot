import React from 'react';
import { Row, Col } from 'antd';
import BaseLayout from '../../hoc/layouts/BaseLayout/BaseLayout';
import Search from '../../components/UI/Search/Search';

import styles from './OverviewPage.module.scss';

const OverviewPage: React.FC = () => {
  let content = (
    <BaseLayout hasHeaderMenuIcon={true} headerText={'timeslot'}>
      <div className={styles.search}>
        <Search />
      </div>
      <Row gutter={[16, 16]} className={styles.card_grid}>
        <Col span={24}>
          <div className={`${styles.card} ${styles.card_one}`}></div>
        </Col>
        <Col span={24}>
          <div className={`${styles.card} ${styles.card_two}`}></div>
        </Col>
        <Col span={12}>
          <div className={`${styles.card} ${styles.card_three}`}></div>
        </Col>
        <Col span={12}>
          <div className={`${styles.card} ${styles.card_one}`}></div>
        </Col>
      </Row>
    </BaseLayout>
  );

  return content;
};

export default OverviewPage;
