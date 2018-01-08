import React from 'react';
import { connect } from 'react-redux';

class Listings extends Component {
  render() {
    return (
      <div className="ListingsList">
        <h3>Listings: </h3>
        {this.props.listings.map(listing =>
        <p key={listing.id}>{listing.title}</p>)}
      </div>
    );  
  }
};

export default connect()(Listings);
