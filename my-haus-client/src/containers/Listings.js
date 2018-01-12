import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ListingCard from '../components/ListingCard';
import ListingForm from './ListingForm';
import { getListings, deleteListing } from '../actions/listings';
import './Listings.css';

class Listings extends Component {

  handleOnClick = (listing) => {
    this.props.deleteListing(listing)
  }

  componentDidMount() {
    this.props.getListings()
  }

  render() {
    return (
      <div className="ListingContainer">
        <h1>Listings</h1>

        {this.props.loading ? this.props.listings.map(listing => <ListingCard key={listing.id} listing={listing}/>) : 'LOADING...'}
        <ListingForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    listings: state.listings.listings, loading: state.listings.loading
  })
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getListings
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps )(Listings);
