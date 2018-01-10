
const API_URL = process.env.REACT_APP_API_URL;


const ListingService = {
  getListings() {
    return fetch(`${API_URL}/listings`)
      .then(response => response.json())
  },

  createListing(listing) {
    const request = {
      method:'POST',
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
