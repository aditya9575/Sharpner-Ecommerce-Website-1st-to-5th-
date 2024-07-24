import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import { useContext } from "react";
import { myContext } from "./GlobalContext";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  const { totalItems } = useContext(myContext);

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/store" className="nav-link">Store</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/cart" className="nav-link">🛒{totalItems}</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
