import React from 'react';
import "./Listings.css";

const Listings = (props) => (
  <div>
    <h1>Listings</h1>
    {props.listings.map(listing =>
      <div className="ListingList">
        <h2>{listing.title}</h2>
        <h4>{listing.location}</h4>
        <p>Fee per Night: ${listing.price}</p>
        </div>
      )}
  </div>
);

export default Listings;
