//Suma
console.log(3 + 5);

//Resta
console.log(14 - 7);

//Multiplicación
console.log(4 * 6);

//División
console.log(30 / 9);

//Resto
console.log(95 % 4);

//Prueba de precedencia
console.log(3 + 5 * 2 - 8);
//En este ejemplo la multiplicación tiene mayor precedencia que la suma o resta.
//Por ende primero se resuelve la multiplicación, y con el resultado de esta se realizan las restas y sumas.
//Las paréntesis tienen el mayor numero de precedencia, por ej:
console.log((3 + 5) * 2 - 8);

//Concatenación de strings
var nombre = 'Fernando';
var saludo = 'Hola ' + nombre;
console.log(saludo)

//Usando todos estos conceptos puedo determinar mi edad junto con un saludo.
var añoActual = 2023
var añoNacimiento = 2002

var edad = (añoActual - añoNacimiento)
console.log(saludo + ", tienes " + edad + " años.");