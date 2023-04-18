var divisor = 32
var dividendo = 200
var resto = (dividendo / divisor)
console.log("El número " + (dividendo / divisor) + " es tu resultado.")
console.log(Math.ceil(resto) + " es tu resultado redondeado al siguiente entero.")
console.log(Math.round(resto) + " es tu resultado redondeado al entero más próximo.") 
//Math.floor dará el mismo resultado que Math.round en este caso.
console.log(Math.pow(resto, 3) + " es el resultado de tu cociente al cubo.")

//Generador de numero aleatorio entre 0 y 99 usando Math.random.
var numeroRandom
numeroRandom = Math.random()
console.log(parseFloat(numeroRandom.toFixed(2) * 100))

var numeroRandom2
numeroRandom2 = Math.random()
console.log(parseFloat(numeroRandom2.toFixed(2) * 100))

var numeroRandom3
numeroRandom3 = Math.random()
console.log(parseFloat(numeroRandom3.toFixed(2) * 100))

var numeroRandom4
numeroRandom4 = Math.random()
console.log(parseFloat(numeroRandom4.toFixed(2) * 100))

//console.log que muestra el mayor y menor numero generado.

console.log((Math.max(numeroRandom, numeroRandom2, numeroRandom3, numeroRandom4)).toFixed(2) * 100 +
 " es tu numero más alto.")
console.log((Math.min(numeroRandom, numeroRandom2, numeroRandom3, numeroRandom4)).toFixed(2) * 100 +
 " es tu número más bajo.")