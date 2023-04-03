
//!SEGUNDA ENTREGA
//Pensando en la idea de una página de accesorios de moda, arme una class para ir agregando stock de accesorios.

class tiendaAccesorios {
    constructor(nombre, precio){
    this.nombre = nombre;
    this.precio = parseFloat (precio)
    }
}
    
const accesorios = [];

accesorios.push (new tiendaAccesorios ("Collar Amalfi", "7000" ));
accesorios.push (new tiendaAccesorios ("Collar Aros Galaxy", "3000" ));
accesorios.push (new tiendaAccesorios ("Collar Francia", "6500" ));
accesorios.push (new tiendaAccesorios ("Collar Mallorca", "7500" ));
console.log(accesorios);

// Ahora intento simular una especie de buscador de accesorios utilizando el metodo find.

function buscarAccesorio(collar, nombre){
    return collar.find(objeto => objeto.nombre === nombre);
}
for (let index = 0; index < accesorios.length; index++) {
    let busqueda = buscarAccesorio(accesorios, prompt("Ingresa el nombre del accesorio que queres ver"));
    if(busqueda != undefined){
        alert("Accesorio "+busqueda.nombre);
    }else{
        alert("En este momento no contamos con stock, registrate y te avisamos cuando vuelve a entrar :)");
    }
}
// Aca aplique un filtro en base a precios.

const resultado = accesorios.filter((el) => el.precio < 6600)
console.log(resultado);
const resultado1 = accesorios.filter((el) => el.precio < 4000)
console.log(resultado);


//La idea aca es simular un carro de comprar primitivo con lo aprendido hasta ahora. 

const collares = ["Collar Francia", "Collar Amalfi"]
const carroVacio = []
let cantidad = 2

do {
    let entrada = prompt ("Hola! gracias por elegirnos!!, Ingresa el nombre de tu accesorio elegido")
    carroVacio.push(entrada)
    console.log(carroVacio);
} while (carroVacio.length != cantidad);

const finalCompra = carroVacio.concat(collares)
alert (finalCompra.join("\n"))



