import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
  border: 'solid',
  borderColor: 'black',
  borderWidth: '2px'
}

const NavBar = (props) =>
<div className="navbar">
  <div>
    <NavLink
      to="/"
      exact
      style={link}
      activeStyle={{
        background: 'black'
      }}
    >Home</NavLink>
    <NavLink
      to="/about"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >About</NavLink>
    <NavLink
      to="/listings/new"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Add Listing</NavLink>
  </div>
  <h1>MY HAUS</h1>
</div>
  ;

export const Home = () => <h1>My Haus</h1>;

export const allListings = () => <h1>Listings</h1>;

export const NewListing = () => <h1>Add Listing</h1>;

export default NavBar;
