/*
CHEAT SHEET js
trim recortar
slice cortar
bind unir
*/

l("___  CONSOLE LOG SHORT METHOD ___")
var l = console.log.bind(console)
var t = console.table.bind(console)

l("___ DEFINITION ___")
/*DEFINITIONS
function Expression
function Declarations
function(argument)
argument.method
parameters
Array Object
event
object property
*/
var num1 = "10"
l(parseInt(num1))  // function(argument)
l(num1.toString)   // argument.method
function sum(a,b){l(a+b)} // a, b = parameters  
sum(2,3)            // 2, 3 = arguments

const player = {
    play: function(id){ // play = object property
        console.log(`play track ${id}`)
    },
    pause: function(id){
        console.log(`pause track ${id}`)
    },
    stop: function(id){
        console.log(`stop track ${id}`)
    }
}

player.play(1) // method property
player.stop(30)
player.pause(5)

// Array object:
var items = [
    {name: "book1"},
    {name: "book2"}
]


// event is the name on this anonimous function
button.addEventListener('input', (event) => {
    if(a){
        console.log('')
    }
})

// image is an object property
const x1 = {
    image : document.querySelector('')
}
l(`___ END DEFINITIONS ____`)
const user = "    Jhon Smith "
var num = 2
var num3 = "3"
var num4 = "3.5"

l(user.trimStart())
l(user.trimEnd())
l(user.trim())
l(user.trimStart().trimEnd())

l(user.replace("Smith", "William"))
l(user.replace("Smith","trump").slice(7,10)) // slice has'nt auto-fix

l(user.substring(11,9)) //auto-fix. The correct is (9,11)

l(user.charAt(4)) // J

l(user.repeat(3))

l(user.split('')) // 'J', 'o', 'n'...
l(user.split(' ')) // 'Jhon', 'Smith'

l(user.toUpperCase())
l(user.toLocaleLowerCase())

l(user.toString())
l(typeof user)

l("___ MATH ___")
l(Math.round(2.4)) // 2
l(Math.round(2.5)) // 3   
l(Math.ceil(2.1)) // 3
l(Math.floor(2.9)) // 2
l(Math.sqrt(10)) // 3.162   square root
l(Math.abs(-10)) // 10  absolut
l(Math.pow(2,4)) // 16 potencia
l(Math.min(8,9,-1,3)) // -1
l(Math.min(8,9,-1,3)) // 9
l(Math.random()) * 20 // 20 to get higer than 1
l(Math.floor(Math.random() * 20)) // random 1 to 20
l(num++) // 2
l(++num) // 2+1+1 = 4
l(--num) // 3
l(num += num) //6
l(Number.parseInt(num3)) // convert string to Int
l(Number.parseFloat(num4)) // convert string 2.5 to Float
l(Number.parseInt(user)) // NaN becuse user is a string not a number
l(Number.isInteger(num)) // true

var num1 = 2
var num2 = "2"
var num3 = true
var num4 = "true"
l(num1 == num2) // true 
l(num1 === num2) // false
l(num1 === parseInt(num2)) // true
l(num1 != num2) // false
l(num1 !== num2)    // true
l(num1 !== parseInt(num2))  //false
l(num3 == num4) // false. with booleans as opposed to numbers and strings is false
l(num3 === num4) // false. strict mode compare
l(num3 ? 'ok' : 'ko')


l("________________________") 
l("___ OBJECT - LITERAL ___") 
// name = property or key object
// jhon = value
var product = {
    name: "jhon",
    num: 1,
    info: {
        factory: {
            country: "China",
            town: "Shanghai"
        }
    }
}

l(product.name)     // jhon
l(product['name'])  //jhon
l((product.age = 45), product) // add
l((delete product.age), product) // delete

l("\n___ OBJECT - Destructing ___") 
var {name, num} = product
l(name, num) // jhon 1

l("\n___ OBJECT - Destructing Nested ___") 
l(product.info.factory)
var {name, info, info: {factory}} = product
l(info)
var {info:{factory: {country}}} = product // China
l(product.info.factory.country) // China
l(country)

l("\n___ OBJECT - Object literal nueva mejoria___") 
var x = {id, name} // merge id and name to x. Opposite to destructing
var {id, name} = x  // destructing

