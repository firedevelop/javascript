// Selectores
const resultado = document.querySelector('#resultado');
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const max = new Date().getFullYear();
const min = max - 10;


for(let i = max; i >  min; i--) {
    const option =  document.createElement('option');
    option.value = i;
    option.innerText = i;
    year.appendChild(option);
}

// Datos para la busqueda
const datosBusqueda = {
    marca : '',
    year: ''
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);
});

// Event Listeners para el formulario
marca.addEventListener('input', e => {
    datosBusqueda.marca = e.target.value;

    // Mandar llamar la función de filtrar Autos
    filtrarAuto();
});

year.addEventListener('input', e => {
    datosBusqueda.year = Number(e.target.value);
    // Mandar llamar la función de filtrar Autos
    filtrarAuto();
});

function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear)
    // Audi 1, Audi 2 ...
    if(resultado.length){
         mostrarAutos(resultado);
    } else {
        noResultado();
    }
 }
// Aplica los filtros
function filtrarMarca(auto) {
    if(datosBusqueda.marca){
                // Audi, BMW === Audi   // Audi 1, Audi 2 ...
        return auto.marca === datosBusqueda.marca;
    }  
    return auto;
}

function filtrarYear(auto) {
    if(datosBusqueda.year){
        return auto.year === datosBusqueda.year;
    }
    return auto;
}

function limpiarHTML() {
    // Leer el elemento Resultado
    const resultado = document.querySelector('#resultado');

    // limpiar los resultados anteriores
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}



function mostrarAutos(autos){
    limpiarHTML();
  
    // Construir el HTML de los autos
    autos.forEach(auto => {
        const autoHTML = document.createElement('p');
        autoHTML.innerHTML = `
            <p>${auto.marca} ${auto.modelo} - ${auto.year} - ${auto.puertas} Puertas</p>
        `;
        resultado.appendChild(autoHTML);
    })
}
function noResultado() {
    limpiarHTML();

    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.appendChild(document.createTextNode('No hay Resultados'));
    document.querySelector('#resultado').appendChild(noResultado);
}