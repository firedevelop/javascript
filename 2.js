var items = [
    {name: 'book1'},
    {name: 'book2'}
]

const search = items.forEach( x => console.log(x.name))

const cart = items.filter ( x =>  x.name !== 'book1')

console.log(cart)

