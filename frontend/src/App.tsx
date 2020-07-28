import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import OverviewPage from './containers/OverviewPage/OverviewPage';
import SearchResultsPage from './containers/SearchResultsPage/SearchResultsPage';
import DetailPage from './containers/DetailPage/DetailPage';
import BookingPage from './containers/BookingPage/BookingPage';
import BookingsPage from './containers/BookingsPage/BookingsPage';

const App = () => {
  let content = (
    <Router>
      <Switch>
        <Route path="/results/:searchValue">
          <SearchResultsPage />
        </Route>
        <Route path="/detail/:name">
          <DetailPage />
        </Route>
        <Route path="/booking/:name">
          <BookingPage />
        </Route>
        <Route path="/bookings">
          <BookingsPage />
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
