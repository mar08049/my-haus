import React from 'react';
// import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';

import { fetchListing, editListing } from '../actions/listings';
import { updateListingFormData } from '../actions/listingForm';
import { ListingFormTemplate } from '../components/ListingFormTemplate';

class ListingEditForm extends React.Component {

    componentWillMount() {
        const { id } = this.props.match.params

        this.props.fetchListing(id)
    }

    componentDidMount() {
        this.props.updateListingFormData(this.props.oil)
    }

    handleOnChange = event => {
        const { name, value } = event.target
        const currentListingFormData = Object.assign({}, this.props.listingFormData, {
            [name]: value
        })

        this.props.updateListingFormData(currentListingFormData)
    }

    handleOnSubmit = event => {
        event.preventDefault()
        const { history, editListing } = this.props

        editListing(this.props.listingFormData, history);
    }


    render() {
        return(
            <div>
                <div>
                    <h1>Edit Listing</h1>
                </div>
                <div>
                    <ListingFormTemplate listing={ this.props.oil }
                                     handleOnSubmit={ this.handleOnSubmit }
                                     handleOnChange={ this.handleOnChange }
                                     buttonText="Update Listing" />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      listing: state.listing,
      listingFormData: state.listingFormData
    }
}

export default connect(mapStateToProps, { fetchListing, updateListingFormData, editListing })(ListingEditForm);
