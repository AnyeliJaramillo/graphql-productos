# API GraphQL para Gestión de Productos

Proyecto desarrollado con **Node.js, Express y GraphQL** para gestionar productos almacenados temporalmente en un array en memoria RAM.

La aplicación permite realizar consultas, filtros y operaciones CRUD sobre productos sin utilizar una base de datos.

## Autores

- Anyeli Jaramillo
- Johan Serrano

---

## Objetivo del proyecto

Desarrollar una API GraphQL que permita gestionar productos almacenados temporalmente en memoria RAM.

La aplicación permite:

- Consultar todos los productos.
- Buscar productos por identificador.
- Filtrar productos.
- Registrar nuevos productos.
- Actualizar productos existentes.
- Eliminar productos.
- Validar los datos ingresados.
- Informar cuando un producto no existe.

---

## Tecnologías utilizadas

- Node.js
- JavaScript
- Express
- GraphQL
- express-graphql
- GraphiQL
- Git
- GitHub

---

## Datos de los productos

Cada producto contiene los siguientes campos:

| Campo | Descripción |
|---|---|
| `id` | Identificador único entero |
| `nombre` | Nombre del producto |
| `descripcion` | Descripción breve del producto |
| `precio` | Precio del producto |
| `cantidad` | Cantidad de unidades disponibles |
| `categoria` | Categoría a la que pertenece el producto |

Ejemplo:

```json
{
  "id": 1,
  "nombre": "Mouse",
  "descripcion": "Mouse inalambrico",
  "precio": 50000,
  "cantidad": 10,
  "categoria": "Perifericos"
}
```

---

# Funcionalidades

La API implementa los siguientes requerimientos:

### RF1. Listar productos

Permite consultar todos los productos almacenados en el array.

### RF2. Buscar producto por ID

Permite encontrar un producto específico utilizando su identificador.

### RF3. Filtrar productos

Permite filtrar productos utilizando:

- Nombre.
- Categoría.
- Precio máximo.

Los filtros pueden utilizarse individualmente o combinarse.

### RF4. Crear producto

Permite registrar un nuevo producto y generar automáticamente su identificador.

### RF5. Actualizar producto

Permite modificar los datos de un producto existente.

### RF6. Eliminar producto

Permite eliminar un producto utilizando su identificador.

### RF7. Validaciones

La aplicación evita registrar o actualizar productos cuando:

- El precio es negativo.
- La cantidad es negativa.

### RF8. Producto inexistente

Si se intenta buscar, actualizar o eliminar un producto que no existe, la API informa que el producto solicitado no fue encontrado.

---

# Estructura del proyecto

El proyecto está organizado de la siguiente manera:

