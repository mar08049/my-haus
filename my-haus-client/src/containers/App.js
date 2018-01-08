import React, { Component } from 'react';
import Listings from '../components/Listings';
import ListingService from '../services/ListingService';
import AddListing from '../components/AddListing';

import './App.css';

class App extends Component {

  componentDidMount() {
    // ListingService.fetchListings().then(listings =>
    //   this.setState({ listings })
    // )
  }

  addListing = listing => {
      ListingService.createListing(listing).then(listing => this.setState({
        listings: this.state.listings.concat(listing)
      }))
  }

  render() {
    return (
      <div className="App">
        <div className="navbar">
          <h1> My Haus NavBar </h1>
        </div>
        <div className="sidebar">
          <Listings  />
          </div>
        <div className="main-content">
          <AddListing addListing={this.addListing}/>

        </div>
      </div>
    );
  }
}

export default App;
