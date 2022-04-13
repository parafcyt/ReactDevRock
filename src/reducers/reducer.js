//TYPES, si va a haber varios reducers, conviene hacer un archivo sólo para types, para reutilizarlos
const DETALLE_PRODUCTO = "DETALLE_PRODUCTO";
const AGREGAR_A_CARRITO = "AGREGAR_A_CARRITO";
const ELIMINAR_DE_CARRITO = "ELIMINAR_DE_CARRITO";

const initialState = {
  productos: [],
  carrito: [{ id: -1, cantidad: 0 }],
  productoElegido: [{}],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "DETALLE_PRODUCTO":
      return {
        ...state,
        productoElegido: state.productos.find(
          (unProducto) => unProducto.id === action.payload
        ),
      };

    case "CARGAR_PRODUCTOS":
      return {
        ...state,
        productos: action.payload,
      };

    default:
      return state;
  }
};

export {
  initialState,
  DETALLE_PRODUCTO,
  AGREGAR_A_CARRITO,
  ELIMINAR_DE_CARRITO,
};

export default reducer;
