import React from 'react';
import { TabBar } from 'antd-mobile';
import {
  HomeOutlined,
  HomeFilled,
  FireOutlined,
  FireFilled,
  CalendarOutlined,
  CalendarFilled,
} from '@ant-design/icons';

import './MobileNavigation.scss';

const MobileNavigation = (props: any) => {
  const content = (
    <TabBar
      className={props.styleName}
      unselectedTintColor="#000"
      tintColor="#000"
      barTintColor="white">
      <TabBar.Item
        title="Home"
        key="Home"
        icon={<HomeOutlined style={{ fontSize: '24px', color: '#000' }} />}
        selectedIcon={
          <HomeFilled style={{ fontSize: '24px', color: '#69D2B3' }} />
        }></TabBar.Item>
      <TabBar.Item
        title="New/Special"
        key="New/Special"
        icon={<FireOutlined style={{ fontSize: '24px', color: '#000' }} />}
        selectedIcon={
          <FireFilled style={{ fontSize: '24px', color: '#69D2B3' }} />
        }></TabBar.Item>
      <TabBar.Item
        title="Bookings"
        key="Bookings"
        icon={<CalendarOutlined style={{ fontSize: '24px', color: '#000' }} />}
        selectedIcon={
          <CalendarFilled style={{ fontSize: '24px', color: '#69D2B3' }} />
        }></TabBar.Item>
    </TabBar>
  );

  return content;
};

export default MobileNavigation;
