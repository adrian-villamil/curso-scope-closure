// Variables

var a; // declarando
var b = 'b'; // declaramos y asignamos
b = 'bb'; // reasignar
var a = 'aa'; // redeclarar

// Global Scope

var fruit = 'Apple'; // global
console.log(fruit);
function bestFruit() {
  console.log(fruit);
}

bestFruit();

function countries() {
  country = 'Colombia';
  console.log(country);
}

countries();
console.log(country);