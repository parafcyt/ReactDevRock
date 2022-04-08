import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logodev from "../assets/statics/logo-devrock.png";
import "../assets/css/Header.css";

export default function Header() {
  return (
    <div className="header">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logodev}
              width="100"
              className="d-inline-block align-center"
            />
            DevRock Store
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}
