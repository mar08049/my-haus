import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ListingCard from '../components/ListingCard';
import ListingForm from './ListingForm';
import { getListings, deleteListing } from '../actions/listings';
import './Listings.css';

class Listings extends Component {

  componentDidMount() {
    this.props.getListings()
  }

  render() {
    return (
      <div className="ListingsList">
      <h2>Listings</h2>
          {this.props.listings.length ? this.props.listings.map(listing => <ListingCard key={listing.id} deleteListing={this.props.deleteListing} listing={listing}/>) : 'LOADING...'}
        <ListingForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.listings.listings)
  return ({
    listings: state.listings.listings, fetchListings: state.listings.fetchListings
  })
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({
    getListings,
    deleteListing
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps )(Listings);
