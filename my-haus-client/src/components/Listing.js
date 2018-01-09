import React, { Component } from 'react';

class Listing extends Component {

  handleOnClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_LISTING',
      id: this.props.id,
    });
  }
  render() {
    return (
      <li>
        {this.props.title}
        {this.props.location}
        <button onClick={this.handleOnClick} />
      </li>
    );
  }
};

export default Listing;
