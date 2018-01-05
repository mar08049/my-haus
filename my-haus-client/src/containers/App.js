import React, { Component } from 'react';
import Listings from '../components/Listings';
import ListingService from '../services/ListingService';
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
  render() {
    console.log(this.state.listings)
    return (
      <div className="App">
        <div className="navbar">
        {/*  <Navbar /> */}
        </div>
        <div className="sidebar">
          <Listings listings={this.state.listings}/>
          </div>
        <div className="main-content">
        {/*  <Listing /> */}
        </div>
      </div>
    );
  }
}

export default App;
