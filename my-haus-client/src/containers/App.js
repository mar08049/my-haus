import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
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
          <NavBar location={this.props.location}/>
          <div className="sidebar">
            <SideBar listings={this.props.listings}/>
          </div>
          <Switch>
            <Route exact path="/" component={ Listings } />
            <Route path="/about" component={ About }/>
            <Route path="/listings/new" component={ ListingForm } />
          </Switch>
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

export default withRouter(connect(mapStateToProps)(App));
