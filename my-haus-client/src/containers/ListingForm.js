import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateListingFormData } from '../actions/listingForm';
import { createListing } from '../actions/listings';
import { ListingFormTemplate } from '../components/ListingFormTemplate';

class ListingForm extends Component {

    handleOnChange = event => {
        const { name, value } = event.target
        const currentListingFormData = Object.assign({}, this.props.listingFormData, {
            [name]: value
        })

        this.props.updateListingFormData(currentListingFormData)
    }

    handleOnSubmit = event => {
        event.preventDefault()
        const { history, createListing } = this.props

        createListing(this.props.listingFormData, history);
    }

    render() {
        const initialState = {
            title: '',
            description: '',
            location: '',
            price: '',
            agent_name: '',
            agent_number: '',
            agent_email: ''
        }

        return (
            <div>
                <div>
                    <h1>New Listing Form</h1>
                </div>
                <div>
                    <ListingFormTemplate listing={ initialState }
                                     handleOnSubmit={ this.handleOnSubmit }
                                     handleOnChange={ this.handleOnChange }
                                     buttonText="Add Listing" />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
      listingFormData: state.listingFormData
    })
  }

export default connect(mapStateToProps, { updateListingFormData, createListing })(ListingForm);
