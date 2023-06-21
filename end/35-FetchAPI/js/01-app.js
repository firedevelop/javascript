// Fetch API consumir datos desde un txt...

const buttonTXT = document.querySelector('#buttonTXT');

buttonTXT.addEventListener('click', obtenerDatos);


function obtenerDatos() {
fetch('data/datos.txt') // if find datos.txt execute respuesta
    .then( respuesta => {
        console.log(respuesta);
        console.log(respuesta.headers.get("Content-Type")); // text/plain; charset=UTF-8
        console.log(respuesta.status); // 200
        console.log(respuesta.statusText); // OK
        console.log(respuesta.url); // URL a la que consultamos
        console.log(respuesta.type); // Tipo de consulta: basic

            // Hay que decirle que método vamos a utilizar...

            // Hay 2 JSON o Texto, en el siguiente video vemos jSON pero esto es un texto

            return respuesta.text(); // return in txt format

        })
        .then( x => {
            console.log(x); // get file text content in .TXT
        })
        .catch( error => {
            console.log(error);
        })
}