import React, { Component } from 'react';
import ListingList from "../components/ListingList.js";
import ListingForm from "./container/ListingForm";
import "./Listings.css";

class Listings extends Component {

  render() {
    return (
      <div className="ListingsContainer">
        <h1>Listings</h1>
        {this.props.listings.map(listing => <ListingList key={listings.id} listing={ListingForm}/>)}
      </div>
    )
  }
}

export default Listings;