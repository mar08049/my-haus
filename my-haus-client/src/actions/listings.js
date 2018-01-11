import { resetListingForm } from './listingForm';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';


//Action Creators//
const setListings = listings => {
  return {
    type: "GET_LISTINGS_SUCCESS",
    listings
  }
}


const addListing = listing => {
  return {
    type: "CREATE_LISTING_SUCCES",
    listing
  }
}


//Async Actions //
export const getListings = () => {
  return dispatch => {
    return fetch(`${API_URL}/listings`)
      .then(response => response.json())
      .then(listings => dispatch(setListings))
      .catch(error => console.log(error));
  }
}

export const createListing = listing => {
  debugger;
  return dispatch => {
    return fetch(`${API_URL}/listings`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({listing: listing})
    })
    .then(response => {
      dispatch(addListing(listing))
      dispatch(resetListingForm())
    })
    .catch(error => console.log(error))
  }
}
