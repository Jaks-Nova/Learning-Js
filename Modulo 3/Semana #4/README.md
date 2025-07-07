# Formulario con Local Storage

Este es un programa interactivo desarrollado en HTML, CSS y JavaScript que permite almacenar multiples entradas de nombre y edad en el navegador utilizando localStorage. Lleva un conteo de las interacciones del usuario en la sesion actual mediante sessionStorage.

Está diseñado para practicar el uso de:

* Almacenamiento local (localStorage) y de sesion (sessionStorage)
* Manejo de eventos en formularios
* Validacion de entradas del usuario
* Manipulacion dinamica del DOM
* Uso de listas (arrays) para almacenar multiples objetos

---

## ¿Como funciona?

Al cargar la pagina, el sistema:

1. Muestra todas las entradas previas guardadas (si existen).
2. Muestra el contador de interacciones realizadas en la sesion actual.

### Funcionalidades:

1. **Agregar datos (nombre y edad):**

   * Valida que el nombre no este vacio y que la edad sea un numero positivo.
   * Guarda cada nueva entrada como un objeto en un array dentro de localStorage.
   * Aumenta el contador de interacciones.

2. **Ver datos guardados:**

   * Muestra un alert con todos los datos registrados (nombre y edad de cada entrada).
   * Aumenta el contador de interacciones.

3. **Limpiar datos:**

   * Elimina todos los datos guardados en localStorage.
   * Aumenta el contador de interacciones.

4. **Reiniciar interacciones:**

   * Restaura el contador de interacciones a cero.

---

## Estructura del proyecto

El proyecto se compone de los siguientes archivos:

### `index.html`

Formulario con los campos nombre y edad, y botones para todas las acciones mencionadas.

### `style.css`

Estiliza el formulario y los elementos visuales para que tengan una apariencia limpia y moderna.

### `script.js`

Contiene toda la logica del programa:

```js
// Fragmento de ejemplo
const dataList = JSON.parse(localStorage.getItem('userDataList')) || [];
dataList.push({ name, age });
localStorage.setItem('userDataList', JSON.stringify(dataList));
```

---

## ¿Como lo uso?

1. Descarga o clona el repositorio.
2. Asegurate de tener los archivos:

   * `index.html`
   * `style.css`
   * `script.js`
3. Abre el archivo `index.html` en tu navegador (doble clic o boton derecho > abrir con).

---

## Ejemplo de interacción

1. Ingresas:

   * Nombre: `María`
   * Edad: `22`
2. Haces clic en **Guardar Datos** tres veces con diferentes nombres/edades.
3. Al final, veras:

```html
Entrada 1: Hola María, tienes 22 años.
Entrada 2: Hola Luis, tienes 30 años.
Entrada 3: Hola Ana, tienes 25 años.
```

Y un contador como:

```html
Interacciones en esta sesion: 5
```

---

## Sobre el Entrenamiento

* Practica de almacenamiento en el navegador
* Mejora del manejo de eventos y validacion de formularios
* Introduccion a arrays de objetos en localStorage
* Conceptos clave de manipulación del DOM
