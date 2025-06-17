// INICIALIZACION DEL PROGRAMA
console.log("Bienvenido al Sistema Interactivo de Mensajes 📨");
console.log("===========================================================")
// CAPTURA DATOS DEL USUARIO Y VALIDA LA ENTRADA

let nombre;
do {
    nombre = prompt("Por favor, Ingrese su Nombre:");
    if (!nombre || nombre.trim() === "") {
        alert("El nombre no puede estar vacío.");
    }
} while (!nombre || nombre.trim() === "");

let edad;
do {
    edad = parseInt(prompt("Por favor, Ingrese su Edad:"));
    if (isNaN(edad)) { 
        alert("Por favor, ingrese una edad válida (solo números).");
    } else if (edad < 0) {
        alert("Por favor, ingrese una edad válida (números positivos).");
    } 
} while (isNaN(edad) || edad < 0);

// CODIGO PARA VALIDACION Y MENSAJES
if (edad < 18) {
    alert(`Hola ${nombre}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`);
} else { 
    alert(`Hola ${nombre}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`);
}

// FINALIZACION DEL PROGRAMA
console.log("===========================================================")
console.log("Finalizando Programa.... ");