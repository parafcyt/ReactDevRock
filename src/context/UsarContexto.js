import { ProviderContexto } from "./Contexto";
import axios from "axios";
import React, { useState } from "react";

export default function UsarContexto(props) {
  const [estado, setEstado] = useState([]);
  const { children } = props;
  // const estadoInicial={
  //     productos:[],
  //     productosCarrito:[]
  // };
  const getProductos = async () => {
    const res = await axios.get(
      "https://devrockstore-default-rtdb.firebaseio.com/productos.json"
    );
    setEstado(res.data);
    console.log(res.data);
    console.log(estado, "escribo estado");
  };
  //const agregarACarrito;
  //const eliminarDeCarrito;

  return (
    <ProviderContexto
      value={{
        productos: estado,
        //productosCarrito: estadoInicial.productosCarrito,
        getProductos,
        //agregarACarrito,
        //eliminarDeCarrito,
      }}
    >
      {children}
    </ProviderContexto>
  );
}
