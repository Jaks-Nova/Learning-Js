// Mostrar todos los datos almacenados
function displayData() {
  const dataList = JSON.parse(localStorage.getItem('userDataList')) || [];
  const outputDiv = document.getElementById('output');

  if (dataList.length > 0) {
    outputDiv.innerHTML = '';
    dataList.forEach((data, index) => {
      const p = document.createElement('p');
      p.textContent = `Entrada ${index + 1}: Hola ${data.name}, tienes ${data.age} años.`;
      outputDiv.appendChild(p);
    });
  } else {
    outputDiv.textContent = 'No hay datos almacenados.';
  }
}

// Guardar datos en localStorage como lista
document.getElementById('saveButton').addEventListener('click', () => {
  const nameInput = document.getElementById('name');
  const ageInput = document.getElementById('age');

  const name = nameInput.value.trim();
  const age = parseInt(ageInput.value);

  if (name && !isNaN(age) && age >= 0) {
    const userData = { name, age };

    const dataList = JSON.parse(localStorage.getItem('userDataList')) || [];
    dataList.push(userData);
    localStorage.setItem('userDataList', JSON.stringify(dataList));

    displayData();
    updateInteractionCount();
  } else {
    alert('Por favor, ingresa un nombre valido y una edad numerica no negativa.');
  }
});

// Ver datos guardados en alert
document.getElementById('viewDataButton').addEventListener('click', () => {
  const dataList = JSON.parse(localStorage.getItem('userDataList')) || [];

  if (dataList.length > 0) {
    const msg = dataList.map((data, i) => `Entrada ${i + 1}:\nNombre: ${data.name}\nEdad: ${data.age}`).join('\n\n');
    alert(msg);
  } else {
    alert('No hay datos guardados.');
  }

  updateInteractionCount();
});

// Limpiar localStorage
document.getElementById('clearButton').addEventListener('click', () => {
  localStorage.removeItem('userDataList');
  displayData();
  updateInteractionCount();
});

// Resto de funciones: contador y carga inicial
function updateInteractionCount() {
  let count = parseInt(sessionStorage.getItem('interactionCount'));
  count++;
  sessionStorage.setItem('interactionCount', count);
  updateInteractionCountDisplay();
}

function updateInteractionCountDisplay() {
  const count = sessionStorage.getItem('interactionCount') || 0;
  document.getElementById('interactionCountDisplay').textContent =
    `Interacciones en esta sesión: ${count}`;
}

document.getElementById('resetInteractionsButton').addEventListener('click', () => {
  sessionStorage.setItem('interactionCount', 0);
  updateInteractionCountDisplay();
});

// Inicializar contador si no existe
if (!sessionStorage.getItem('interactionCount')) {
  sessionStorage.setItem('interactionCount', 0);
}

// Ejecutar funciones al cargar
window.onload = () => {
  displayData();
  updateInteractionCountDisplay();
};
