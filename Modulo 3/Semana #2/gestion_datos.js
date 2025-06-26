// Inicialización del proyecto

console.log("Bienvenido a tu Gestion de Datos");

// Definir el objeto productos

const productos = {
    1: { id: 1, nombre: "Laptop", precio: 1500 },
    2: { id: 2, nombre: "Mouse", precio: 25 },
    3: { id: 3, nombre: "Teclado", precio: 50 }
  };
  
  console.log("Objeto productos:", productos);

// Crear un Set con los nombres de los productos

const setproductos = new Set(Object.values(productos).map(producto => producto.nombre));
console.log("Set de productos unicos:", setproductos);

// Crear un Map para agregar categorías a los productos

const mapproductos = new Map([
    ["Electronica", "Laptop"],
    ["Accesorios", "Mouse"],
    ["Accesorios", "Teclado"]
  ]);
  
  console.log("Map de productos y categorias:", mapproductos);

// Recorrer el Set de productos

for (const producto of setProductos) {
    console.log("Producto unico:", producto);
  }

// Recorrer el Map de productos

mapproductos.forEach((producto, categoria) => {
    console.log(`Categoria: ${categoria}, Producto: ${producto}`);
  });


  console.log("Pruebas completas de gestion de datos:");
  console.log("Lista de productos (Objeto):", productos);
  console.log("Lista de productos unicos (Set):", setproductos);
  console.log("Categorias y productos (Map):", mapproductos);
      