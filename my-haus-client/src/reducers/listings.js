export default (state = {loading: false, listings: []}, action) => {
  switch(action.type) {
    case 'GET_LISTINGS_SUCCESS':
      return Object.assign({}, state, {loading: false, listings: state.listings.concat(action.listings)});

    case 'FETCH_LISTINGS':
        return Object.assign({}, state, {loading: true});

    case 'CREATE_LISTING_SUCCESS':
        return Object.assign({}, state, {loading: false, listings: state.listings.concat(action.listing)});

    case 'DELETE_LISTING_SUCCESS':
        return Object.assign({}, state, {loading: false, listings: state.listings.filter(listing => listing.id !== action.listing.id)});

    case 'ADD_LIKE':
        let array = [...state.listings]
        let listing = array.find((listing)=> listing.id === action.listing.id)
        let updatedListing = Object.assign({}, listing, action.listing)
        let listingIDX = array.indexOf(listing)
        array.splice(listingIDX, 1, updatedListing)
        return Object.assign({}, state, {loading: false, listings: array});

    default:
      return state;
  }
}
