const productos = require("./data");

const root = {
  // RF1 - Listar todos los productos
  productos: () => productos,

  // RF2 - Buscar producto por ID
  producto: ({ id }) => {
    const encontrado = productos.find((producto) => producto.id === id);

    if (!encontrado) {
      throw new Error("El producto no existe");
    }

    return encontrado;
  },

  // RF3 - Filtrar productos
  filtrarProductos: ({ nombre, categoria, precioMax }) => {
    return productos.filter((producto) => {
      const coincideNombre = nombre
        ? producto.nombre.toLowerCase().includes(nombre.toLowerCase())
        : true;

      const coincideCategoria = categoria
        ? producto.categoria.toLowerCase().includes(categoria.toLowerCase())
        : true;

      const coincidePrecio =
        precioMax !== undefined ? producto.precio <= precioMax : true;

      return coincideNombre && coincideCategoria && coincidePrecio;
    });
  },

  // RF4 - Crear producto
  crearProducto: ({ datos }) => {
    if (datos.precio < 0) {
      throw new Error("El precio no puede ser negativo");
    }

    if (datos.cantidad < 0) {
      throw new Error("La cantidad no puede ser negativa");
    }

    const nuevoId =
      productos.length > 0
        ? Math.max(...productos.map((producto) => producto.id)) + 1
        : 1;

    const nuevoProducto = {
      id: nuevoId,
      ...datos,
    };

    productos.push(nuevoProducto);

    return nuevoProducto;
  },

  // RF5 - Actualizar producto
  actualizarProducto: ({ id, datos }) => {
    const posicion = productos.findIndex((producto) => producto.id === id);

    if (posicion === -1) {
      throw new Error("El producto no existe");
    }

    if (datos.precio < 0) {
      throw new Error("El precio no puede ser negativo");
    }

    if (datos.cantidad < 0) {
      throw new Error("La cantidad no puede ser negativa");
    }

    productos[posicion] = {
      id,
      ...datos,
    };

    return productos[posicion];
  },

  // RF6 - Eliminar producto
  eliminarProducto: ({ id }) => {
    const posicion = productos.findIndex((producto) => producto.id === id);

    if (posicion === -1) {
      throw new Error("El producto no existe");
    }

    const [productoEliminado] = productos.splice(posicion, 1);

    return productoEliminado;
  },
};

module.exports = root;
