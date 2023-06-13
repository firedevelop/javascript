// Variables y Selectores
const formulario = document.getElementById('formulario');
const gastosListado = document.querySelector('#gastos-listado ul');


// Eventos
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPre);
    formulario.addEventListener('submit', agregarGasto);
    gastosListado.addEventListener('click', eliminarGasto);
}


// Classes
class Pre {
    constructor(pre) {
        this.pre = Number(pre); // Number convert a value to number. if cannot NaN is returned
        this.restante = Number(pre);
        this.gastos = [];
    }

    nuevoGasto(gasto) {
        this.gastos = [...this.gastos, gasto];
        this.calcularRestante();
    }

    eliminarGasto(id) {
        this.gastos = this.gastos.filter( gasto => gasto.id.toString() !== id );    // gasto.id = 12345
        this.calcularRestante();
    }

    calcularRestante() {
        // reduce method sum the gran total. 0 is the initialized value
        //  gasto.nombre = 'jhon' | gasto.cantidad = ' 
        // x = accumulator | y = currentValue
        const gastado = this.gastos.reduce((x, y) => x + y.cantidad, 0);
        this.restante = this.pre - gastado;
    }
}

class UI {
    // insertPre = method | cantidad = object | pre and restante = properties
    insertarPre( cantidad ) {   
     document.querySelector('#total').textContent = cantidad.pre;
     document.querySelector('#restante').textContent = cantidad.restante;
    }
    
    imprimirAlerta(mensaje, tipo) {
        // Crea el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');

        // Si es de tipo error agrega una clase
        if(tipo === 'error') {
             divMensaje.classList.add('alert-danger');
        } else {
             divMensaje.classList.add('alert-success');
        }
        // Mensaje de error
        divMensaje.textContent = mensaje;

        // Insertar en el DOM
        document.querySelector('.primario').insertBefore(divMensaje, formulario);

        // Quitar el alert despues de 3 segundos
        setTimeout( () => {
             document.querySelector('.primario .alert').remove();
        }, 3000);
   }

    // Inserta los gastos a la lista 
    agregarGastoListado(gastos) {

        // Limpiar HTML
        this.limpiarHTML();

        // Iterar sobre los gastos 
        gastos.forEach(gasto => {
            const {nombre, cantidad, id } = gasto;

            // Crear un LI
            const nuevoGasto = document.createElement('li');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            nuevoGasto.dataset.id = id;

            // Insertar el gasto
            nuevoGasto.innerHTML = `
                ${nombre}
                <span class="badge badge-primary badge-pill">$ ${cantidad}</span>
            `;

            // boton borrar gasto.
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnBorrar.textContent = 'Borrar';
            nuevoGasto.appendChild(btnBorrar);

            // Insertar al HTML
            gastosListado.appendChild(nuevoGasto);
        });
   }

     // Comprueba el pre restante
    actualizarRestante(restante) {
        document.querySelector('span#restante').textContent = restante; 
    }

     // Cambia de color el pre restante
     comprobarPre(preObj) {
        const { pre, restante} = preObj;
        const restanteDiv = document.querySelector('.restante');

        // console.log(restante);
        // console.log( pre);

        // Comprobar el 25% 
        if( (pre / 4) > restante) {
            restanteDiv.classList.remove('alert-success', 'alert-warning');
            restanteDiv.classList.add('alert-danger');
        } else if( (pre / 2) > restante) {
            restanteDiv.classList.remove('alert-success');
            restanteDiv.classList.add('alert-warning');
        } else {
            restanteDiv.classList.remove('alert-danger', 'alert-warning');
            restanteDiv.classList.add('alert-success');
        }

        // Si presupuesta es igual a 0 
        if(restante <= 0 ) {
            ui.imprimirAlerta('El pre se ha agotado', 'error');
            formulario.querySelector('button[type="submit"]').disabled = true;
        } 
    }

    limpiarHTML() {
        while(gastosListado.firstChild) {
            gastosListado.removeChild(gastosListado.firstChild);
        }
    }
}

const ui = new UI();
let pre;

function preguntarPre() {
    const preUsuario = prompt('¿Cual es tu pre?', 100);

    if( preUsuario === '' || preUsuario === null || isNaN(preUsuario) || preUsuario <= 0 ) {
        window.location.reload();   // recarga ventana actual una y otra vez hasta que el usuario introduzca una cantidad válida.
    }

    // Pre valido
    pre = new Pre(preUsuario);

    // console.log(pre);

    // Agregarlo en el HTML
    ui.insertarPre(pre)
}




function agregarGasto(e) {
    e.preventDefault();

     // Leer del formulario de Gastos
     const nombre = document.querySelector('#gasto').value;
     const cantidad = Number( document.querySelector('#cantidad').value);

     // Comprobar que los campos no esten vacios
     if(nombre === '' || cantidad === '') {
          // 2 parametros: mensaje y tipo
          ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
     } else if(cantidad <= 0 || isNaN(cantidad )) {

          // si hay una cantidad negativa o letras...
          ui.imprimirAlerta('Cantidad no válida', 'error')
     } else {
            const gasto = { nombre, cantidad, id: Date.now() };

            // Añadir nuevo gasto 
            pre.nuevoGasto(gasto)

            // Insertar en el HTML
            ui.imprimirAlerta('Correcto', 'correcto');

            // Pasa los gastos para que se impriman...
            const {gastos} = pre;   // 
            ui.agregarGastoListado(gastos);

            // Cambiar la clase que nos avisa si se va terminando
            ui.comprobarPre(pre);

            // Actualiza el pre restante
            const { restante } = pre;

            // Actualizar cuanto nos queda
            ui.actualizarRestante(restante)

            // Reiniciar el form
            formulario.reset();
     }
}

function eliminarGasto(e) {
    if(e.target.classList.contains('borrar-gasto')){
        const { id } = e.target.parentElement.dataset;
        pre.eliminarGasto(id);
        // Reembolsar
        ui.comprobarPre(pre);   // change color CSS based on %

        // Pasar la cantidad restante para actualizar el DOM
        const { restante } = pre;   // const restante = pre.restante; | pre=object, restante=property | Extract restante from pre
        ui.actualizarRestante(restante);

        // Eliminar del DOM
        e.target.parentElement.remove();
    } 
}