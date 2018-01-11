
//action creator//
export const updateListingFormData = listingFormData => {
  return {
    type: 'UPDATED_DATA',
    listingFormData
  }
}

export const resetListingForm = () => {
  return {
    type: 'RESET_LISTING_FORM'
  }
}
