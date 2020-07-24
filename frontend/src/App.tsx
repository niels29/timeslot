import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import OverviewPage from './containers/OverviewPage/OverviewPage';
import SearchResultsPage from './containers/SearchResultsPage/SearchResultsPage';

const App = () => {
  let content = (
    <Router>
      <Switch>
        <Route path="/results/:searchValue">
          <SearchResultsPage />
        </Route>
        <Route path="/">
          <OverviewPage />
        </Route>
      </Switch>
    </Router>
  );

  return content;
};

export default App;
