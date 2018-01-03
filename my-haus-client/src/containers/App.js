import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
    <div>
      <h3>Your best source for vacation rentals in Germany</h3>
    </div>
  )
  }
}

export default App;


// const API_URL = "http://localhost:3001/api";
//
// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       listings: []
//     }
//   }
//   componentDidMount(){
//     fetch(`${API_URL}/listings`, {
//
//     })
//       .then(response => response.json())
//       .then(listings => this.setState({ listings }))
//   }
//   render() {
//     return(
//       <div className="App">
//         <Listings listings={this.state.listings}/>
//       </div>
//     )
//   }
// }
