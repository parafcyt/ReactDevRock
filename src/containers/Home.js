import React from "react";
//para probar el contexto
import { useContext, useEffect } from "react";
import TarjetaProducto from "../components/TarjetaProducto";
import Contexto from "../context/Contexto";
import "../../src/assets/css/children.css";
import Row from "react-bootstrap/Row";

export default function Home() {
  const { getProductos, productos, productoElegido } = useContext(Contexto);

  useEffect(() => {
    getProductos();
  }, []);

  console.log(productoElegido);

  return (
    <div className="body">
      <div className="container">
        <Row xs={1} md={3} className="g-4">
          {productos.map((unProducto) => {
            return (
              <div key={unProducto.id}>
                {/* el elemento más externo tiene un key único, uso el id */}
                <TarjetaProducto {...unProducto}></TarjetaProducto>
              </div>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
