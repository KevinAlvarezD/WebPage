// Función para cambiar el mensaje
function cambiarMensaje() {
    const mensajes = [
        "¡Que todos tus deseos se hagan realidad!",
        "La Navidad está llena de magia y alegría.",
        "Que el amor de la familia te rodee esta Navidad.",
        "¡Feliz Año Nuevo lleno de bendiciones!"
    ];
    const mensajeElemento = document.querySelector('.message');
    const randomIndex = Math.floor(Math.random() * mensajes.length);
    mensajeElemento.textContent = mensajes[randomIndex];
}

// Generar nieve de forma aleatoria
function generarNieve() {
    const snowContainer = document.getElementById('snow');
    
    // Generamos 100 copos de nieve
    for (let i = 0; i < 100; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.textContent = '❄';
        snowflake.style.left = `${Math.random() * 100}%`;
        snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
        snowflake.style.fontSize = `${Math.random() * 20 + 10}px`;
        snowContainer.appendChild(snowflake);
    }
}

// Ejecutamos la función para generar la nieve
generarNieve();
