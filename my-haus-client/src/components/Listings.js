import React from 'react';
import { connect } from 'react-redux';
import listings from './reducers/listings';
import { getListings } from "../actions/listings"


class Listings extends React.Component {

  componenentDidMount() {
    this.props.getListings()
  }

  render() {
    return (
      <div className="ListingsList">
      <h3>Listings:</h3>
      {this.props.listings.map(listing => <ListingsList key={listing.id} listing={listing} />)}
      <p>{listing.title}</p>
    );
  }
}

const mapStateToProps = (state) => {
    return ({ listings: state.listings})
}

export default connect(mapStateToProps, { getListings })(Listings);
