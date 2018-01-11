export default (state = [], action) => {
  switch(action.type) {
    case 'GET_LISTINGS_SUCCESS':
      return action.listings;

    case 'CREATE_LISTING_SUCCESS':
      return state.concat(action.listing);

    default:
      return state;
  }
}
