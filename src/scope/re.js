var firstName; // Tiene valor undefined
firstName = 'Oscar';
console.log(firstName);

var lastName = 'David'; // Declaramos y asignamos
lastName = 'Ana'; // Reasignamos
console.log(lastName);

var secondName = 'David'; // Declaramos y asignamos
var secondName = 'Ana'; // Redeclarar y reasignar
console.log(secondName);

// let
let fruit = 'Apple'; // Declaramos y asignamos
fruit = 'Kiwi'; // Reasignar
console.log(fruit);

// let fruit = 'Banana'; No se puede redeclarar una variable con block scope

// const

const animal = 'dog'; // Declaramos y asignamos
// animal = 'cat'; No se puede reasignar una variable de tipo const ya que esta representa una variable que siempre es igual, nunca cambia.
// const animal = 'Snake'; No se puede redeclar y reasignar una variable con block scope.
console.log(animal);

const vehicles = [];
vehicles.push('car');
console.log(vehicles);

vehicles.pop();
console.log(vehicles);