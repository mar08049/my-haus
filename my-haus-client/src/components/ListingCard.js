import React from 'react';
import ScrollUpButton from "react-scroll-up-button";

const ListingCard = ({ listing }) => (
  <div key={listing.id} className="ListingCard">
    <h3>{listing.title}</h3>
    <p>{listing.location}</p>
    <img className="ListingImage" src={listing.img_url} alt={listing.title} />
    <p>${listing.price}</p>
    <p>{listing.description}</p>
    <p>Presented By: {listing.agent_name}</p>
    <p>Email: {listing.agent_email}</p>
    <button className="Button" onClick={() => this.props.handleOnClick(listing)}>Edit</button>
    <button className="Button" onClick={() => this.props.handleOnClick(listing)}>Delete</button>
    <ScrollUpButton />
  </div>
)

export default ListingCard;
