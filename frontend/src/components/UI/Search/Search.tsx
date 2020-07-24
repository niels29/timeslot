import React, { useState } from 'react';
import { AutoComplete } from 'antd';
import { withRouter } from 'react-router-dom';

import styles from './Search.module.scss';

const Search: React.FC = (props: any) => {
  const [value, setValue] = useState('');
  const [options, setOptions] = useState<{ value: string }[]>([]);
  const onSearch = (searchText: string) => {
    setOptions(
      !searchText ? [{ value: 'Long Beach' }] : [{ value: 'Long Beach' }]
    );
  };
  const onSelect = (data: string) => {
    props.history.push('/results/' + data);
  };
  const onChange = (data: string) => {
    setValue(data);
  };
  return (
    <AutoComplete
      value={value}
      options={options}
      onSelect={onSelect}
      onSearch={onSearch}
      onChange={onChange}
      placeholder="What are you looking for?"
      className={styles.auto_complete}
    />
  );
};

export default withRouter(Search);
