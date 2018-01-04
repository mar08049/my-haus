import React from 'react';
import { connect } from 'react-redux';

import ListingList from '../components/ListingList';


class Listings extends React.Component {

  componentDidMount() {
    this.props.fetchListings()
  }

  render() {
    return (
      <div>
        <ListingList listings={ this.props.listings } />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    listings: state.listings
  })
}

export default connect(mapStateToProps)(Listings);
