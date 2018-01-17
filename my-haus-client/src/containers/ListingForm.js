import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateListingFormData } from '../actions/listingForm';
import { createListing } from '../actions/listings';

class ListingForm extends Component {

  handleOnChange = event => {
    const { name, value } = event.target;
    const currentListingFormData = Object.assign({}, this.props.listingFormData, {
      [name]: value
    })
    this.props.updateListingFormData(currentListingFormData)
  }

  handleOnSubmit = (event) => {
    debugger;
    event.preventDefault()
    this.props.createListing(this.props.listingFormData)
  }


  render() {
    const { title, price, location, description, img_url, agent_name, agent_number, agent_email } = this.props.listingFormData;

    return (
      <div className="ListingForm">
        <h3>Add New Listing</h3>
        <form onSubmit={(event) => this.handeOnSubmit(event)}>
          <label htmlFor="listing_title">Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(event) => this.handleOnChange(event)}
            placeholder="Listing Title"
          />

          <label htmlFor="listing_location">Location</label>
          <input
            type="text"
            name="location"
            value={location}
            onChange={(event) => this.handleOnChange(event)}
            placeholder="Listing City or County"
          />

          <label htmlFor="listing_price">Price</label>
          <input
            type="integer"
            name="price"
            value={price}
            onChange={(event) => this.handleOnChange(event)}
            placeholder="Listing Price"
          />

          <label htmlFor="listing_description">Description</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={(event) => this.handleOnChange(event)}
            placeholder="Listing Description"
          />

          <label htmlFor="listing_image">Attach Image</label>
          <input
            type="text"
            name="img_url"
            value={img_url}
            onChange={(event) => this.handleOnChange(event)}
            placeholder="Listing Image"
          />

          <label htmlFor="agent_name">Listing Agent</label>
          <input
            type="text"
            name="agent_name"
            value={agent_name}
            onChange={(event) => this.handleOnChange(event)}
            placeholder="Agent Name"
          />

          <label htmlFor="agent_number">Listing Agent Phone</label>
          <input
            type="integer"
            name="agent_number"
            value={agent_number}
            onChange={(event) => this.handleOnChange(event)}
            placeholder="Agent Phone"
          />

          <label htmlFor="agent_email">Agent Email</label>
          <input
            type="text"
            name="agent_email"
            value={agent_email}
            onChange={(event) => this.handleOnChange(event)}
            placeholder="Agent Email"
          />

          <button type="submit" onClick={this.handleOnSubmit}>Add Listing</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    listingFormData: state.listingFormData
  }
}

export default connect(mapStateToProps, {updateListingFormData,createListing})(ListingForm);
