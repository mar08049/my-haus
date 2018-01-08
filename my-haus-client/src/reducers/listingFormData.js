export default (state =  {
  title: '',
  location: '',
  price: '',
  description: '',
  agent_name: '',
  agent_number: '',
  agent_email: '',
}, action) => {

  switch(action.type) {
    case 'UPDATED_DATA':
      return action.listingFormData

    default:
      return state;
  }
}
