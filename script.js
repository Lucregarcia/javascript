
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

//accesorios que ya estan cargados en stock y lo muestro en la pantalla

let mostrarAccesorios = document.getElementById("mostrarAccesorios")


for (const dato of accesoriosEnStock) {
    
    let li = document.createElement("li")
        
    li.innerHTML = `Nombre del accesorio: ${dato.nombre}, tipo de accesorio ${dato.tipo} precio: ${dato.precio}`
    
    mostrarAccesorios.appendChild(li)    
}

//Agrego mas stock
let agregarStock = document.getElementById("agregarStock")
console.log(accesoriosEnStock);

const accesorioNuevo = (e) =>{
    e.preventDefault()
    id++;
    let nombre = e.target
    let tipo = e.target
    let precio = e.target

    let nuevo = new accesoriosModa(
        nombre.children[1].value,
        tipo.children[3].value,
        precio.children[5].value,
    );
accesoriosEnStock .push(nuevo)

//mostrar el nuevo resultado
    let mostrarAccesorios = document.getElementById("mostrarAccesorios")
        mostrarAccesorios.innerHTML = "";
        accesoriosEnStock .forEach(accesoriosModa =>{
            let li = document.createElement("li")
            li.innerHTML = `nombre del accesorio: <b> ${accesoriosModa.nombre}</b> tipo
            <b>${accesoriosModa.tipo}</b> <br>
            precio <b> ${accesoriosModa.precio}</b>`

            mostrarAccesorios.appendChild(li) 
        })
    }

agregarStock.addEventListener("submit", accesorioNuevo)

// validacion para evitar null desde el local storage.

let baseDeDatos = accesoriosEnStock;
let inv = JSON.parse(localStorage.getItem("BD"));

if (inv === null) {
    inv = baseDeDatos;
    localStorage.setItem( "BD", JSON.stringify(inv))
}

// E.PREVENTDEFAULT para que cuando me equivoco no vuelva a cargar.
let formulario = document.querySelector('#agregarStock');
let inputNombre = document.getElementById('nombre');
let inputTipo = document.getElementById('tipo');
let inputPrecio = document.getElementById('precio');

formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    let newProd = new accesoriosModa(inputNombre.value, inputTipo.value, inputPrecio.value);
    inv.push(newProd);
    localStorage.setItem("BD", JSON.stringify(inv));
})










