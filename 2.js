const items = [
    {name: "book1"},
    {name: "book2 databases manager"}
]

var search = items.some( x => x.name === 'book1 databases manager' )
console.log(search) // fa


