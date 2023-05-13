
let productos =
[
    {
        id: "collar-1",
        titulo: "Collar Amalfi",
        imagen: "./img/collar 1.jpg",
        categoria: {
            nombre: "Collares",
            id: "collares"
        },
        precio: 5000
    },
    {
        id: "pulsera-1",
        titulo: "Pulsera Petra",
        imagen: "./img/pulsera1.jpg",
        categoria: {
            nombre: "Pulseras",
            id: "pulseras"
        },
        precio: 4500
    },
    {
        id: "aro-1",
        titulo: "Aros Perla",
        imagen: "./img/aros2.jpg",
        categoria: {
            nombre: "Aros",
            id: "aros"
        },
        precio: 6000
    },
    {
        id: "collar-2",
        titulo: "Collar Argenta",
        imagen: "./img/collar3.jpg",
        categoria: {
            nombre: "Collares",
            id: "collares"
        },
        precio: 7000
    },
    {
        id: "collar-3",
        titulo: "Collar La Madrid",
        imagen: "./img/collar4.jpg",
        categoria: {
            nombre: "Collares",
            id: "collares"
        },
        precio: 8000
    },
    {
        id: "anillo-1",
        titulo: "Anillo Galaxy",
        imagen: "./img/anillo1.jpg",
        categoria: {
            nombre: "Anillos",
            id: "anillos"
        },
        precio: 10000
    },
    {
        id: "anillo-2",
        titulo: "Anillo Esmeralda",
        imagen: "./img/anillo2.jpg",
        categoria: {
            nombre: "Anillos",
            id: "anillos"
        },
        precio: 6000
    },
    {
        id: "aro-2",
        titulo: "Aros Esmeralda",
        imagen: "./img/aros1.jpg",
        categoria: {
            nombre: "Aros",
            id: "aros"
        },
        precio: 5500
    },
    {
        id: "pulsera-2",
        titulo: "Pulsera Dijes",
        imagen: "./img/pulsera-3.png",
        categoria: {
            nombre: "Pulseras",
            id: "pulseras"
        },
        precio: 8500
    }
]

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
let botonesComprar = document.querySelectorAll(".producto-comprar");
let numCarro = document.querySelector("#numero");

function cargarProductos(productosElegidos) {
    contenedorProductos.innerHTML = "";
    
    productosElegidos.forEach (producto => {
        let div = document.createElement("div");
        div.classList.add  ("producto");
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p class="producto-precio">$${producto.precio}</p>
            <button class="producto-comprar" id="${producto.id}">Agregar</button>
        </div>
        `;
        contenedorProductos.append(div);
    });

    actualizarBotonesComprar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => { 
    boton.addEventListener( "click", (e) => {
    
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
        const productosBoton = productos.filter (producto => producto.categoria.id === e.currentTarget.id);
        cargarProductos(productosBoton);
        } else {
            cargarProductos (productos);
        }
    })
})

function actualizarBotonesComprar () {
    botonesComprar = document.querySelectorAll(".producto-comprar");

    botonesComprar.forEach(boton => {boton.addEventListener("click", agregarAlCarrito)
});
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("carro-productos");

if (productosEnCarritoLS){
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarCarro();
}else{
    productosEnCarrito = [];
}

function agregarAlCarrito (e) {
    const botonId = e.currentTarget.id;
    const productoAgregado = productos.find (producto => producto.id === botonId);

    if (productosEnCarrito.some(producto => producto.id === botonId)){
        const carro = productosEnCarrito.findIndex(producto => producto.id===botonId);
        productosEnCarrito[carro].cantidad++
    }else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
    
    actualizarCarro();
    
    localStorage.setItem("carro-productos", JSON.stringify(productosEnCarrito));
}

function actualizarCarro() {
    let nuevoNumCarro = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numCarro.innerText = nuevoNumCarro;
}

