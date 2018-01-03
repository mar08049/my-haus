import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import NavBar from './components/NavBar'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import ListingForm from "./containers/ListingForm"



ReactDOM.render(

      <Router>
        <div>
          <Home />
          <App />
            <div>
              <NavBar />
            </div>
            <div>
              <Switch>
                <Route path="/listings/new" component={ ListingForm } />
              </Switch>
            </div>
        </div>
      </Router>

  ,document.getElementById('root')
);

registerServiceWorker();