l("\n___ OBJECT - modify const allowed ___") 
const catalog = {
    books: "books", 
    price: "20"     // catalog is const but you can modify
}
catalog.price = "25"
l(catalog.price)



l("___ USE STRICT ___")
// "use strict"
x = 1 // Error with strict mode. The variable are not declarate with var, let or const
l(x)

l("___ OBJECT - freeze & seal ___")
// FREEZE = full blocked
// SEAL = allow modify key but not add or delete
Object.freeze(catalog.books)
Object.seal(catalog.price)
catalog.price = "30" // 25
delete catalog.price // doesn't work because is freeze
l(catalog.price)
l(Object.isFrozen(catalog.price)) // true. check if the key is freeze
l(Object.isSealed(catalog.price)) // true



l("___ OBJECT - ASSING - merge 2 objects ___")
var obj1 = {name: "jhon"}
var obj2 = {last: "smith"}
l(Object.assign(obj1,obj2))

l("__ OBJECT - SPREAD o REST Operator - merge 2 object ___")
var obj = {...obj1, ...obj2}
l(obj)

l("__ OBJECT - THIS ___")
// This read the values inside the object NO outside
var price = 20
var product = {
    price: 10,
    info: function(){ l(`The price is ${this.price}`) } // 10    // try to remove "this." and price will be 20
}
product.info()



l("________________________") 
l("___ OBJECT - CONSTRUCTOR ___") 
function Product (name, price){
    this.name = name
    this.price = price
}
var product = new Product("book", 10)
l(product)


l("___ OBJECT - .keys .values & .entries ___") 
l(Object.keys(product))
l(Object.values(product))
l(Object.entries(product))

l("___ OBJECT - for ___") 
var itemDetail = {
    image: itemElement.querySelector('img').src,
    title: itemElement.querySelector('b').textContent,
    price: itemElement.querySelector('.add-to-cart').textContent.slice(2)
}
for (var [key, value] of Object.entries(itemDetail)) {
    console.log(`${key}: ${value}`);
  }


l("________________________") 
l("___ ARRAYS ___") 
var price = [10]
var months = new Array( 'January', 'Febrary', 'March')
var employee = ["staff", 10, true, {name: "jhon", age: 20}, [1,2,3]]
l(price)
l(months)
l(employee[0],[4],[5])      // staff [ 4 ] [ 5 ]
console.table(employee)     // print table

l("___ ARRAYS - length , add, push, unshift ___")
for(let i=0; i<months.length; i++){
    console.log(months[i])
}
 
l(months[0] = "Enero")  // modify
months[3] = "April"     // add
months.push("May")      // add at end
months.unshift("X")     // add at beginning
months.pop()            // delete last 
months.shift()          // delete first
months.splice(3, 0, "June")         // 
t(months) 


l("___ ARRAYS - DECLARATIVE E IMPERATIVE")
// DECLARATIVE: paradigma que expresa la lógica sin describir tanto el flujo de control. 
// DECLARATIVE: no modifica la variable sino crea una nueva
// DECLARATIVE esta más relaccionada con la programacion funcional
// IMPERATIVE: reescribe la variable

var l = console.log.bind(console)
var t = console.table.bind(console)

var cart = []
var product = {name: "book1", price: "16"}

var result = [...cart, product]
l("___ DECLARATIVE")
t(result) // cart still empty

l("___ IMPERATIVE")
cart.push(product)
t(cart) // cart was modified


l("___ DESTRUCTING OBJECT ___")
var num = {a:10, b:20 ,c:30}
var { a, b, c } = num


t(b) // 20

l("___ DESTRUCTING ARRAY ___")
var num = [10,20,30,40,50]
var [a, b, c, d, e] = num
t(num[1])   // 20
t(b)        // 20

var [, , c] = num
t(c)

var [a,b,...x] = num    // show all except a,b
t(x)



l("___ ARRAY - forEach for map___")
// PERFORMANCE: both forEach and for have the same performance
// Diff forEach and map: map create a new array and forEach no

var product = [
    {name: "book1", price: 10}, 
    {name: "book2", price: 20}
]
    
for(let i=0; i<product.length; i++){
    l(`${product[i].name} - Price: ${product[i].price}`)
}

product.forEach( function(x){
    l(`${x.name} - Price: ${x.price}`)
})

product.map( function(x) {
    l(`${x.name} - Price: ${x.price}`)
})

