import React from 'react';
import { connect } from 'react-redux';
import ListingCard from './ListingCard';
import { getListings } from '../actions/listings';

class Listings extends React.Component {

  componentDidMount() {
    this.props.getListings()
  }

  render() {
    return (
      <div className="Listings">
        <h3>Listings:</h3>
        {this.props.listings && this.props.listings.map(listing =>
          <ListingCard key={listing.id} listing={listing} />)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return ({ listings: state.listings })
}



export default connect(mapStateToProps, {getListings})(Listings);
