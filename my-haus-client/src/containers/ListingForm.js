import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
    event.preventDefault()
    this.props.createListing(this.props.listingFormData)
  }


  render() {
    const { title, price, location, description, img_url, agent_name, agent_email } = this.props.listingFormData;

    return (
      <div className="ListingForm">

          <form onSubmit={(event) => this.handeOnSubmit(event)}>
          <h4>Add New Listing</h4>
            <label htmlFor="listing_title"></label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(event) => this.handleOnChange(event)}
              placeholder="Listing Title"
            />

            <label htmlFor="listing_location"></label>
            <input
              type="text"
              name="location"
              value={location}
              onChange={(event) => this.handleOnChange(event)}
              placeholder="Listing City or County"
            />

            <label htmlFor="listing_price"></label>
            <input
              type="integer"
              name="price"
              value={price}
              onChange={(event) => this.handleOnChange(event)}
              placeholder="Listing Price"
            />

            <label htmlFor="listing_description"></label>
            <input
              type="text"
              name="description"
              value={description}
              onChange={(event) => this.handleOnChange(event)}
              placeholder="Listing Description"
            />

            <label htmlFor="listing_image"></label>
            <input
              type="text"
              name="img_url"
              value={img_url}
              onChange={(event) => this.handleOnChange(event)}
              placeholder="Listing Image"
            />

            <label htmlFor="agent_name"></label>
            <input
              type="text"
              name="agent_name"
              value={agent_name}
              onChange={(event) => this.handleOnChange(event)}
              placeholder="Agent Name"
            />

            <label htmlFor="agent_email"></label>
            <input
              type="text"
              name="agent_email"
              value={agent_email}
              onChange={(event) => this.handleOnChange(event)}
              placeholder="Agent Email"
            />

            <button className="FormButton" type="submit" onClick={this.handleOnSubmit}>Add Listing</button>
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({
    updateListingFormData,
    createListing
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(ListingForm);
