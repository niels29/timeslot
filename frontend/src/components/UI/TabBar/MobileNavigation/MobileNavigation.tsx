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

interface Props {
  isHomeSelected?: boolean;
  isNewSelected?: boolean;
  isBookingsSelected?: boolean;
  children?: React.ReactNode;
}

const MobileNavigation = (props: Props) => {
  const content = (
    <TabBar unselectedTintColor="#000" tintColor="#000" barTintColor="white">
      <TabBar.Item
        selected={props.isHomeSelected}
        title="Home"
        key="Home"
        icon={<HomeOutlined style={{ fontSize: '24px', color: '#000' }} />}
        selectedIcon={
          <HomeFilled style={{ fontSize: '24px', color: '#69D2B3' }} />
        }></TabBar.Item>
      <TabBar.Item
        selected={props.isNewSelected}
        title="New/Special"
        key="New/Special"
        icon={<FireOutlined style={{ fontSize: '24px', color: '#000' }} />}
        selectedIcon={
          <FireFilled style={{ fontSize: '24px', color: '#69D2B3' }} />
        }></TabBar.Item>
      <TabBar.Item
        selected={props.isBookingsSelected}
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
