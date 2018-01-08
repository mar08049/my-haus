import React, { Component } from 'react';

class AddListing extends Component {
  constructor(props) {
    super(props)

      this.state = {
        title: '',
        description: '',
        price: '',
        location: '',
        agent_name: '',
        agent_number: '',
        agent_email: '',
    }
  }

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const listing = this.state;
    this.props.addListing(listing)
    this.setState({
      title: '',
      description: '',
      price: '',
      location: '',
      agent_name: '',
      agent_number: '',
      agent_email: '',
    })
  }

  render() {
    console.log(this.state)
    return (
      <form onSubmit={this.handeOnSubmit}>
        <label htmlFor="listing_title">Title</label>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleOnChange}
          placeholder="Listing Title"
        />

        <label htmlFor="listing_location">Location</label>
        <input
          type="text"
          name="location"
          value={this.state.location}
          onChange={this.handleOnChange}
          placeholder="Listing City or County"
        />

        <label htmlFor="listing_price">Price</label>
        <input
          type="integer"
          name="price"
          value={this.state.price}
          onChange={this.handleOnChange}
          placeholder="Listing Price"
        />

        <label htmlFor="listing_description">Description</label>
        <input
          type="text"
          name="description"
          value={this.state.description}
          onChange={this.handleOnChange}
          placeholder="Listing Description"
        />

        <label htmlFor="agent_name">Listing Agent</label>
        <input
          type="text"
          name="agent_name"
          value={this.state.agent_name}
          onChange={this.handleOnChange}
          placeholder="Agent Name"
        />

        <label htmlFor="agent_number">Listing Agent Phone</label>
        <input
          type="text"
          name="agent_number"
          value={this.state.agent_number}
          onChange={this.handleOnChange}
          placeholder="Agent Phone"
        />

        <label htmlFor="agent_email">Agent Email</label>
        <input
          type="text"
          name="agent_email"
          value={this.state.agent_email}
          onChange={this.handleOnChange}
          placeholder="Agent Email"
        />

        <button>Add Listing</button>
      </form>
    )
  }
}

export default AddListing;
