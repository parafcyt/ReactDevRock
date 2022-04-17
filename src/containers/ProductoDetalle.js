import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../assets/css/children.css";
import Contexto from "../context/Contexto";

export default function ProductoDetalle() {
  const { productoElegido, agregarACarrito } = useContext(Contexto);
  const id = productoElegido.id;
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
          <Button variant="success" onClick={() => agregarACarrito({ id })}>
            {/* al onClick le paso una función flecha para que se ejecute sólo si hacemos click en el botón */}
            Agregar
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
}
