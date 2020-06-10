/* eslint-disable react/prop-types */
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Settings from '../settings';

function Layout(props) {
  console.log(props);
  return (
    <Container fluid>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand href="/">
          {Settings.title}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" />
          <Nav>
            <Nav.Link href="/news">News</Nav.Link>
            <Nav.Link href="/calculator">Calculator</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {props.children}
      <footer>
        Server-rendered Shared App
      </footer>
    </Container>
  );
}

export default Layout;
