import React from "react";
import "../../src/assets/css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../containers/Home";
import Carrito from "../containers/Carrito";
import UsarContexto from "../context/UsarContexto";
import ProductoDetalle from "../containers/ProductoDetalle";

export default function App() {
  return (
    <BrowserRouter>
      <UsarContexto>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/producto" element={<ProductoDetalle />}></Route>
            <Route path="/carrito" element={<Carrito />}></Route>
            {/* <Route path="*" element={<Navigate to="/" />}></Route> */}
            {/* Comentado porque renderiza la pagina cuando navega */}
          </Routes>
        </Layout>
      </UsarContexto>
    </BrowserRouter>
  );
}
