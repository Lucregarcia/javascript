
let nombre = prompt ("Bienvenido, ingrese su Nombre y Apellido");
alert ("Bienvenido " + nombre)

let entrada =  prompt ("Ingrese un accesorio indicando el Número del 1 al 5");
while (entrada != "ESC") {
    switch (entrada) {
        case "1": 
            alert ("Collar Francia");
            break;
        case "2": 
            alert ("Collar Amalfi");
            break;
        case "3": 
            alert ("Gargantilla Argenta");
            break;
        case "4": 
            alert ("Aros Galaxy");
            break;
        case "5": 
            alert ("Pulsera Amatista");
            break;
        default:
            alert(" ERROR: Debes seleccionar un Accesorio indicando el número del 1 al 5");
            break;
    }
    entrada = prompt ("Ingrese sus accesorios indicando el Número del 1 al 5");
}
