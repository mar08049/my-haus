import React, { Component } from 'react';
import Listings from '../components/Listings';
import ListingService from '../services/ListingService';
import AddListing from '../components/AddListing';
import { NavBar, Home, NewListing, allListings } from '../components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

class App extends Component {

  componentDidMount() {
     ListingService.fetchListings().then(listings =>
       this.setState({ listings })
     )
  }

  addListing = listing => {
      ListingService.createListing(listing).then(listing => this.setState({
        listings: this.state.listings.concat(listing)
      }))
  }

  render() {
    return (
      <div className="App">
          <Router>
            <div>
              <NavBar />
              <Route exact path="/" render={Home} />
              <Route exact path="/listings" render={allListings} />
              <Route exact path="/listings/new" render={NewListing} />
            </div>
          </Router>
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
