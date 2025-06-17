// INICIALIZACION DEL PROGRAMA
console.log("Bienvenido al Sistema Interactivo de Mensajes 📨");

// CAPTURA DATOS DEL USUARIO Y VALIDA LA ENTRADA
let nombre = prompt("Por favor, Ingrese su Nombre:");

let edad;
do {
    edad = parseInt(prompt("Por favor, Ingrese su Edad:"));
    if (isNaN(edad)) { 
        alert("Por favor, ingrese una edad válida (solo números).");
    }
} while (isNaN(edad)); 


// CODIGO PARA VALIDACION Y MENSAJES

if (edad < 18) {
    alert(Hola ${nombre}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!);
} else { 
    alert(Hola ${nombre}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!);
}

//FINALIZACION DEL PROGRAMA
console.log("¡Gracias por usar el sistema!");

