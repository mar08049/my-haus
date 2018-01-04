import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import ListingForm from './containers/ListingForm';
import ListingEditForm from './containers/ListingEditForm';
import Listings from './containers/Listings';
import Listing from './containers/Listing';
import NavBar from './components/NavBar';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <Provider >
    <Router>
      <div>
        <div>
          <NavBar />
        </div>
        <div>
          <Switch>
            <Route path="/listings/new" component={ ListingForm } />
            <Route path="/listings/:id/edit" component={ ListingEditForm } />
            <Route path="/listings/:id" component={ Listing } />
            <Route path="/listings" component={ Listings } />
            <Route path="/" component={ Home } />
          </Switch>
        </div>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
