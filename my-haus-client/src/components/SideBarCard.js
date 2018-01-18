import React from 'react';
import '../containers/Listings.css';



const SideBar = (props) => (

      <div className="SideBar">
        <h3>Quick View</h3>
        {props.listings && props.listings.map(listing =>
          <div key={listing.id} className="SideBarCard">
            <h5>{listing.title}</h5>
            <p>{listing.location}</p>
            <p>${listing.price}</p>
            <button className="SideButton" onClick={() => this.props.handleOnClick(listing)}>Details</button>
          </div>
          )}
      </div>
    );

export default SideBar;
