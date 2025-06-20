# Sistema Interactivo de Mensajes 

Este es un programa sencillo escrito en **JavaScript** que simula un sistema interactivo que solicita el **nombre** y **edad** del usuario, realiza validaciones básicas y muestra un mensaje personalizado según la edad ingresada.

Está diseñado para practicar el uso de:

- Entrada de datos (`prompt`)
- Salida de datos (`console.log`, `alert`)
- Estructuras de control como `if`, `else`, y `do...while`
- Validación de datos con condicionales y conversión de tipos

---

## ¿Cómo funciona?

Al ejecutar el código en un entorno que soporte `prompt` y `alert` (como un navegador), el sistema sigue los siguientes pasos:

---

### 1. Inicio del Programa

El sistema me muestra una ventana emergente solicitando la siguiente informacion:

```
Por favor, Ingrese su Nombre:

```

### 2. Inicio del Programa

Luego te pedira la edad 

```
Por favor, Ingrese su Edad:

```

y si ingresas texto el sistema te devolvera este mensaje:


```
Por favor, ingrese una edad válida (solo numeros).

```

y si ingresas numeros negativos el sistema te devolvera este mensaje:

```
Por favor, ingrese una edad válida (números positivos).

```

### 3. Finalizacion del Programa

el sistema dara este mensaje si tienes mas de 18 años:

```
Hola Jason, eres mayor de edad. ¡Preparate para grandes oportunidades en el mundo de la programacion!
```

el sistema dara este mensaje si tienes menos de 18 años:

```
Hola Jason, eres menor de edad. ¡Sigue aprendiendo y disfrutando del codigo!
```

