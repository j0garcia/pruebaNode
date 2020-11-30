const person = require('./names.js');
const fs = require('fs');
const catMe = require('cat-me');

console.log('Node TKM')
console.log(`Mi nombre es ${person.person.name} y tengo ${person.person.age} años`);
console.log(`${catMe()} ese plato de comida no se va a llenar solo`);


fs.writeFile("nuevo.txt", `Hola soy ${person.person.name} y tengo ${person.person.age} años`, () => {
  console.log("Archivo credo");
})
