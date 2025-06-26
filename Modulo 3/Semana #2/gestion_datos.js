// Inicialización del proyecto
console.log("Bienvenido a tu Tienda Virtual");

// Definir el objeto productos
const productos = {
  1: { id: 1, nombre: "Queso", precio: 15000 },
  2: { id: 2, nombre: "Leche", precio: 6200 },
  3: { id: 3, nombre: "Carne", precio: 15000 },
  4: { id: 4, nombre: "Pan", precio: 5000 },
  5: { id: 5, nombre: "Pollo", precio: 7800 },
  6: { id: 6, nombre: "Mora", precio: 3400 }
};

console.log("Objeto productos:", productos);

// Crear un Set con los nombres únicos de los productos
const nombresUnicos = new Set(Object.values(productos).map(producto => producto.nombre));
console.log("Set de nombres de productos únicos:", nombresUnicos);

// Crear un Map que asocie categorías con un array de productos
const categoriasProductos = new Map([
  ["Carnes", ["Carne","Pollo"]],
  ["Lacteos", ["Leche", "Queso"]]
  ["Fruta", ["Mora"]],
  ["Harinas", ["Pan"]]
]);

console.log("Map de categorías y productos:", categoriasProductos);

// Recorrer el Set de nombres únicos
for (const nombre of nombresUnicos) {
  console.log("Producto único:", nombre);
}

// Recorrer el Map de categorías y productos
categoriasProductos.forEach((productos, categoria) => {
  console.log(`Categoría: ${categoria}, Productos: ${productos.join(", ")}`);
});

// Resumen de pruebas de gestión de datos
console.log("Pruebas completas de gestión de datos:");
console.log("Lista de productos (Objeto):", productos);
console.log("Nombres únicos de productos (Set):", nombresUnicos);
console.log("Categorías y productos (Map):", categoriasProductos);
