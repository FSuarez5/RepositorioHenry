//Función: cuidadoConElConsoleLog
function cuidadoConElConsoleLog(nombre) {
    console.log(nombre);
    return nombre;
}

//Función: otraFuncion
function otraFuncion() {
    return (
        "El nombre retornado por la funcion 'cuidadoConElConsoleLog' es: " + 
        cuidadoConElConsoleLog('Fernando')
    );
}

//Función: cuidadoConElReturn
function cuidadoConElReturn(nombre) {
    return nombre;
    console.log(nombre);
} 