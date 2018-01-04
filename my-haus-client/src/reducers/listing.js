export default (state = {}, action) => {
    switch(action.type) {
        case 'GET_LISTING_SUCCESS':
            return action.listing;
        case 'UPDATED_LISTING_SUCCESS':
            return action.listing;
        default:
            return state;
    }
}
