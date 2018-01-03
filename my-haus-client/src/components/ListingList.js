import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const ListingList = ({ listings }) => (
  <div key={listing.id} className="ListingList">
    <h3>{listing.name}</h3>
    <h4>{listing.location}</h4>
    <p>{listing.description}</p>
    <p>Price per Night: ${listing.price}</p>
  </div>
)

export default ListingList;
