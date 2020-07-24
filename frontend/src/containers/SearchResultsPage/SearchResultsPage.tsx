import React from 'react';
import BaseLayout from '../../hoc/layouts/BaseLayout/BaseLayout';
import Search from '../../components/UI/Search/Search';
import CardsCarousel from '../../components/CardsCarousel/CardsCarousel';

import styles from './SearchResultsPage.module.scss';

const SearchResultsPage: React.FC = () => {
  let content = (
    <BaseLayout hasHeaderMenuIcon={true} headerText={'timeslot'}>
      <div className={styles.search}>
        <Search />
      </div>
      <div className={styles.prefix}>
        <CardsCarousel />
      </div>
    </BaseLayout>
  );

  return content;
};

export default SearchResultsPage;
