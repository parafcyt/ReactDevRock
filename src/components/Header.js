import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logodev from "../assets/statics/logo-devrock.png";
import "../assets/css/Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/">
            <img
              alt=""
              src={logodev}
              width="100"
              className="d-inline-block align-center"
            />
          </Link>
          <Navbar.Text>DevRock Store</Navbar.Text>
        </Container>
      </Navbar>
    </div>
  );
}
