import React from 'react'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import "./NavBar.css";
import { Link } from 'react-router-dom'
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const NavBar = () => {

  return (
<header id="header" class="">
<Navbar expand="lg" className="navbar w-100">
      <Container>
        <Navbar.Brand className="" href="#home">
          <img src="images/img/wadhfny.png" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="navlink me-4" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="navlink me-4" href="#">
              Features
            </Nav.Link>
            <Nav.Link className="navlink me-4" href="#">
              Services
            </Nav.Link>
            <Nav.Link className="navlink me-4" href="#">
              How it work
            </Nav.Link>
          </Nav>
          <div variant="" className="btn" size="lg">
            <Link to="/login" className='link-light'>
            LOGIN
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      </header>

    )
}

export default NavBar










