import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import listings from './reducers/listings';

const listings = (state = [], action) => {
  switch(action.type) {
    case 'GET_LISTINGS_SUCCESS':
      return action.listings;

    default:
      return state;
  }
}

const reducers = combineReducers({
  listings: listings
});

const middleware = [thunk];

export default createStore(
  reducers,
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
