const carrito = document.querySelector('#carrito')
const listaCursos = document.querySelector('#lista-cursos')
const listaCarrito = document.querySelector('#lista-carrito')
const variarCarrito = document.querySelector('#vaciar-carrito')
let articulosCarrito = []

cargarEventListeners()
function cargarEventListeners(){
     listaCursos.addEventListener('click', agregarCurso)
     carrito.addEventListener()
}