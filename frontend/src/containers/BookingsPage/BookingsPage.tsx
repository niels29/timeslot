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
    imgUrl:
      'https://s3-alpha-sig.figma.com/img/9374/c863/61b4d33a9cdd9d3cd9684485eba43653?Expires=1597017600&Signature=C136Vamdc5Du3ab8BQrObyVwgazhOHRkgzG1SBFDc0igbkfG9IfONK9f3~oCUqxbRkn6jp-s4ktIXb7IXUwudqJlglLKD889WfRLx5tr4wkRmQ-aZTgNlcflX4jbyMViXkMwpL-qkc4jovx7~6a5Cc0tfSUv5e8PiHso8LYo5ewgZWfh9qAjOmdOqj~NhomWLJeOvJcLpz0yM3L27k4dPJ5kAhBxT~7YQ4A20ya2AsBM-IHNofmY9ZX0KHiEox3HpaLSlfckJkAn-aLo8l2M3UQnCBKmpfDfkh9zEmznYXRVKwKHvFO86skjMyvQCBRphFulbiF6OZZ7DACxUNRoZA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
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