l("___ ARRAY - Diff map and forEach ___")
// only map return a variable result
var p1 = product.map( function(x) {
    return `${x.name} - Price: ${x.price}`
})

var p2 = product.forEach( function(y){
    return `${y.name} - Price: ${y.price}`
})

l(p1) // ok
l(p2) // undefined


l("___ FUNCTIONS DECLARATION VS EXPRESSION___")
// the difference is the HOISTING. You cannot call function f2 at line 1, I mean before declaration f2, but f1, you can do it on line 1

f1() // Function Declaration
function f1(){
    l("one")
}

// f2()    // Function Expression DON'T WORK
var f2 = function(){
    l("two")
}
f2()    // Function Expression





l("___ FUNCTION - Default value___")
function wellcome(name, lastname="incomplete"){
    l(`Hi ${name} ${lastname}`)
}
wellcome("jhon", "") // Hi jhon incomplete



l("___ FUNCTION - 3 simplified Arrow functions ___")
var cart = [
    {name: 'book1'},
    {name: 'book2'}
]

var total1 = cart.map(function(x){
    console.log(`${x.name}`)
})

var total2 = cart.map((x)=>{
    console.log( `${x.name}`)
})

var total3 = cart.map(x => console.log(`${x.name}`))


l("___ FUNCTION - minimun Arrow functions ___")
const prayer1 = {
    play: id => l(`play ${id}`),
    pause: () => l(`paused`),
    stop: id => l(`stop ${id}`)
}

player.play(1)
player.pause()
player.stop(1)

l("___ FUNCTION - GETTER SETTER ___")

var prayer = {
    play: id => console.log(`play ${id}`),

set setTrack(id){
    this.id = id
},
get getTrack(){
    console.log(`${this.id}`)
}
}
prayer.setTrack = 20
prayer.getTrack



l("___ TERNARY NESTED ___")
var username = true
var password = false
l(`__ ternary __`)
 l((username ? password ? 'ok user & passw ' : 'ko passw ': 'SingIn'))

l(`__ no ternary __`)
if(username){
    if(password){
        l(`ok user $ pass`)
    }
    else{
        l(`ko passw`)
    }
} else{
    l(`SingIn`)
}


l(`__ ITERATOR - break VS continue__`)
// break = stop all execution loop
// continue = stop execution on point but still working the loop
for(let i=0; i<10; i++){ 
    l(`${i}`)
    if(i === 5){
        continue // replace by break and the loop will stop on num 5.
        l(`five `) 
    }
}


l(`___ ITERATOR ___`)
var cart = [
    {name: "book1"},
    {name: "book2", discount: true},
    {name: "book3"}
]

for(let i=0; i<cart.length; i++){
    cart[i].discount ? console.log(`${cart[i].name} discount`):console.log(`${cart[i].name}`)
}


l(`___ ITERATOR - FOREACH, MAP, OF, IN___`)
// map create a new array and forEach NO
var items = ['book1', 'book2']
cart.forEach(items => console.log(items))
cart.map(items => console.log(items))
for( var item of items){ l(item)}
for( var item in items){l(item)}

l(`___ ITERATOR - IN OBJECT___`)

var items = {
    name: 'book1',
    price: 10
}
for(var item in items){ //show key
    console.log(item) 
}
for(var item in items){ //show value
    console.log(`${items[item]}`)
}


l(`___ ITERATOR - NEW EMACS7___`)
for(var[key,value] of Object.entries(items)){ l(value) }



l(`___ ARRAY METHOD - SEARCH - .includes ___`)
// only work in array simple but not in array objects
var simpleArray = ['January', 'Febrary', 'March']
var search = simpleArray.includes('March')
console.log(search)

l(`___ ARRAY METHOD - SEARCH - .some with arrow function___`)
var items = [
    {name: "book1"},
    {name: "book2 databases manager"}
]
var search = items.some( x => x.name === 'book1' )
console.log(search) // true


l(`___ ARRAY METHOD - SEARCH - forEach ___`)
var items = [
    {name: 'book1', price: 10},
    {name: 'book2', price: 20},
    {name: 'book3', price: 30}
]
  
  items.forEach((x, i) => {
      console.log(x.name, i)
  })
  let total = 0
  items.forEach (x => total += x.price)
  console.log(total)

  l(`___ ARRAY METHOD - SEARCH - findIndex ___`)
