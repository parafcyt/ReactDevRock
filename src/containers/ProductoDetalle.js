import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import "../assets/css/children.css";
import Contexto from "../context/Contexto";

export default function ProductoDetalle() {
  const { productoElegido } = useContext(Contexto);
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={productoElegido.img} />
        <Card.Body>
          <Card.Title>{productoElegido.nombre}</Card.Title>
          <Card.Text>{productoElegido.descripcion}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            Precio: ${productoElegido.precio}
          </small>
        </Card.Footer>
      </Card>
    </div>
  );
}
