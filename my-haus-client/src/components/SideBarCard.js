import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {increaseLike, setListings  } from '../actions/listings.js';
import '../containers/Listings.css';
import Like from './Like.js';

class SideBar extends Component {

  handleLike = (listing) => {
    const likeInfo = {
      like: listing.like + 1,
      id: listing.id
    }
    this.props.increaseLike(likeInfo)

  }

  render() {
    const sortedListings = this.props.listings.sort(function(a,b){
      return b.like - a.like;
    })

    return (
      <div className="SideBar">
        <h3>Quick View</h3>
        {this.props.listings && sortedListings.map(listing =>
          <div key={listing.id} className="SideBarCard">
            <h5>{listing.title}</h5>
            <p>{listing.location}</p>
            <p>${listing.price}</p>

            <Like handleLike={this.handleLike}
             handleDislike={this.handleDislike}
             listing={listing}
             />
             <button onClick={this.callApi}>Call Api</button>
          </div>
          )}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return ({
    listings: state.listings.listings,
  })
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({
    increaseLike,
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps )(SideBar);
