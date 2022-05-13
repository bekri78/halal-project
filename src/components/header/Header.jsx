import React, { useState } from "react";
import './Header.css'
 import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap/";
 
 
const navigation = {
    font: "600 14px/30px Montserrat,sans-serif",
    color: "#fff",
    textTransform: "uppercase",
    position: "relative",
    padding: "8px",
    cursor: "pointer",
    transition: "all .2s linear",
  };
export default function NavBare(props) {
    const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    let y = window.scrollY;
    if (y >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
  
    <Navbar
    className={navbar ? "navbar active" : "navbar"}
    collapseOnSelect
    expand="sm"
    fixed="top"
  >
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" expand="lg">
      <Nav className="ml-auto  ">
        <Link to="./map"  style={navigation}>
          MAP
        </Link>
        <Link to="./"  style={navigation}>
          Portfolio
        </Link>
        <Link to="./"  style={navigation}>
          Skill
        </Link>

        <Link to="./"  style={navigation}>
          A propos
        </Link>
        <NavDropdown title="Theme" id="collasible-nav-dropdown">
          <NavDropdown.Item
            onClick={() => props.changeWord("light")}
            id="changeTheme"
          >
            Light
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={() => props.changeWord("dark")}
            id="changeTheme"
          >
            Sombre
          </NavDropdown.Item>
        </NavDropdown>
        <Link to="./" style={navigation}>
          Contact
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  
  )
}
