import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

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
          <NavBar />
          <Switch>
            <Route exact path="/" />
            <Route path="/about" component={About}/>
            <Route path="/listings/new" component={ListingForm}/>
          </Switch>
          <h1>MY HAUS</h1>
        </div>
        <div className="sidebar">
          <SideBar  />
        </div>
        <div className="main-content">
          <Listings  />
        </div>
          <Footer />
      </div>
    );
  }
}

export default App;
