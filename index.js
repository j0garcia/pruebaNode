const person = require('./names.js')
let fs = require('fs')
const catMe = require('cat-me')

// console.log(person.person.name)

console.log(`Mi nombre es ${person.person.name} y tengo ${person.person.age} años`)

console.log(`${catMe()} ese plato de comida no se va a llenar solo`)

fs.writeFile("archivo.txt", person.person.name, () => { 
  console.log("archivo creado")
});


