import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

export const NavBar = () =>
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
      to="/listings"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >View Listings</NavLink>
    <NavLink
      to="/listings/new"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Add Listing</NavLink>
  </div>;

export const Home = () => <h1>My Haus</h1>;

export const allListings = () => <h1>Listings</h1>;

export const NewListing = () => <h1>Add Listing</h1>;

export default NavBar;
