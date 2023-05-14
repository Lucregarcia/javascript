
let productos = [];

fetch('./javascript/productos.json')
    .then((response) => response.json())
    .then((data) => {
        productos = data;
        cargarProductos(productos);
    })

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
    Toastify({
        text: "Tu Producto fue Agregado :)",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
        background: "beige",
        color: "black",
        fontSize: "18px"
        },
        onClick: function(){} // Callback after click
    }).showToast();
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

