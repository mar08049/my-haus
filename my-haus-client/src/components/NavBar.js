import React from 'react';
import ReactDOM from 'react-dom';

const Navbar = () => (
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
)

export default Navbar;
