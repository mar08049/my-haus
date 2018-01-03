import React from 'react';
import { connect } from 'react-redux';

import ListingList from '../components/ListingList';
import { fetchListings } from '../actions/listings';

class Listings extends React.Component {

  componentDidMount() {
    this.props.fetchListings()
  }

  render() {
    return (
      <div>
        <ListingList oils={ this.props.listings } />
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
