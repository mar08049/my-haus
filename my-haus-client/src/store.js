
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import listing from './reducers/listing';
import listings from './reducers/listings';
import listingFormData from './reducers/listingFormData';

const reducers = combineReducers({
    listing,
    listings,
    listingFormData
});

const middleware = [thunk];

export default createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware)
);
