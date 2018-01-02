import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <Switch>
            <Route path="/bookings/new" component={ BookingForm } />
            <Route path="/bookings/:id/edit" component={ BookingEditForm } />
            <Route path="/bookings/:id" component={ BookingShow } />
            <Route path="/bookings" component={ BookingsIndex } />
            <Route path="/" component={ Home } />
          </Switch>
        </div>
      </div>
  ,document.getElementById('root')
);

registerServiceWorker();
