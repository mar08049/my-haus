const API_URL = process.env.REACT_APP_API_URL;

const ListingService = {
  fetchListings() {
    return fetch(`${API_URL}/listings`)
      .then(response => response.json())
  }
}

export default ListingService;
