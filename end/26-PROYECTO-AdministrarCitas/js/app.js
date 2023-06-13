const mascotaInput = document.querySelector('#mascota');
const propiInput = document.querySelector('#propi');
const formulario = document.querySelector('#formulario')
const contenedorCitas = document.querySelector('#contenedor-citas');
const citaObj = { mascota: '', propi: ''}

let editando = false;


// Eventos
eventListeners();
function eventListeners() {
    mascotaInput.addEventListener('change', datosCita);
    propiInput.addEventListener('change', datosCita);
    formulario.addEventListener('submit', nuevaCita);
}

function datosCita(e) {
    //  console.log(e.target.name) // Obtener el Input
     citaObj[e.target.name] = e.target.value;
}

// CLasses
class Citas {
    constructor() {
        this.citas = []
    }
    agregarCita(cita) {
        this.citas = [...this.citas, cita];
    }
    editarCita(citaActualizada) {
        this.citas = this.citas.map( cita => cita.id === citaActualizada.id ? citaActualizada : cita)
    }

    eliminarCita(id) {
        this.citas = this.citas.filter( cita => cita.id !== id);
    }
}
class UI {
    imprimirAlerta(mensaje, tipo) {
        // Crea el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12');
        
        // Si es de tipo error agrega una clase
        if(tipo === 'error') {
             divMensaje.classList.add('alert-danger');
        } else {
             divMensaje.classList.add('alert-success');
        }

        // Mensaje de error
        divMensaje.textContent = mensaje;

        // Insertar en el DOM
        document.querySelector('#contenido').insertBefore( divMensaje , document.querySelector('.agregar-cita'));

        // Quitar el alert despues de 3 segundos
        setTimeout( () => {
            divMensaje.remove();
        }, 3000);
   }

   imprimirCitas({citas}) { // destructuring desde la función... | {citas} is a object literal
       
        this.limpiarHTML();

        citas.forEach(cita => {
            const {mascota, propi, id } = cita;

            const divCita = document.createElement('div');
            divCita.classList.add('cita', 'p-3');
            divCita.dataset.id = id;    // data-id value on HTML

            // scRIPTING DE LOS ELEMENTOS...
            const mascotaLine = document.createElement('h2');
            mascotaLine.classList.add('card-title', 'font-weight-bolder');
            mascotaLine.innerHTML = `${mascota}`;

            const propiLine = document.createElement('p');
            propiLine.innerHTML = `<span class="font-weight-bolder">Propi: </span> ${propi}`;

            // Agregar un botón de eliminar...
            const btnEliminar = document.createElement('button');
            btnEliminar.onclick = () => eliminarCita(id); // añade la opción de eliminar
            btnEliminar.classList.add('btn', 'btn-danger', 'mr-2');
            btnEliminar.innerHTML = 'Eliminar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'

            // Añade un botón de editar...
            const btnEditar = document.createElement('button');
            btnEditar.onclick = () => cargarEdicion(cita);

            btnEditar.classList.add('btn', 'btn-info');
            btnEditar.innerHTML = 'Editar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>'

            // Agregar al HTML
            divCita.appendChild(mascotaLine);
            divCita.appendChild(propiLine);
            divCita.appendChild(btnEliminar)
            divCita.appendChild(btnEditar)

            contenedorCitas.appendChild(divCita);
        });    
   }

   limpiarHTML() {
        while(contenedorCitas.firstChild) {
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }
   }
}

const ui = new UI();
const citas = new Citas();

function nuevaCita(e) {
    e.preventDefault();

    const { mascota, propi } = citaObj;

    // Validar
    if( mascota === '' || propi === '' ) {
        ui.imprimirAlerta('Todos los mensajes son Obligatorios', 'error')
        return;
    }

    if(editando) {
        // Estamos editando
        citas.editarCita( {...citaObj} );
        ui.imprimirAlerta('Guardado Correctamente');
        formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita';
        editando = false;

    } else {
        // Nuevo Registrando

        // Generar un ID único
        citaObj.id = Date.now();
        
        // Añade la nueva cita
        citas.agregarCita({...citaObj});

        // Mostrar mensaje de que todo esta bien...
        ui.imprimirAlerta('Se agregó correctamente')
    }


    // Imprimir el HTML de citas
    ui.imprimirCitas(citas);

    // Reinicia el objeto para evitar futuros problemas de validación
    reiniciarObjeto();

    // Reiniciar Formulario
    formulario.reset();

}

function reiniciarObjeto() {
    // Reiniciar el objeto
    citaObj.mascota = '';
    citaObj.propi = '';
}


function eliminarCita(id) {
    citas.eliminarCita(id);
    ui.imprimirCitas(citas)
}

function cargarEdicion(cita) {

    const {mascota, propi, id } = cita;

    // Reiniciar el objeto
    citaObj.mascota = mascota;
    citaObj.propi = propi;
    citaObj.id = id;

    // Llenar los Inputs
    mascotaInput.value = mascota;
    propiInput.value = propi;

    formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cambios';

    editando = true;
}


/* ABOUT {citas}
is like if you do: 
const citas = new Citas()

When you use the {citas} syntax, you are creating an object literal. An object literal is a way of creating an object without using the new keyword. The citas object is created in the local scope of the function where it is defined.

In the code you provided, the citas object is created in the imprimirCitas() function. The citas object is then passed to the imprimirCitas() function as an argument.

Here is a more detailed explanation of how object literals work:

Object literals are a way of creating objects without using the new keyword.
Object literals are created using curly braces ({}).
The properties of an object literal are defined using key-value pairs.
The keys of an object literal must be strings.
The values of an object literal can be any JavaScript value.
*/


