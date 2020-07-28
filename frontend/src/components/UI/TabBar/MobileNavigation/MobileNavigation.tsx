import React, { useState } from 'react';
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
  onHomeClick: () => void;
  onNewClick: () => void;
  onBookingsClick: () => void;
  startSelection: [boolean, boolean, boolean];
  children?: React.ReactNode;
}

const MobileNavigation = (props: Props) => {
  const [isHomeSelected, setIsHomeSelected] = useState(props.startSelection[0]);
  const [isNewSelected, setIsNewSelected] = useState(props.startSelection[1]);
  const [isBookingsSelected, setIsBookingsSelected] = useState(
    props.startSelection[2]
  );

  const content = (
    <TabBar unselectedTintColor="#000" tintColor="#000" barTintColor="white">
      <TabBar.Item
        onPress={() => {
          setIsHomeSelected(true);
          setIsNewSelected(false);
          setIsBookingsSelected(false);
          props.onHomeClick();
        }}
        selected={isHomeSelected}
        title="Home"
        key="Home"
        icon={<HomeOutlined style={{ fontSize: '24px', color: '#000' }} />}
        selectedIcon={
          <HomeFilled style={{ fontSize: '24px', color: '#69D2B3' }} />
        }></TabBar.Item>
      <TabBar.Item
        onPress={() => {
          setIsHomeSelected(false);
          setIsNewSelected(true);
          setIsBookingsSelected(false);
          props.onNewClick();
        }}
        selected={isNewSelected}
        title="New/Special"
        key="New/Special"
        icon={<FireOutlined style={{ fontSize: '24px', color: '#000' }} />}
        selectedIcon={
          <FireFilled style={{ fontSize: '24px', color: '#69D2B3' }} />
        }></TabBar.Item>
      <TabBar.Item
        onPress={() => {
          setIsHomeSelected(false);
          setIsNewSelected(false);
          setIsBookingsSelected(true);
          props.onBookingsClick();
        }}
        selected={isBookingsSelected}
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
