export default (state = {loading: false, listings: []}, action) => {
  switch(action.type) {
    case 'GET_LISTINGS_SUCCESS':
      return Object.assign({}, state, {loading: false, listings: state.listings.concat(action.listings)});

    case 'LOADING':
        return Object.assign({}, state, {loading: true});

    case 'CREATE_LISTING_SUCCESS':
      return Object.assign({}, state, {loading: false, listings: state.listings.concat(action.listings)});

    default:
      return state;
  }
}
