import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

const NavbarTop = () => (
  <div className="navbartop">
    <Navbar fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <NavLink to="/">Watchlist</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="/tvshows">
            TV SHOWS
          </NavItem>
          <NavItem eventKey={2} href="/movies">
              MOVIES
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default NavbarTop;
