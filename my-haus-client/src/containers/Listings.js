import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListingsList from '../components/ListingsList';
import { fetchListings } from '../actions/listings';

class Listings extends React.Component {

  componentDidMount() {
    this.props.fetchListings()
  }

  render() {
    return (
      <div>
        <ListingsList oils={ this.props.listings } />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    listings: state.listings
  })
}

export default connect(mapStateToProps, { fetchListings })(Listings);
