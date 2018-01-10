import React, { Component } from 'react';
import ListingCard from '../components/ListingCard';
import ListingForm from './ListingForm';
import './Listings.css';

class Listings extends Component {


  render() {
    return (
      <div className="ListingContainer">
        <h1>Listings</h1>
        {this.props.listings.map(listing => <ListingCard listing={listing} /> )}
        <ListingForm />
      </div>
    );
  }
}


export default Listings;
