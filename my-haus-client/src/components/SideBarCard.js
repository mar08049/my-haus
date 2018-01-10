import React from 'react';
import '../containers/Listings.css';

const SideBar = (props) => (
      <div className="SideBar">
        <h2>Quick View</h2>
        {props.listings.map(listing =>
          <div key={listing.id} className="SideBarCard">
            <h3>{listing.title}</h3>
            <p>{listing.location}</p>
            <p>${listing.price}</p>
          </div>
          )}
      </div>
    );

export default SideBar;
