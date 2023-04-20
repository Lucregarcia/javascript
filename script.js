
//!TERCERA ENTREGA

let id = 0

class accesoriosModa{
    constructor(nombre, tipo, precio){
        this.id = id++;
        this.nombre = nombre;
        this.tipo = tipo;
        this.precio = precio;
    }
}

const accesoriosEnStock = []

let choker = new accesoriosModa (
    "Mallorca",
    "Choker",
    "7500",
)

let collar = new accesoriosModa (
    "Francia",
    "Largo",
    "6500",
)

let aro = new accesoriosModa (
    "Galaxy",
    "Piedra natural",
    "3000",
)

let pulsera = new accesoriosModa (
    "Amalfi",
    "acero",
    "7000",
)

accesoriosEnStock.push(choker, collar, aro, pulsera)

//accesorios que ya estan cargados

let mostrarAccesorios = document.getElementById("mostrarAccesorios")

//Muestro el array en la pantalla.

for (const dato of accesoriosEnStock) {
    
    let li = document.createElement("li")
        
    li.innerHTML = `Nombre del accesorio: ${dato.nombre}, tipo de accesorio ${dato.tipo} precio: ${dato.precio}`
    
    mostrarAccesorios.appendChild(li)    
    }
    
let agregarStock = document.getElementById("agregarStock")



    
//Pensando en la idea de una página de accesorios de moda, arme una class y con lo aprendido en las clases arme una especie de base de datos con stock para ir cargando

class tiendaAccesorios {
    constructor(nombre, precio){
    this.nombre = nombre;
    this.precio = parseFloat (precio)
    }
}

let amalfi = new tiendaAccesorios ("Pulsera Amalfi", 7000);
let galaxy = new tiendaAccesorios ("Aros Galaxy", 3000 );
let francia = new tiendaAccesorios ("Collar Francia", 6500);
let mallorca = new tiendaAccesorios ("Collar Mallorca", 7500);

let baseDeDatos = [ amalfi, galaxy, francia, mallorca];
let inv = JSON.parse(localStorage.getItem("BD"));

// validacion para evitar null desde el local storage.
if (inv === null) {
    inv = baseDeDatos;
    localStorage.setItem( "BD", JSON.stringify(inv))
}

//FORMULARIO PARA CARGAR STOCK
let formulario = document.querySelector('.formularioStock');
let inputNombre = document.getElementById('nombre');
let inputPrecio = document.getElementById('precio')

// E.PREVENTDEFAULT para que cuando me equivoco no vuelva a cargar.
formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    let newProd = new tiendaAccesorios(inputNombre.value, inputPrecio.value);
    inv.push(newProd);
    localStorage.setItem("BD", JSON.stringify(inv));
});







