import React from 'react';
import BaseLayout from '../../hoc/layouts/BaseLayout/BaseLayout';
import Search from '../../components/UI/Search/Search';
import CardsCarousel from '../../components/CardsCarousel/CardsCarousel';

import styles from './SearchResultsPage.module.scss';

const SearchResultsPage: React.FC = () => {
  const searchResultsData = {
    mainBtnLink: '/detail/Long Beach',
    mainBtnText: 'View',
    headline: 'Long Beach',
    subheadline: 'Beach clothing store',
    label: 'STORE',
    imgUrl: '',
  };
  let content = (
    <BaseLayout hasHeaderMenuIcon={true} headerText={'timeslot'}>
      <div className={styles.search}>
        <Search />
      </div>
      <div className={styles.prefix}>
        <CardsCarousel data={searchResultsData} />
      </div>
    </BaseLayout>
  );

  return content;
};

export default SearchResultsPage;
