

export default function manageListing (state = {
  listings: []
}, action) {
  switch(action.type) {
    case 'GET_LISTINGS_SUCCESS':
      return action.listings;

    case 'CREATE_LISTING_SUCCESS':
      return state.concat(action.listing);

    case 'DELETE_LISTING_SUCCESS':
      return state.filter(listing => listing.id !== action.listing.id);

    default:
      return state;
  }
}
