var suma = 0
/*suma = suma +1;
suma = suma +1;
suma = suma +1;
suma = suma +1;
console.log(suma);*/

var i = 0

for (let i = 0; i < 5; i++) {
    suma = suma + i;
    console.log('Variable de iteración: ', i);
 }
 console.log('Variable suma: ', suma);

while (suma < 10){
    suma = suma + 1;
    console.log(suma);
}

do {
    i += 1;
    console.log(i);
 } while (i < 5);
 