// output -1 = not found
// output 1 = found it!
// findIndex SHOW YOU THE FIRST RESULT

var search = items.findIndex( x => x.name === 'book2')
l(search) // 1


l(`___ ARRAY METHOD - SEARCH - filter ___`)
var search = items.filter( x => x.price <20 )
l(search) // special feature, create a new array with the result elements
var search = items.filter( x => x.name !== 'book1' )
l(search) // book1, book2


l(`___ ARRAY METHOD - SEARCH - find ___`)
var search = items.find( x => x.name !== 'book1' )
l(search) 

l(`___ ARRAY METHOD - SEARCH - every ___`)
// All objects need to match with the request search, if only one don't match the result will be false.
var search = items.every ( x => x.price > 5 )
console.log(search)


l(`___ ARRAY METHOD - SEARCH - concat and Spread`)
// programación funcional. The original array is not modified. If you want modify the original use a.push('May')
var a = [ 'January', 'Febrary']
var b = ['March']
var c = ['April']


var merge = a.concat(b,c,'extras')
l(merge)

var merge = [...a, ...b, ...c, 'extras']
l(merge)

var book4 = { name: 'book4', price: 40 }
var merge = [...items, book4]
l(merge)


// We needn't add parentesis on addEvenListener function. otherway the parentesis execute the function and we need execute only when an event occurs.
x.addEventListener('blur'.validation) // correct
x.addEventListener('blur'.validation()) // wrong


// MANAGER MESSAGE TYPE ERRORS
// No more magic string, use Symbols
// freeze prevent modifications
export const MESSAGE_TYPES = Object.freeze( {
    ERROR: Symbol(),
    WARNING: Symbol(),
    INFO: Symbol()
})

function messageTypes(type){
    if(tipo === MESSAGE_TYPES.ERROR){
        console.error('Error')
    } else if( type === MESSAGE_TYPES.WARNING){
        console.warn('Warning')
    } else if ( type === MESSAGE_TYPES.INFO ){
        console.info('Information')
    } else {
        console.log('message unknow')
    }
}
messageTypes(MESSAGE_TYPES.WARNING)


l(`___ TIME DATE ___`)
var date = new Date()
console.log(date.getTime())
console.log(date.getHours())
console.log(date.getFullYear())     // year = 2023
console.log(date.setFullYear(2000)) // year = 2000


l(`___ OBJECT CONSTRUCTOR___`)
function Client(name, salary){
    this.name = name
    this.salary = salary
}
const employee = new Client('jhon',500)
console.log(employee)

l(`___ DATASET___`)
// both lines do the same
x.setAttribute('data-id',id)    // old method
x.dataset.id = id               // most modern-

// output examples
x.dataset.id            // data-id
x.dataset.salary.type   // data-salary-type


l(`___ OBJECT - read obj outside the function   ___`)
const a = document.querySelector('#a');
const b = document.querySelector('#b');
eventListeners();
function eventListeners() {
    a.addEventListener('change', employee);
    b.addEventListener('change', employee);
}
var obj = {
    a: '',
    b: ''
}


function employee(e) {
     obj[e.target.name] = e.target.value;
}


l(`___ SET - faster than object and array   ___`)
/* FEATURES
    - faster than object and array
    - don't allow repeated values
    - Only values, haven't key:value like object
    - SET Allow booleans, nums, strings... WEAKSET only allow objects
.size
.has
.delete
.clear
.forEach
*/

l(`___ WEAKSET   ___`)
/*
    - WEAKSET only allow objects
    - doesn't have .size, forEach
*/
l(`___ MAP   ___`)
/*
    - for add or delete, the map has better performance than object
*/

l(`___ iterator   ___`)
/*
.values
.entries
.keys
*/

l(`___ IIFE - Function Private and call function inmediatly   ___`)
// keep locally can't call from another file. Keep private function
(function(){
    window.name = 'jhon'    // accessible from external file
    const phone = 123       // private. Not accesible from outside

})()

l(`___ MODULES   ___`)
/* 
- Only is allowed one export default per file. Also you can hide the a name fo the default function:
    export default function(){...}
    export default function myFunction() {...}
- you can use alias() JS will understand because only one default is allowed per file.
- like SQL you can use any alias like:
    import {users as myAlias()}
*/

l(`___ MODULES   ___`)
.