import { resetListingForm } from './listingForm';
require('isomorphic-fetch');

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
    type: "CREATE_LISTING_SUCCESS",
    listing
  }
}

const updateListing = listing => {
  return {
    type: "UPDATE_LISTING_SUCCESS",
    listing
  }
}

const destroyListing = listing => {
  return {
    type: "DELETE_LISTING_SUCCESS",
    listing
  }
}


//Async Actions //
export const getListings = () => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_LISTINGS'});
    return fetch(`${API_URL}/listings`)
      .then(response => response.json())
      .then(listings => dispatch(setListings(listings)))
      .catch(error => console.log(error));
  }
}

export const createListing = listing => {
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

export function editListing(listing) {
  debugger;
  const request = {
    method: 'PUT',
    body: JSON.stringify({ listing: listing }),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return dispatch => {
    return fetch(`${API_URL}/listings/${listing.id}`, request)
      .then(response => response.json())
      .then(listing => {dispatch(updateListing(listing));
      })
      .catch(error => console.log(error));
  }
}

export function deleteListing(listing) {
  return dispatch => {
    console.log("return dispatch");

    const request = {
      method: 'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    };
    dispatch(destroyListing(listing));
    return fetch(`${API_URL}/listings/${listing}`, request)
    .then(response => response.json())
    .then(listing => dispatch(destroyListing(listing)))
  }
}
