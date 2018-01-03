import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import NavBar from './components/NavBar'

import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(

      <Router>
      <div>
        <Home />
        <App />
        <NavBar />
      </div>
      </Router>

  ,document.getElementById('root')
);

registerServiceWorker();
