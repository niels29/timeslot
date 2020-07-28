import React from 'react';
import BaseLayout from '../../hoc/layouts/BaseLayout/BaseLayout';
import CardsCarousel from '../../components/CardsCarousel/CardsCarousel';

// import styles from './BookingsPage.module.scss';

const BookingsPage: React.FC = () => {
  const bookingsData = {
    mainBtnLink: '/detail/Long Beach',
    mainBtnText: 'View',
    headline: 'Long Beach',
    subheadline: 'Tue 04.08.2020',
    label: 'STORE',
    imgUrl: '',
  };

  let content = (
    <BaseLayout
      startSelection={[false, false, true]}
      hasHeaderMenuIcon={true}
      headerText={'Your bookings'}>
      <CardsCarousel data={bookingsData} />
      <div
        style={{
          height: '83px',
        }}></div>
    </BaseLayout>
  );

  return content;
};

export default BookingsPage;
