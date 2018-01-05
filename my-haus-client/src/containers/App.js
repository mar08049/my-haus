import React, { Component } from 'react';
import Listings from '../components/Listings';
import ListingService from '../services/ListingService';
import AddListing from '../components/AddListing';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      listings: []
    }
  }

  componentDidMount() {
    ListingService.fetchListings().then(listings => this.setState({ listings })
    )
  }

  addListing = listing => {
    ListingService.createListing(listing).then(listing => console.log('Created Listing: ', listing))
    //  ListingService.createListing(listing).then(listing => this.setState({
    //    listings: this.state.listings.concat(listing)
    //  }))
  }

  render() {
    return (
      <div className="App">
        <div className="navbar">
        {/*  <Navbar /> */}
        </div>
        <div className="sidebar">
          <Listings listings={this.state.listings} />
          </div>
        <div className="main-content">
          <AddListing addListing={this.addListing}/>
        </div>
      </div>
    );
  }
}

export default App;
