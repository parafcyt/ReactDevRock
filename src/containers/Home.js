import React from "react";
//para probar el contexto
import { useContext, useEffect } from "react";
import ProductoCarrito from "../components/ProductoCarrito";
import Contexto from "../context/Contexto";
import "../../src/assets/css/children.css";
import Row from "react-bootstrap/Row";

export default function Home() {
  const { getProductos, productos } = useContext(Contexto);

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <div className="container">
      <Row xs={1} md={4} className="g-4">
        {productos.map((unProducto) => {
          return (
            <div>
              <ProductoCarrito {...unProducto}></ProductoCarrito>
            </div>
          );
        })}
      </Row>
      {/* <div>
        {productos.map((unProducto) => {
          return (
            <div>
              <ProductoCarrito {...unProducto}></ProductoCarrito>
            </div>
          );
        })}
        ;
      </div> */}
      <button
        onClick={() => {
          getProductos();
        }}
      >
        Boton
      </button>
    </div>
  );
}
