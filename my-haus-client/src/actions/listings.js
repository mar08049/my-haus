const API_URL = process.env.REACT_APP_API_URL;

//Action Creators //
const setListings = listings => {
  return {
    type: 'GET_LISTINGS_SUCCESS',
    listings
  }
}



//Async Actions//
const getListings = () =>
  dispatch => {
    return fetch(`${API_URL}/listings`)
      .then(response => response.json())
      .then(listings) => dispatch(setListings))
      .catch(error => console.log(error));
    )
  }
