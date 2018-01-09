import React from 'react';
import { connect } from 'react-redux';
import { getListings } from '../actions/listings';
import Listing from './Listing';

class Listings extends React.Component {

  componentDidMount() {
    this.props.getListings()
  }

  render() {
    return (
      <div className="Listings">
        <h3>Listings:</h3>
        {this.props.listings && this.props.listings.map(listing =>
          <Listing key={listing.id} listing={listing} />)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return ({ listings: state.listings })
}



export default connect(mapStateToProps, {getListings})(Listings);
