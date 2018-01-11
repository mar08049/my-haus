import React, { Component } from 'react';
import SideBar from '../components/SideBarCard';
import Listings from './Listings';
import './App.css';


class App extends Component {


  render() {
    return (
      <div className="App">
        <div className="navbar">
        <h1>My Haus NavBar</h1>
        </div>
        <div className="sidebar">
          <SideBar  />
        </div>
        <div className="main-content">
          <Listings  />
        </div>
      </div>
    );
  }
}

export default App;
