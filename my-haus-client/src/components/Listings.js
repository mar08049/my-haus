import React from 'react';


const Listings = ({ listings }) => {
  const renderListings = listings.map(listing =>
    <p key={listing.id}>{listing.title}</p>
  )
  return (
    <div>
      {renderListings}
    </div>
  )
}

export default Listings;
