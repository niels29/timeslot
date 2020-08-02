import React, { useState, useEffect } from 'react';
import BaseLayout from '../../hoc/layouts/BaseLayout/BaseLayout';
import DetailCard from '../../components/DetailCard/DetailCard';
import { Spin } from 'antd';
import { Row, Col } from 'antd';

import styles from './DetailPage.module.scss';

const DetailPage: React.FC = () => {
  const detailPageStartData = {
    name: '',
    mainBtnLink: '',
    mainBtnText: '',
    headline: '',
    subheadline: '',
    label: '',
    imgUrl: '',
    textHeadline: '',
    openingHours: '',
    text: '',
  };
  const [detailPageData, setDetailPageData] = useState(detailPageStartData);

  useEffect(() => {
    fetch('http://localhost:3100/business/detail/abc123')
      .then((response) => response.json())
      .then((data) => setDetailPageData(data[0]));
  }, []);

  let content = (
    <BaseLayout
      hasHeaderBackIcon={true}
      headerText={detailPageData.name}
      withoutNavigation={true}>
      <DetailCard cardData={detailPageData} />
    </BaseLayout>
  );

  if (!detailPageData.name) {
    content = (
      <Row justify="center" align="middle" className={styles.spinner_row}>
        <Col>
          <Spin size="large" />
        </Col>
      </Row>
    );
  }

  return content;
};

export default DetailPage;
