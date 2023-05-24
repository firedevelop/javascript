// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

// Event Listeners
eventListeners();

function eventListeners() {
     //Cuando se envia el formulario
     formulario.addEventListener('submit', agregarTweet);

     // Borrar Tweets
     listaTweets.addEventListener('click', borrarTweet);

     // Contenido cargado
     document.addEventListener('DOMContentLoaded', () => {
          tweets = JSON.parse( localStorage.getItem('tweets') ) || []  ; // If value is null, when we call to the conditional tweets.length on function "crearHTML" will get and Error to prevent this error we add || [] it is like create an empty array if the value is null. Then first JSON.parse try to find the values "OR ||" if can't find get emtpy "[]" value.
          console.log(tweets);
          crearHTML();
     });
}

// Añadir tweet del formulario
function agregarTweet(e) {
     e.preventDefault();
     // leer el valor del textarea
     const tweet = document.querySelector('#tweet').value;
     
     // validación
     if(tweet === '') {   // You need to use 3 equals. If you only use 2 equals "==" the user can insert white spaces and the doesn't show error message
          mostrarError('Un mensaje no puede ir vacio');
          return; // break execution and leave to the funcion. If not the execution still running
     }

     // Crear un objeto Tweet
     const tweetObj = {
          id: Date.now(),
          texto: tweet
     }

     // Añadirlo a mis tweets
     tweets = [...tweets, tweetObj];
     
     // Una vez agregado, mandamos renderizar nuestro HTML
     crearHTML();

     // Reiniciar el formulario
     formulario.reset();
}

// Elimina el Tweet del DOM
function borrarTweet(e) {
     e.preventDefault();

     // console.log(e.target.parentElement.dataset.tweetId);
     const id = e.target.parentElement.dataset.tweetId;
     tweets = tweets.filter( tweet => tweet.id != id  );
     crearHTML();
}

function mostrarError(error) {
     const mensajeError = document.createElement('p');
     mensajeError.textContent = error;
     mensajeError.classList.add('error');

     const contenido = document.querySelector('#contenido');
     contenido.appendChild(mensajeError);

     // delete the error message after 3 seconds
     setTimeout(() => {  
          mensajeError.remove();
     }, 3000);
}

function crearHTML() {
     limpiarHTML();
     
     if(tweets.length > 0 ) {
          tweets.forEach( tweet =>  {
               const li = document.createElement('li');
               li.dataset.tweetId = tweet.id;
               li.innerText = tweet.texto;
               
               const botonBorrar = document.createElement('a');
               botonBorrar.classList = 'borrar-tweet';
               botonBorrar.innerText = 'X';
               
               listaTweets.appendChild(li);
               li.appendChild(botonBorrar);
               
          });
     }

     sincronizarStorage();
}

// Elimina los cursos del carrito en el DOM
function limpiarHTML() {
     while(listaTweets.firstChild) {
          listaTweets.removeChild(listaTweets.firstChild);
     }
}

// Agrega tweet a local storage
function sincronizarStorage() {
     localStorage.setItem('tweets', JSON.stringify(tweets));
}

