const initialState = {
  title: '',
  location: '',
  price: '',
  description: '',
  agent_name: '',
  agent_number: '',
  agent_email: '',
}

export default (state = initialState, action) => {

  switch(action.type) {
    case 'UPDATED_DATA':
      return action.listingFormData;

    case 'RESET_LISTING_FORM':
      return initialState;

    default:
      return state;
  }
}
