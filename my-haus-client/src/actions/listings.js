import { resetListingForm } from './listingForm';

const API_URL = process.env.REACT_APP_API_URL;


const setListings = listings => {
  return {
    type: 'GET_LISTINGS_SUCCESS',
    listings
  }
}

const setListing = listing => {
  return {
    type: 'GET_LISTINGS_SUCCESS',
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
    type: 'DELETE_LISTING_SUCCESS'
  }
}

// ** Async Actions **
export const fetchListings = () => {
    return dispatch => {
        return fetch(`${API_URL}/listings`)
            .then(response => response.json())
            .then(listings => dispatch(setListings(listings)))
            .catch(error => console.log(error));
    }
}

export const fetchListing = listingID => {
    return dispatch => {
        return fetch(`${API_URL}/listings/${listingID}`)
            .then(response => response.json())
            .then(listing => dispatch(setListing(listing)))
            .catch(error => console.log(error));
    }
}

export const createListing = (listing, routerHistory) => {
    const request = {
        method: 'POST',
        body: JSON.stringify({ listing: listing }),
        headers: {
          'Content-Type': 'application/json'
        }
    };

    return dispatch => {
        return fetch(`${API_URL}/listings`, request)
            .then(response => response.json())
            .then(listing => {
                dispatch(addListing(listing))
                dispatch(resetListingForm());
                routerHistory.replace(`/listing`)
            })
            .catch(error => console.log(error));
    }
}

export const editListing = (listing, routerHistory) => {
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
            .then(listing => {
                dispatch(updateListing(listing));
                routerHistory.replace(`/listings/${listing.id}`)
            })
            .catch(error => console.log(error));
    }
}

export const deleteListing = (listingID, routerHistory) => {
    const request = {
        method: 'DELETE'
    };

    return dispatch => {
        return fetch(`${API_URL}/listing/${listingID}`, request)
            .then(response => response.json())
            .then(listing => {
                dispatch(destroyListing(listing));
                routerHistory.replace(`/listings`)
            })
            .catch(error => console.log(error));
    }
}
