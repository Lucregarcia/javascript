//!PRIMER ENTREGA
/*let nombre = prompt ("Bienvenido, ingrese su Nombre y Apellido");
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
}*/

//!SEGUNDA ENTREGA

class tiendaAccesorios {
    constructor(nombre, precio)} {
    this.nombre = nombre;
    this.precio = parseFloat (precio)};
    

const accesorio1 = new tiendaAccesorios ("Collar Amalfi", "7000" );
const accesorio2 = new tiendaAccesorios ("Collar Costa Azul", "6500" );




/*La idea aca es simular un carro de comprar primitivo con lo aprendido hasta ahora,
utilizando array, un ciclo, y metodos como push, concatenar, join*/

const accesorios = ["Collar Francia", "Collar Amalfi", "Aros Galaxy"]

const carroVacio = []
let cantidad = 2

do {
    let entrada = prompt ("Hola! gracias por elegirnos!!, Ingresa el nombre de tu accesorio elegido")
    carroVacio.push(entrada)
    console.log(carroVacio);
} while (carroVacio.length != cantidad);

const finalCompra = carroVacio.concat(accesorios)
alert (finalCompra.join("\n"))



