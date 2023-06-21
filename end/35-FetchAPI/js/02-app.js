// Fetch API desde un JSON (Array)

const buttonJSON = document.querySelector('#buttonJSON');
buttonJSON.addEventListener('click', obtenerDatos);


function obtenerDatos() {
    fetch('data/empleado.json') 
        .then( respuesta => {
            return respuesta.json()
        }) 
        .then(x => {
            mostrarHTML(x);
            console.log(x)
        })
}

function mostrarHTML({id, empresa, nombre, trabajo}) {
    const contenido = document.querySelector('#contenido');

    contenido.innerHTML = `
        <p>id: ${id} </p>
        <p>nombre: ${nombre} </p>
        <p>empresa: ${empresa} </p>
        <p>trabajo: ${trabajo} </p>
    `
}

/*
{
     "id" : 1,
     "nombre" : "Juan",
     "empresa" : "Código Con Juan",
     "trabajo" : "Desarrollador Web"
}
*/