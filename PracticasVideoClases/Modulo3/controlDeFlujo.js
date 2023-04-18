

var permisoPadres = true

function puedeManejar (edad) {
    if (edad >= 16 && permisoPadres === true) {
    console.log("¡Puedes manejar! :)")
}   else if (edad < 16 || permisoPadres === false) {
    console.log("No puedes manejar... :(")
}
}
puedeManejar(16)

function viajar (destino) {
    if (destino === "Brasil") {
        console.log("Gire a la izquierda.")
    } else if (destino === "Argentina") {
        console.log("Gire a la derecha.")
    } else {
        console.log("Nos perdimos...")
    }
    
}

viajar("USA");