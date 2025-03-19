// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Obtener los elementos del DOM
const inputAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');
const amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const nombreAmigo = inputAmigo.value.trim();

    // Validar que el campo no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    // Agregar el nombre a la lista de amigos
    amigos.push(nombreAmigo);

    // Actualizar la lista visible en la página
    actualizarListaAmigos();

    // Limpiar el campo de entrada
    inputAmigo.value = '';
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarListaAmigos() {
    // Limpiar la lista antes de volver a agregar los amigos
    listaAmigos.innerHTML = '';

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Validar que haya al menos un amigo en la lista
    if (amigos.length === 0) {
        alert('La lista está vacía. Añade al menos un amigo.');
        return;
    }

    // Seleccionar un amigo aleatorio de la lista
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    // Mostrar el resultado en la página
    resultado.innerHTML = `<li><strong>El amigo secreto es:</strong> ${amigoSecreto}</li>`;
}