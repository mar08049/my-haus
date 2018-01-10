import React from 'react';

const ListingCard = ({ listing }) => (
  <div key={listing.id} className="ListingCard">
    <h3>{listing.title}</h3>
    <p>{listing.location}</p>
    <img className="ListingImage" src={listing.img_url} alt={listing.title} />
    <p>${listing.price}</p>
    <p>{listing.description}</p>
    <p>Presented By: {listing.agent_name}</p>
    <p>Phone: {listing.agent_number}</p>
    <p>Email: {listing.agent_email}</p>
  </div>
)

export default ListingCard;
