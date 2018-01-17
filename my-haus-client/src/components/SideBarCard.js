import React from 'react';
import '../containers/Listings.css';



const SideBar = (props) => (

      <div className="SideBar">
        <h2>Quick View</h2>
        {props.listings && props.listings.map(listing =>
          <div key={listing.id} className="SideBarCard">
            <h3>{listing.title}</h3>
            <p>{listing.location}</p>
            <p>${listing.price}</p>
            <button className="SideButton" onClick={() => this.props.handleOnClick(listing)}>Details</button>
          </div>
          )}
      </div>
    );

export default SideBar;