```text
guia2-productos/
│
├── data.js
├── schema.js
├── resolvers.js
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

### `data.js`

Contiene el array de productos utilizado como fuente temporal de datos.

### `schema.js`

Contiene los tipos, inputs, queries y mutations disponibles en GraphQL.

### `resolvers.js`

Contiene la lógica utilizada para consultar, filtrar, crear, actualizar y eliminar productos.

### `index.js`

Configura Express, GraphQL y el servidor local.

### `package.json`

Contiene la información del proyecto y las dependencias necesarias.

---

# Requisitos para ejecutar el proyecto

Antes de instalar el proyecto es necesario tener instalado:

- Node.js
- npm
- Git, en caso de descargar el proyecto mediante Git

Para comprobar que Node.js está instalado se puede ejecutar:

```bash
node --version
```

Para comprobar npm:

```bash
npm --version
```

Si ambos comandos muestran una versión, el equipo está preparado para ejecutar el proyecto.

---

# Instalación local

## Opción 1. Clonar el proyecto desde GitHub

Abrir una terminal o PowerShell y ubicarse en la carpeta donde se desea guardar el proyecto.

Por ejemplo:

```powershell
cd D:\Proyectos
```

Luego clonar el repositorio:

```bash
git clone URL_DEL_REPOSITORIO
```

Ejemplo:

```bash
git clone https://github.com/USUARIO/graphql-productos.git
```

Después ingresar a la carpeta:

```bash
cd graphql-productos
```

---

## Opción 2. Descargar el proyecto como ZIP

También se puede ingresar al repositorio de GitHub y seleccionar:

```text
Code → Download ZIP
```

Después:

1. Extraer el archivo ZIP.
2. Abrir la carpeta extraída.
3. Abrir esa carpeta con Visual Studio Code.
4. Abrir una terminal desde VS Code.

---

# Instalación de dependencias

Una vez abierto el proyecto en Visual Studio Code, abrir:

```text
Terminal → New Terminal
```

La terminal debe encontrarse dentro de la carpeta del proyecto.

Ejemplo:

```text
PS D:\Proyectos\guia2-productos>
```

Ejecutar:

```bash
npm install
```

Este comando instala automáticamente las dependencias registradas en `package.json`.

Las principales dependencias del proyecto son:

```text
express
express-graphql
graphql
```

Si se desea instalar manualmente, también puede utilizarse:

```bash
npm install express express-graphql graphql
```

---

# Ejecutar el proyecto

Después de instalar las dependencias, ejecutar:

```bash
node index.js
```

Si el servidor se inicia correctamente aparecerá:

```text
Servidor disponible en http://localhost:4000/graphql
```

---

# Acceso local a GraphQL

Abrir un navegador web e ingresar a:

```text
http://localhost:4000/graphql
```

La dirección corresponde al servidor ejecutándose de manera local en el equipo.

```text
localhost
```

significa que la aplicación está funcionando en el mismo computador donde se ejecutó Node.js.

El puerto utilizado es:

```text
4000
```

Por lo tanto, la dirección completa es:

```text
http://localhost:4000/graphql
```

Desde esta interfaz se pueden ejecutar las queries y mutations utilizando GraphiQL.

---

# Pruebas en GraphiQL

## 1. Listar todos los productos

```graphql
query {
  productos {
    id
    nombre
    descripcion
    precio
    cantidad
    categoria
  }
}
```

---

## 2. Buscar un producto por ID

```graphql
query {
  producto(id: 2) {
    id
    nombre
    descripcion
    precio
    cantidad
    categoria
  }
}
```

---

## 3. Buscar un producto inexistente

```graphql
query {
  producto(id: 100) {
    id
    nombre
  }
}
```

El sistema debe informar:

```text
El producto no existe
```

---

# Filtros

## Filtrar por nombre

```graphql
query {
  filtrarProductos(nombre: "MOUSE") {
    id
    nombre
    precio
  }
}
```

La búsqueda no diferencia entre mayúsculas y minúsculas.

---

## Filtrar por categoría

```graphql
query {
  filtrarProductos(categoria: "Perifericos") {
    id
    nombre
    categoria
  }
}
```

---

## Filtrar por precio máximo

```graphql
query {
  filtrarProductos(precioMax: 150000) {
    id
    nombre
    precio
  }
}
```

---

## Combinar filtros

```graphql
query {
  filtrarProductos(
    categoria: "Perifericos"
    precioMax: 100000
  ) {
    id
    nombre
    precio
    categoria
  }
}
```

---

# Crear un producto

Para registrar un nuevo producto:

```graphql
mutation {
  crearProducto(
    datos: {
      nombre: "Audifonos"
      descripcion: "Audifonos con microfono"
      precio: 85000
      cantidad: 8
      categoria: "Audio"
    }
  ) {
    id
    nombre
    descripcion
    precio
    cantidad
    categoria
  }
}
```

El identificador es generado automáticamente.

---

# Actualizar un producto

```graphql
mutation {
  actualizarProducto(
    id: 2
    datos: {
      nombre: "Teclado Gamer"
      descripcion: "Teclado mecanico RGB"
      precio: 150000
      cantidad: 7
      categoria: "Perifericos"
    }
  ) {
    id
    nombre
    descripcion
    precio
    cantidad
    categoria
  }
}
```

---

# Eliminar un producto

```graphql
mutation {
  eliminarProducto(id: 1) {
    id
    nombre
  }
}
```

---

# Validación de precio

Si se intenta registrar un precio negativo:

```graphql
mutation {
  crearProducto(
    datos: {
      nombre: "Producto prueba"
      descripcion: "Prueba de validacion"
      precio: -5000
      cantidad: 2
      categoria: "Prueba"
    }
  ) {
    id
    nombre
  }
}
```

La API responde:

```text
El precio no puede ser negativo
```

---

# Validación de cantidad

Si se intenta registrar una cantidad negativa:

```graphql
mutation {
  crearProducto(
    datos: {
      nombre: "Producto prueba"
      descripcion: "Prueba de validacion"
      precio: 5000
      cantidad: -5
      categoria: "Prueba"
    }
  ) {
    id
    nombre
  }
}
```

La API responde:

```text
La cantidad no puede ser negativa
```

---

# Almacenamiento en memoria RAM

Este proyecto no utiliza MySQL, archivos, localStorage ni otra forma de persistencia permanente.

Los productos se almacenan dentro de un array de JavaScript.

Por esta razón, las operaciones de crear, actualizar y eliminar modifican los datos solamente mientras el servidor está ejecutándose.

Por ejemplo, durante la ejecución se puede agregar:

```text
4 - Audifonos
```

Sin embargo, si el servidor se detiene:

```text
Ctrl + C
```

y posteriormente se vuelve a iniciar:

```bash
node index.js
```

los cambios realizados anteriormente desaparecen.

Esto ocurre porque `data.js` vuelve a ejecutarse y carga nuevamente los productos definidos inicialmente.

Los datos originales vuelven a ser:

```text
1 - Mouse
2 - Teclado
3 - Monitor
```

Para conservar los cambios de manera permanente sería necesario utilizar una base de datos como MySQL.

---

# Detener el servidor

Para detener el servidor desde la terminal utilizar:

```text
Ctrl + C
```

Para iniciarlo nuevamente:

```bash
node index.js
```

---

# Posibles errores

## Error: Cannot find module

Si aparece un error parecido a:

```text
Cannot find module 'express'
```

ejecutar:

```bash
npm install
```

---

## El puerto 4000 está ocupado

Si aparece:

```text
EADDRINUSE
```

significa que existe otro servidor utilizando el puerto 4000.

Se puede detener el proceso anterior utilizando:

```text
Ctrl + C
```

y posteriormente volver a ejecutar:

```bash
node index.js
```

---

## GraphQL no reconoce una Query o Mutation

Verificar que:

- La operación exista en `schema.js`.
- El resolver exista en `resolvers.js`.
- Los nombres sean exactamente iguales.
- Los archivos estén guardados.
- El servidor haya sido reiniciado después de modificar el código.

Para reiniciar:

```text
Ctrl + C
```

y luego:

```bash
node index.js
```

---

# Persistencia

Actualmente:

```text
GraphQL
   ↓
Resolvers
   ↓
Array de productos
   ↓
Memoria RAM
```

Los datos no son permanentes.

En una futura implementación podría reemplazarse el array por una base de datos como MySQL para conservar la información después de reiniciar el servidor.

---

# Repositorio

El código fuente completo del proyecto se encuentra disponible en GitHub.

```text
(https://github.com/AnyeliJaramillo/graphql-productos.git)
```

---

# Conclusión

Mediante este proyecto se implementó una API GraphQL capaz de realizar operaciones CRUD sobre productos almacenados temporalmente en memoria RAM.

Se implementaron queries para consultar y filtrar información, mutations para crear, actualizar y eliminar productos, además de validaciones para evitar precios y cantidades negativas.

El desarrollo permite comprender el funcionamiento de GraphQL antes de implementar persistencia permanente mediante una base de datos.
