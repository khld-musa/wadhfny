import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./Nav.css";

const TopBar = () => {

  // const [show, setShow] = useState(false) 

  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  const closeMobileMenu = () => navToggle(false);

  return (
    <nav className="nav">
      <li className="nav__item" onClick={closeMobileMenu}>
        <a href="#intro" className="nav__link">
          <img className='img' src="/images/wadhfny.png" alt="" />
        </a>
      </li>
      <ul className={active}>
        <li className="nav__item" onClick={closeMobileMenu}>
          <a href="#intro" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item" onClick={closeMobileMenu}>
          <a href="#about" className="nav__link">
            About
          </a>
        </li>

        {/* <li className="nav__item">
          <a href="#" className="nav__link">
            Skills
          </a>
        </li> */}
        <li className="nav__item" onClick={closeMobileMenu}>
          <a href="#contact" className="nav__link">
            Contact
          </a>
        </li>
        <li className="nav__item" onClick={closeMobileMenu}>
          <Link to="/login" className="nav__link">
          <Button variant="" size="lg" className="loginbutton me-2">
            Log in
          </Button>
          </Link>
          <Link to="/register" className="nav__link">
          <Button variant="" className="joinus shadow-lg" size="lg">
            Join Now
          </Button>
          </Link>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default TopBar;