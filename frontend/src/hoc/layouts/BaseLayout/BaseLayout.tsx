import React from 'react';
import { Layout, Row, Col } from 'antd';
import { ArrowLeftOutlined, MenuOutlined } from '@ant-design/icons';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import MobileNavigation from '../../../components/UI/TabBar/MobileNavigation/MobileNavigation';

import styles from './BaseLayout.module.scss';

const { Header, Content } = Layout;

interface Props extends RouteComponentProps<any> {
  hasHeaderBackIcon?: boolean;
  hasHeaderMenuIcon?: boolean;
  headerText?: string;
  children?: React.ReactNode;
}

const BaseLayout = (props: Props) => {
  let headerIcon = null;
  if (props.hasHeaderBackIcon)
    headerIcon = <ArrowLeftOutlined className={styles.header_icon} />;
  else if (props.hasHeaderMenuIcon)
    headerIcon = <MenuOutlined className={styles.header_icon} />;

  let content = (
    <>
      <Layout>
        <Header className={styles.header}>
          <Row>
            <Col span={2}>{headerIcon}</Col>
            <Col span={20}>
              <h1 className={styles.header_text}>{props.headerText}</h1>
            </Col>
          </Row>
        </Header>
        <div style={{ height: '56px' }}></div>
        <Content className={styles.content}>{props.children}</Content>
        <div
          style={{
            height: '56px',
          }}></div>
      </Layout>
      <div className={styles.mobile_navigation}>
        <MobileNavigation
          onHomeClick={() => props.history.push('/')}
          onNewClick={() => props.history.push('/')}
          onBookingsClick={() => props.history.push('/')}
        />
      </div>
    </>
  );

  return content;
};

export default withRouter(BaseLayout);
