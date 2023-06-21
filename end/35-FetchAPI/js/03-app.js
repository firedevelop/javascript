/* Fetch API desde un JSON (Objeto)
show employees when user access to the site automatically
 document.addEventListener('DOMContentLoaded', obtenerDatos)
*/

const buttonObject = document.querySelector('#buttonObject');
buttonObject.addEventListener('click', obtenerDatos);


function obtenerDatos() {
    fetch('data/empleados.json') 
        .then( respuesta => {
            return respuesta.json()
        }) 
        .then(x => {
            mostrarHTML(x);
            console.log(x)
        })
}

function mostrarHTML(empleados) {
    const contenido = document.querySelector('#contenido');

    let html = '';

    empleados.forEach( empleado => {
        const { id, nombre, empresa, trabajo} = empleado;

        html += `
            <p>ID: ${id} </p>
            <p>Empleado: ${nombre} </p>
            <p>Empresa: ${empresa} </p>
            <p>Trabajo: ${trabajo} </p>
        `
    });

    contenido.innerHTML = html;
    
}