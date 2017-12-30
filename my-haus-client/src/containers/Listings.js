import React, { Component } from 'react';
import ListingList from "../components/ListingList.js";
import ListingForm from "./ListingForm";
import "./Listings.css";

class Listings extends Component {

  render() {
    return (
      <div className="ListingsContainer">
        <h1>Listings</h1>
        {this.props.listings.map(listing => <ListingList key={listing.id} listing={ListingForm}/>)}
      </div>
    )
  }
}

export default Listings;
