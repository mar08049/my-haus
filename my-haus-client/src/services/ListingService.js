const API_URL = process.env.REACT_APP_API_URL;

const ListingService = {
  fetchListings() {
    return fetch(`${API_URL}/listings`)
      .then(response =>
        response.json())
  },

  createListing(listing) {
    const request = {
      method:'POST',//fetch request not hitting
      body: JSON.stringify({
        listing: listing
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    };

    return fetch(`${API_URL}/listings`, request)
      .then(response => response.json())
    }
}

export default ListingService;
