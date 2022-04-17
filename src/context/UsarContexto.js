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
  const agregarACarrito = (unObjetoId) => {
    console.log("entro a agregar a carrito el producto id: " + unObjetoId.id);
    dispatch({ type: "AGREGAR_A_CARRITO", payload: unObjetoId.id });
    console.log(
      "El objeto guardado en carrito antes del dispatch " + unObjetoId.id
    );
  };

  const detalleProducto = (unObjetoId) => {
    console.log("IMPRIMO unItem desde detalleProducto" + unObjetoId);
    console.log("entro a detalle Producto del item:" + unObjetoId.id);
    dispatch({ type: "DETALLE_PRODUCTO", payload: unObjetoId.id });
  };

  const totalProdEnCarrito = () => {
    let totalProd;

    if (state.carrito.length > 0) {
      totalProd = state.carrito.reduce((acu, valorActual) => {
        return acu + valorActual.cantidad;
      }, 0);
    }
    console.log(totalProd);

    return totalProd;
  };

  const eliminarDeCarrito = (unId) => {
    dispatch({ type: "ELIMINAR_DE_CARRITO", payload: unId });
  };

  const eliminarUnoDeCarrito = (unId) => {
    dispatch({ type: "ELIMINAR_UNO_DE_CARRITO", payload: unId });
  };

  const sumarCantidadACarrito = (unId) => {
    dispatch({ type: "SUMAR_CANTIDAD_A_CARRITO", payload: unId });
  };

  return (
    <Contexto.Provider
      value={{
        productos: state.productos,
        productoElegido: state.productoElegido,
        carrito: state.carrito,
        //productosCarrito: estadoInicial.productosCarrito,
        detalleProducto,
        getProductos,
        agregarACarrito,
        eliminarDeCarrito,
        totalProdEnCarrito,
        eliminarUnoDeCarrito,
        sumarCantidadACarrito,
      }}
    >
      {children}
    </Contexto.Provider>
  );
}
