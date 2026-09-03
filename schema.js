const { buildSchema } = require("graphql");

const schema = buildSchema(`

    type Producto {
        id: Int!
        nombre: String!
        descripcion: String!
        precio: Float!
        cantidad: Int!
        categoria: String!
    }

    input ProductoInput {
        nombre: String!
        descripcion: String!
        precio: Float!
        cantidad: Int!
        categoria: String!
    }

    type Query {

        productos: [Producto!]!

        producto(id: Int!): Producto

        filtrarProductos(
            nombre: String
            categoria: String
            precioMax: Float
        ): [Producto!]!
    }

    type Mutation {

        crearProducto(
            datos: ProductoInput!
        ): Producto!

        actualizarProducto(
            id: Int!
            datos: ProductoInput!
        ): Producto

        eliminarProducto(
            id: Int!
        ): Producto
    }
`);

module.exports = schema;
