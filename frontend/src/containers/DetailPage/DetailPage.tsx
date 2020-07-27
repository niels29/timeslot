import React from 'react';
import BaseLayout from '../../hoc/layouts/BaseLayout/BaseLayout';
import DetailCard from '../../components/DetailCard/DetailCard';

// import styles from './DetailPage.module.scss';

const DetailPage: React.FC = () => {
  const detailPageData = {
    name: 'LONG BEACH',
    mainBtnLink: '/booking/Long Beach',
    mainBtnText: 'Book slot',
    headline: 'Long Beach',
    subheadline: 'Beach clothing store',
    label: 'STORE',
    imgUrl: '',
    textHeadline: 'Detail information about the shop ',
    text:
      'Explore Luxury & High Fashion At Luisaviaroma. Shop For Him, Her, Children And The Home. Worlwide Shipping & All Orders Prepared With Maxiumum Care Using The Finest Materials.',
  };
  let content = (
    <BaseLayout
      hasHeaderBackIcon={true}
      headerText={detailPageData.name}
      withoutNavigation={true}>
      <DetailCard cardData={detailPageData} />
    </BaseLayout>
  );

  return content;
};

export default DetailPage;
