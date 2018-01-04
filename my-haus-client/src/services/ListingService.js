const API_URL = process.env.RAILS_API_URL;
console.log(API_URL);

const ListingService = {
  fetchListings() {
    return fetch('/listings')
      .then(response => response.json())
  }
}

export default ListingService;
