import React from 'react';
import BaseLayout from '../../hoc/layouts/BaseLayout/BaseLayout';

// import styles from './BookingPage.module.scss';

const BookingPage: React.FC = () => {
  const bookingPageData = {
    name: 'LONG BEACH',
  };
  let content = (
    <BaseLayout
      hasHeaderBackIcon={true}
      headerText={bookingPageData.name}
      withoutNavigation={true}>
      Booking
    </BaseLayout>
  );

  return content;
};

export default BookingPage;
