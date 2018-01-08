export default (state = [], action) => {
  switch(action.type) {
    case 'GET_LISTINGS_SUCCESS':
      return action.listings;

    default:
      return state;
  }
}
