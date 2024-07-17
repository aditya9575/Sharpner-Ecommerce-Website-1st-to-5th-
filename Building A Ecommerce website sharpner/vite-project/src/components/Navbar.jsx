import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import { useContext } from "react";
import { myContext } from "./GlobalContext";

const NavbarComponent = () => {

    const {totalItems} = useContext(myContext)


  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#store ">Store</Nav.Link>
            <Nav.Link href="#about ">About</Nav.Link> 
            <Nav.Link href="#Cart">🛒{totalItems}</Nav.Link>  
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
