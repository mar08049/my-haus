const API_URL = process.env.REACT_APP_API_URL;

const ListingService = {
  fetchListings() {
    return fetch(`${API_URL}/listings`)
      .then(response => response.json())
  },

  createListing(listing) {
    const request = {
      method:'POST',
      body: JSON.stringify(listing),
      contentType: 'application/json',
      accepts: 'application/json'
    };
    
    return fetch(`${API_URL}/listings`, request)
      .then(response => response.json())
    }
}

export default ListingService;
