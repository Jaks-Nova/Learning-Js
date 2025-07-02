# Sistema de Gestión de Productos

Este es un programa sencillo escrito en JavaScript que simula un sistema interactivo de gestión de productos de una tienda. Permite mostrar, agregar, editar y eliminar productos, y utiliza una API simulada con JSON Server.

Está diseñado para practicar el uso de:

- Peticiones HTTP con fetch()
- Operaciones CRUD (GET, POST, PUT, DELETE)
- Validación de datos
- Conexión con un servidor local (json-server)
- Visualización de resultados en consola

## ¿Cómo funciona?

Este sistema se ejecuta desde la consola en un entorno de Node.js. Al correr el archivo gestion_api.js, el sistema hace lo siguiente:

1. Muestra los productos actuales (GET)

Primero imprime la lista de productos registrados:

```
Lista de productos:
- ID: 1, Nombre: Pan, precio: $1500
- ID: 2, Nombre: Queso, precio: $4500
- ID: 3, Nombre: Bocadillo, precio: $400
- ID: 4, Nombre: Leche, precio: $6400
- ID: 5, Nombre: Arroz, precio: $4000
```

 Si algún precio aparece como $undefined, revisa que en tu archivo db.json la clave sea precio, no Precio.

2. Agrega un producto nuevo (POST)

El sistema agrega un nuevo producto con estos datos:

```
id: 6,
nombre: "Cebolla",
precio: 400
```

Y devuelve:

```
Producto agregado: { id: 6, nombre: 'Cebolla', precio: 400 }
```

3. Actualiza el producto con ID 2 (PUT)

El producto con ID 2 (Queso) es actualizado a un precio nuevo:

```
Producto actualizado: { nombre: 'Queso', precio: 5000, id: '2' }
```

4. Elimina el producto con ID 3 (DELETE)

Finalmente, se elimina el producto con ID 3 (Bocadillo):

```
Producto con ID 3 eliminado
```

## ¿Cómo lo ejecuto?

Requisitos:

- Tener instalado Node.js
- Tener instalado json-server

Instalación de json-server (una sola vez):

npm install -g json-server

### Paso a paso:
 - Abre la terminal y navega hasta la carpeta del proyecto:

cd "Modulo 3/Semana #3"

- Inicia el servidor de datos:

json-server --watch db.json

- Abre otra terminal o pestaña nueva, y ejecuta el archivo JS:

node gestion_api.js

### Formato correcto del archivo db.json

```
{
  "productos": [
    { "id": 1, "nombre": "Pan", "precio": 1500 },
    { "id": 2, "nombre": "Queso", "precio": 4500 },
    { "id": 3, "nombre": "Bocadillo", "precio": 400 },
    { "id": 4, "nombre": "Leche", "precio": 6400 },
    { "id": 5, "nombre": "Arroz", "precio": 4000 }
  ]
}
```