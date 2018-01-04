import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Listings from './containers/Listings';
import Listing from './containers/Listing';
import NavBar from './components/NavBar';
import styles from './index.css';

import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
  <Provider >
    <Router>
      <div className={styles.index}>
        <div>
          <Switch>

            <Route path="/listings/:id" component={ Listing } />
            <Route path="/listings" component={ Listings } />
            <Route path="/" component={ Home } />
          </Switch>
        </div>
        <div className="sidebar">
          <NavBar/>
        </div>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
