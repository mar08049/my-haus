import { resetListingForm} from './listingForm';

const API_URL = process.env.REACT_APP_API_URL;

//Action Creators //
const setListings = listings => {
  return {
    type: 'GET_LISTINGS_SUCCESS',
    listings
  }
}

const setListing = listings => {
  return {
    type: 'GET_LISTING_SUCCESS',
    listing
  }
}

const addListing = listing => {
  return {
    type: 'CREATE_LISTING_SUCCESS',
    listing
  }
}

const updateListing = listing => {
  return {
    type: 'UPDATED_LISTING_SUCCESS',
    listing
  }
}

const destroyListing = listing => {
  return {
    type: 'DELETE_LISTING_SUCCESS',
    listing
  }
}

const

//Async Actions//
export const getListings = () => {
  return dispatch => {
    return fetch(`${API_URL}/listings`)
      .then(response => response.json())
      .then(listings => dispatch(setListings(listings)))
      .catch(error => console.log(error));
    }
  }

  export const createListings = listing => {
    return dispatch => {
      return fetch(`${API_URL}/listings`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ listing: listing })
      })
        .then(response => response.json())
        .then(listing => {
          dispatch(addListing(listing))
          dispatch(resetListingForm())
        })
        .catch(error => console.log(error))
    }
  }
