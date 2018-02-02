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

    case 'EDIT_LISTING_SUCCESS':
        return Object.assign({}, state, {loading: false, listings: state.listings.concat(action.listings)});

    default:
      return state;
  }
}
