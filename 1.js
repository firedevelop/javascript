// DOM Document Object Model
let elemento

element = document
element = document.all
element = document.head
element = document.body
element = document.domain // http://127.0.0.1:5500/
element = document.forms[0].action
element = document.forms[0].method

element = document.links[4].className
element = document.images[1] // show second image

var hero = document.getElementsByClassName('titulo-footer')
console.log(hero)

var info = document.querySelector('.premium .info')

// select second nested with same class name
var x = document.querySelector('.hospedaje .card:nth-child(2)');
console.log(x);

var x = (document.querySelector('h1')).classList.add('blue')
var x1 = (document.querySelector('h1')).classList.remove('blue')