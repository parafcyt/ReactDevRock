import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container";
import logodev from "../assets/statics/logo-devrock.png";
import carritoImg from "../assets/statics/empty-cart.png";
import "../assets/css/Header.css";
import { Link } from "react-router-dom";
import Contexto from "../context/Contexto";

export default function Header() {
  const { totalProdEnCarrito } = useContext(Contexto);

  const total = totalProdEnCarrito();
  console.log(total);

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
          <Link to="/carrito">
            <img
              alt=""
              src={carritoImg}
              width="40"
              className="d-inline-block align-center"
            />
          </Link>

          <Badge bg="success" pill>
            {total}
          </Badge>
        </Container>
      </Navbar>
    </div>
  );
}
