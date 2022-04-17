import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import tacho from "../assets/statics/bin.png";

import { useContext } from "react";
import Contexto from "../context/Contexto";

export default function Carrito() {
  const {
    carrito,
    eliminarDeCarrito,
    eliminarUnoDeCarrito,
    sumarCantidadACarrito,
  } = useContext(Contexto);

  const totalGeneral = () => {
    let total = 0;

    if (carrito.length > 0) {
      total = carrito.reduce((acu, valorActual) => {
        return acu + valorActual.cantidad * valorActual.precio;
      }, 0);
      console.log(total);
      return total;
    }
  };

  return (
    <div>
      <ListGroup>
        {carrito.map((unProducto) => {
          return (
            <ListGroup.Item key={unProducto.id}>
              {/* el elemento más externo tiene un key único, uso el id */}
              <div className="ms-2 me-auto">
                <div className="fw-bold">{unProducto.nombre}</div>
                Precio Unitario: {unProducto.precio} Cantidad:{" "}
                {unProducto.cantidad} Total:{" "}
                {unProducto.cantidad * unProducto.precio}
                <Button
                  variant="outline-danger"
                  onClick={() => eliminarUnoDeCarrito(unProducto.id)}
                  size="sm"
                >
                  -
                </Button>{" "}
                <Button
                  variant="outline-success"
                  onClick={() => sumarCantidadACarrito(unProducto.id)}
                  size="sm"
                >
                  +
                </Button>{" "}
                <img
                  alt=""
                  src={tacho}
                  width="30"
                  className="d-inline-block align-center"
                  onClick={() => eliminarDeCarrito(unProducto.id)}
                />
              </div>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
      <div className="fw-bold">Total del Carrito: {totalGeneral()}</div>
    </div>
  );
}
