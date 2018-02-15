import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {increaseLike , decreaseLike } from '../actions/listings.js';

import '../containers/Listings.css';
import Like from './Like.js';

class SideBar extends Component {

  handleLike = () => {
    const likeInfo = {
      like: this.props.listing.like + 1,
      id:this.props.listing.id
    }
    this.props.increaseLike(likeInfo)
  }

  handleDislike = () => {
    const dislikeInfo = {
      like: this.props.listing.like - 1,
      id: this.props.listing.id
    }
    if (this.props.listing.like > 0) {
      this.props.decreaseLike(dislikeInfo);
    }
  }

  render() {
    return (
      <div className="SideBar">
        <h3>Quick View</h3>
        {this.props.listings && this.props.listings.map(listing =>
          <div key={listing.id} className="SideBarCard">
            <h5>{listing.title}</h5>
            <p>{listing.location}</p>
            <p>${listing.price}</p>

            <Like handleLike={this.handleLike}
             handleDislike={this.handleDislike}
             />
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
    decreaseLike
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps )(SideBar);
