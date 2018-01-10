import React, { Component } from 'react';
import SideBar from '../components/SideBarCard';
import Listings from './Listings';
import './App.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      listings: []
    }
  }

  componentDidMount() {
    fetch(`${API_URL}/listings`)
      .then(response => response.json())
      .then(listings => this.setState({ listings }))

  }



  render() {
    return (
      <div className="App">
        <div className="navbar">
        <h1>My Haus NavBar</h1>
        </div>
        <div className="sidebar">
          <SideBar listings={this.state.listings} />
        </div>
        <div className="main-content">
          <Listings listings={this.state.listings} />
        </div>
      </div>
    );
  }
}

export default App;
