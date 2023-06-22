// Fetch API desde una API

const buttonAPI = document.querySelector('#buttonAPI');
buttonAPI.addEventListener('click', obtenerDatos);


function obtenerDatos() {
    fetch('https://picsum.photos/list') 
        .then( respuesta => {
            return respuesta.json()
        }) 
        .then(x => {
            mostrarHTML(x);
            console.log(x)
        })
}

function mostrarHTML(datos) {
    
    const contenido = document.querySelector('#contenido');

    let html = '';

    datos.forEach( perfil => {
        const { author, post_url } = perfil;

        html += `
            <p>Autor: ${author} </p>
            <a href="${post_url}" target="_blank">Ver Imagen</a>
        `
    });

    contenido.innerHTML = html;
    
}