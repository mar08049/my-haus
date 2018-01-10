import React from 'react';
import './Listings.css';

const Listings = (props) => (
      <div className="ListingContainer">
        <h1>Listings</h1>
        {props.listings.map(listing =>
          <div key={listing.id} className="ListingCard">
            <h2>{listing.title}</h2>
            <p>{listing.location}</p>
            <p>${listing.price}</p>
            <img src={listing.img_url} alt={listing.title} />
            <p>{listing.description}</p>
            <p>Presented by: {listing.agent_name}</p>
            <p>Phone: {listing.agent_number}</p>
            <p>Email: {listing.agent_email}</p>
          </div>
          )}
      </div>
    );


export default Listings;
