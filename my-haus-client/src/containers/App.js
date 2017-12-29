import React, { Component } from 'react';
import Listings from './Listings.js';
import './App.css';

const API_URL = process.env.REACT_APP_API_URL;

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      listings: []
    }
  }

  componentDidMount(){
    fetch(`${API_URL}/listings`)
      .then(response => response.json())
      .then(listings => this.setState({ listings }))
  }

  render() {
    return(
      <div className="App">
        <Listings listings={this.state.listings}/>
      </div>
    )
  }
}

export default App;
