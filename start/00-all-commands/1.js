/*
CHEAT SHEET js
trim recortar
slice cortar
bind unir
*/
var l = console.log.bind(console)
var t = console.table.bind(console)

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

var f2 = function(){
    l("two")
}
f2()    // Function Expression