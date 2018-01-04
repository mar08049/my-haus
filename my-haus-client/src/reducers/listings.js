export default (state = [], action) => {
    switch(action.type) {
        case 'GET_LISTING_SUCCESS':
            let sortedListings = action.listings.sort(function(a, b){ return a.title > b.title; });

            return sortedListings;
        case 'CREATE_LISTING_SUCCESS':
            return state.concat(action.listing);
        case 'DELETE_LISTING_SUCCESS':
            return state.filter(listing => listing.id !== action.listing.id);
        default:
            return state;
    }
}
