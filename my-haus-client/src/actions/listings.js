import { resetListingForm } from './listingForm';

const API_URL = process.env.REACT_APP_API_URL;

//Action Creators //
export const setListings = listings => {
  return {
    type: 'GET_LISTINGS_SUCCESS',
    listings
  }
}


//Async Actions//
export const fetchListings = () => {
  return dispatch => {
    return fetch(`${API_URL}/listings`)
      .then(response => response.json())
      .then(listings => dispatch({ type: 'FETCH_LISTINGS', payload: listings}))
    }
  }
