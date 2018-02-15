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
        return Object.assign({}, state, {loading: false, count: state.listing.count + 1});

    case 'SUBTRACT_LIKE':
        return Object.assign({}, state, {loading: false, count: state.listing.count - 1});

    default:
      return state;
  }
}
