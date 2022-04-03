import React from "react";
import "../../src/assets/css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../containers/Home";
import Producto from "../containers/Producto";
import Carrito from "../containers/Carrito";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/producto" element={<Producto />}></Route>
          <Route path="/carrito" element={<Carrito />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
