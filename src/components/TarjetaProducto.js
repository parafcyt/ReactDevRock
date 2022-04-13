import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../assets/css/children.css";
import Contexto from "../context/Contexto";
import { Link, Navigate } from "react-router-dom";

export default function TarjetaProducto(props) {
  //guardo lo que me pasan por props
  const { nombre, descripcion, img, precio, id } = props;
  const { agregarACarrito, detalleProducto } = useContext(Contexto);

  return (
    <div className="general">
      <Card style={{ width: "18rem" }}>
        <div className="div-img">
          <Link to="/producto">
            <Card.Img
              variant="top"
              src={img}
              className="img"
              onClick={() => detalleProducto({ id })}
            />
          </Link>
        </div>

        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
            {descripcion.lenght < 200
              ? descripcion
              : descripcion.substring(0, 200) + "..."}
          </Card.Text>
          <div className="precioTarjeta">
            $ {precio}
            <Button variant="success" onClick={() => agregarACarrito({ id })}>
              {/* al onClick le paso una función flecha para que se ejecute sólo si hacemos click en el botón */}
              Agregar
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
