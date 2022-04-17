//TYPES, si va a haber varios reducers, conviene hacer un archivo sólo para types, para reutilizarlos
const DETALLE_PRODUCTO = "DETALLE_PRODUCTO";
const AGREGAR_A_CARRITO = "AGREGAR_A_CARRITO";
const ELIMINAR_DE_CARRITO = "ELIMINAR_DE_CARRITO";
const ELIMINAR_UNO_DE_CARRITO = "ELIMINAR_UNO_DE_CARRITO";
const SUMAR_CANTIDAD_A_CARRITO = "SUMAR_CANTIDAD_A_CARRITO";

const initialState = {
  productos: [],
  carrito: [],
  // productoElegido: [{}],
  productoElegido: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "DETALLE_PRODUCTO":
      return {
        ...state,
        productoElegido: state.productos.find(
          (unProducto) => unProducto.id === action.payload
          //recorro productos y donde el id sea = al pasado por el payload lo guardo entero en productoElegido
        ),
      };

    case "CARGAR_PRODUCTOS":
      return {
        ...state,
        productos: action.payload,
      };

    case "AGREGAR_A_CARRITO": {
      const productoCompleto = state.productos.find(
        (unProducto) => unProducto.id === action.payload
      );
      console.log(productoCompleto + "producto completo");

      console.log("imprimo action.payload  " + action.payload);

      console.log(state.carrito + "carrito hasta ahora");

      const existeEnCarrito = state.carrito.find(
        (unProducto) => unProducto.id === action.payload
      );

      console.log(existeEnCarrito + "imprimi existeEncarrito");
      return existeEnCarrito
        ? {
            ...state,
            carrito: state.carrito.map((unProducto) =>
              unProducto.id === productoCompleto.id
                ? { ...unProducto, cantidad: unProducto.cantidad + 1 }
                : unProducto
            ),
          }
        : {
            ...state,
            carrito: [
              ...state.carrito,
              {
                id: productoCompleto.id,
                nombre: productoCompleto.nombre,
                cantidad: 1,
                precio: productoCompleto.precio,
              },
            ],
          };
    }

    case "ELIMINAR_DE_CARRITO":
      return {
        ...state,
        carrito: state.carrito.filter((unItem) => unItem.id !== action.payload),
      };

    case "ELIMINAR_UNO_DE_CARRITO": {
      //lo busco en el carrito y lo guardo para modificarle la cantidad
      const productoAModificar = state.carrito.find(
        (producto) => producto.id === action.payload
      );
      return productoAModificar.cantidad > 1
        ? {
            ...state,
            carrito: state.carrito.map((unItem) =>
              unItem.id === action.payload
                ? { ...unItem, cantidad: unItem.cantidad - 1 }
                : unItem
            ),
          }
        : {
            ...state,
            carrito: state.carrito.filter(
              (unItem) => unItem.id !== action.payload
            ),
          };
    }

    case "SUMAR_CANTIDAD_A_CARRITO":
      return {
        ...state,
        carrito: state.carrito.map((unItem) =>
          unItem.id === action.payload
            ? { ...unItem, cantidad: unItem.cantidad + 1 }
            : unItem
        ),
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
  ELIMINAR_UNO_DE_CARRITO,
  SUMAR_CANTIDAD_A_CARRITO,
};

export default reducer;
