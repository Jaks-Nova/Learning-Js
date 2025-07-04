// Mostrar datos almacenados
function displayData() {
    const name = localStorage.getItem('userName');
    const age = localStorage.getItem('userAge');
    const outputDiv = document.getElementById('output');
    if (name && age) {
      outputDiv.textContent = `Hola ${name}, tienes ${age} años.`;
    } else {
      outputDiv.textContent = 'No hay datos almacenados.';
    }
  }
  
  // Mostrar el contador de interacciones
  function updateInteractionCountDisplay() {
    const count = sessionStorage.getItem('interactionCount') || 0;
    document.getElementById('interactionCountDisplay').textContent =
      `Interacciones en esta sesión: ${count}`;
  }
  
  // Actualizar contador
  function updateInteractionCount() {
    let count = parseInt(sessionStorage.getItem('interactionCount'));
    count++;
    sessionStorage.setItem('interactionCount', count);
    updateInteractionCountDisplay();
  }
  
  // Guardar datos en Local Storage
  document.getElementById('saveButton').addEventListener('click', () => {
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');
  
    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value);
  
    if (name && !isNaN(age) && age >= 0) {
      localStorage.setItem('userName', name);
      localStorage.setItem('userAge', age);
      displayData();
    } else {
      alert('Por favor, ingresa un nombre válido y una edad numérica no negativa.');
    }
  
    updateInteractionCount();
  });
  
  // Ver datos en un alert
  document.getElementById('viewDataButton').addEventListener('click', () => {
    const name = localStorage.getItem('userName');
    const age = localStorage.getItem('userAge');
  
    if (name && age) {
      alert(`Nombre: ${name}\nEdad: ${age}`);
    } else {
      alert('No hay datos guardados.');
    }
  
    updateInteractionCount();
  });
  
  // Limpiar datos del Local Storage
  document.getElementById('clearButton').addEventListener('click', () => {
    localStorage.clear();
    displayData();
    updateInteractionCount();
  });
  
  // Reiniciar contador de interacciones
  document.getElementById('resetInteractionsButton').addEventListener('click', () => {
    sessionStorage.setItem('interactionCount', 0);
    updateInteractionCountDisplay();
  });
  
  // Inicializar contador si no existe
  if (!sessionStorage.getItem('interactionCount')) {
    sessionStorage.setItem('interactionCount', 0);
  }
  
  // Ejecutar funciones al cargar la página
  window.onload = () => {
    displayData();
    updateInteractionCountDisplay();
  };
  