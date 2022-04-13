import Contexto from "./Contexto";
import axios from "axios";
//import React, { useState } from "react";

//importo para reducer
import reducer, { initialState } from "../reducers/reducer";
import { useReducer } from "react";

export default function UsarContexto(props) {
  //const [estado, setEstado] = useState([]);
  const { children } = props;
  // const estadoInicial={
  //     productos:[],
  //     productosCarrito:[]
  // };

  //reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProductos = async () => {
    const res = await axios.get(
      "https://devrockstore-default-rtdb.firebaseio.com/productos.json"
    );
    //setEstado(res.data);
    //console.log(res.data);
    dispatch({ type: "CARGAR_PRODUCTOS", payload: res.data });
    //console.log(estado, "escribo estado");
  };
  const agregarACarrito = (unItem) => {
    console.log("entro a agregar a carrito el producto id: " + unItem.id);
    dispatch({ type: "AGREGAR_A_CARRITO", payload: unItem.id });
  };

  const detalleProducto = (unItem) => {
    console.log("entro a detalle Producto del item:" + unItem.id);
    dispatch({ type: "DETALLE_PRODUCTO", payload: unItem.id });
  };

  //const eliminarDeCarrito;

  return (
    <Contexto.Provider
      value={{
        productos: state.productos,
        productoElegido: state.productoElegido,
        //productosCarrito: estadoInicial.productosCarrito,
        detalleProducto,
        getProductos,
        agregarACarrito,
        //eliminarDeCarrito,
      }}
    >
      {children}
    </Contexto.Provider>
  );
}
