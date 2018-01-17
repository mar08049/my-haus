import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux';

import ListingForm from './ListingForm';
import SideBar from '../components/SideBarCard';
import NavBar from '../components/NavBar';
import About from '../components/About';
import Listings from './Listings';
import Footer from '../components/Footer';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <NavBar history={this.props.history}/>
          <Switch>
            <Route exact path="/" />
            <Route path="/about" component={About}/>
            <Route path="/listings/new" component={ListingForm}/>
          </Switch>
          <h1>MY HAUS</h1>
        </div>
        <div className="sidebar">
          <SideBar  listings={this.props.listings}/>
        </div>
        <div className="main-content">
          <ListingForm />
          <Listings  />

        </div>
          <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    loading: state.listings.loading,
    listings: state.listings.listings
  })
}

export default connect(mapStateToProps)(App);
