import React, { Component } from 'react';
import SideBar from '../components/SideBarCard';
import NavBar from '../components/NavBar';
import Listings from './Listings';
import Footer from '../components/Footer';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <NavBar />
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
