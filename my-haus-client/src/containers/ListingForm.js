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

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.createListing(this.props.listingFormData)
  }
  //console.log('sumbitted form')

  render() {
    const { title, price, location, description, img_url, agent_name, agent_number, agent_email } = this.props.listingFormData;
    return (
      <div className="ListingForm">
        <h3>Add New Listing</h3>
        <form onSubmit={this.handeOnSubmit}>
          <label htmlFor="listing_title">Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.handleOnChange}
            placeholder="Listing Title"
          />

          <label htmlFor="listing_location">Location</label>
          <input
            type="text"
            name="location"
            value={location}
            onChange={this.handleOnChange}
            placeholder="Listing City or County"
          />

          <label htmlFor="listing_price">Price</label>
          <input
            type="integer"
            name="price"
            value={price}
            onChange={this.handleOnChange}
            placeholder="Listing Price"
          />

          <label htmlFor="listing_description">Description</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={this.handleOnChange}
            placeholder="Listing Description"
          />

          <label htmlFor="listing_image">Attach Image</label>
          <input
            type="text"
            name="img_url"
            value={img_url}
            onChange={this.handleOnChange}
            placeholder="Listing Image"
          />

          <label htmlFor="agent_name">Listing Agent</label>
          <input
            type="text"
            name="agent_name"
            value={agent_name}
            onChange={this.handleOnChange}
            placeholder="Agent Name"
          />

          <label htmlFor="agent_number">Listing Agent Phone</label>
          <input
            type="text"
            name="agent_number"
            value={agent_number}
            onChange={this.handleOnChange}
            placeholder="Agent Phone"
          />

          <label htmlFor="agent_email">Agent Email</label>
          <input
            type="text"
            name="agent_email"
            value={agent_email}
            onChange={this.handleOnChange}
            placeholder="Agent Email"
          />

          <button type="submit"> Add Listing</button>
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

export default connect(mapStateToProps, {
  updateListingFormData,
  createListing
 })(ListingForm);
