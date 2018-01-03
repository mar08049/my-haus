import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink tag={ Link } to="/" active>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={ Link } to="/listings">Listings</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={ Link } to="/users/:id/bookings">Bookings</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default NavBar;
