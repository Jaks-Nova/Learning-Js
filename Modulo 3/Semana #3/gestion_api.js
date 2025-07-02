const BASE_URL = "http://localhost:3000/productos";

// VALIDACION DE PRODUCTO

function validarProducto(producto) {
  if (!producto.nombre || typeof producto.precio !== "number" || producto.precio <= 0) {
    console.error("Datos del producto no válidos.");
    return false;
  }
  return true;
}


// MOSTRAR PRODUCTOS

function mostrarProductos(productos) {
  console.log("Lista de productos:");
  productos.forEach(p => {
    console.log(`- ID: ${p.id}, Nombre: ${p.nombre}, precio: $${p.precio}`);
  });
}

// GET

fetch(BASE_URL)
  .then(response => response.json())
  .then(data => mostrarProductos(data))
  .catch(error => console.error(" Error al obtener productos:", error));

// POST

const nuevoProducto = {
    id: 6,
    nombre: "Cebolla",
    precio: 400
};

if (validarProducto(nuevoProducto)) {
  fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(nuevoProducto)
  })
    .then(res => res.json())
    .then(data => console.log("Producto agregado:", data))
    .catch(err => console.error("Error al agregar producto:", err));
}

// PUT

const IDactualizar = 2;

fetch(`${BASE_URL}/${IDactualizar}`, {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ nombre: "Queso", precio: 5000 })
})
  .then(res => res.json())
  .then(data => console.log("Producto actualizado:", data))
  .catch(err => console.error("Error al actualizar producto:", err));

// DELETE

const IDeliminar = 3;

fetch(`${BASE_URL}/${IDeliminar}`, {
  method: "DELETE"
})
  .then(() => console.log(`Producto con ID ${IDeliminar} eliminado`))
  .catch(err => console.error("Error al eliminar producto:", err));
