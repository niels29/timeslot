import React from 'react';
import BaseLayout from '../../hoc/layouts/BaseLayout/BaseLayout';
import { DatePicker, Input } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import BtnRound from '../../components/UI/BtnRound/BtnRound';

import styles from './BookingPage.module.scss';

interface Props extends RouteComponentProps<any> {}

const BookingPage: React.FC<Props> = (props) => {
  const bookingPageData = {
    name: 'LONG BEACH',
    mainBtnText: 'Book slot',
    mainBtnLink: '/bookings',
  };

  let timeSelection = (
    <div key="2">
      <BtnRound small={true} onClickCallback={() => {}}>
        11 am
      </BtnRound>
      <BtnRound small={true} onClickCallback={() => {}}>
        11.30 am
      </BtnRound>
      <BtnRound small={true} onClickCallback={() => {}}>
        1 pm
      </BtnRound>
      <BtnRound small={true} onClickCallback={() => {}}>
        1.30 pm
      </BtnRound>
      <BtnRound small={true} onClickCallback={() => {}}>
        4.30 pm
      </BtnRound>
    </div>
  );

  let content = (
    <BaseLayout
      hasHeaderBackIcon={true}
      headerText={bookingPageData.name}
      withoutNavigation={true}>
      <DatePicker className={styles.date_picker} />
      {timeSelection}
      <Input placeholder={'Favorite color'} className={styles.input} />
      <Input placeholder={'Height'} className={styles.input} />
      <Input placeholder={'Size'} className={styles.input} />
      <Input placeholder={'Name'} className={styles.input} />
      <Input
        placeholder={'Email'}
        type="email"
        className={styles.input}
        suffix={<MailOutlined />}
      />
      <BtnRound
        onClickCallback={() => props.history.push(bookingPageData.mainBtnLink)}>
        {bookingPageData.mainBtnText}
      </BtnRound>
    </BaseLayout>
  );

  return content;
};

export default withRouter(BookingPage);
