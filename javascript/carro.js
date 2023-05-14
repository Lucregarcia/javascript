
let productosEnCarrito = localStorage.getItem("carro-productos");
productosEnCarrito = JSON.parse(productosEnCarrito);

let carroVacio = document.querySelector("#carrito-vacio");
let carroProductos = document.querySelector("#carrito-productos");
let carroAcciones = document.querySelector ("#carrito-acciones");
let carroComprado = document.querySelector ("#carrito-comprado");
let botonesBorrar = document.querySelectorAll(".carrito-producto-borrar");
let botonElim =  document.querySelector("#carrito-acciones-vaciar");
let contenedorTotal =  document.querySelector("#total");
let botonComprar =  document.querySelector("#carrito-acciones-comprar");


function cargarProductosCarro() {
    if (productosEnCarrito && productosEnCarrito.length > 0) {

        carroVacio.classList.add("disabled");
        carroProductos.classList.remove("disabled");
        carroAcciones.classList.remove("disabled");
        carroComprado.classList.add("disabled");
    
        carroProductos.innerHTML = "";
    
        productosEnCarrito.forEach(producto => {
            let div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
            <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="carrito-producto-titulo">
                <small>Título</small>
                <h3>${producto.titulo}</h3>
            </div>
            <div class="carrito-producto-cantidad">
                <small>Cantidad</small>
                <p>${producto.cantidad}</p>
            </div>
            <div class="carrito-producto-precio">
                <small>Precio</small>
                <p>$${producto.precio}</p>
            </div>
            <div class="carrito-producto-subtotal">
                <small>Subtotal</small>
                <p>$${producto.precio * producto.cantidad}</p>
            </div>
            <button class="carrito-producto-borrar" id="${producto.id}"><i class="bi bi-trash-fill"></i></button>
            `;
            carroProductos.append(div);
        })
        actualizarBotonesBorrar ();
        actualizarTotal();
    }else{
        carroVacio.classList.remove("disabled");
        carroProductos.classList.add("disabled");
        carroAcciones.classList.add("disabled");
        carroComprado.classList.add("disabled");
    }
}
cargarProductosCarro();


function actualizarBotonesBorrar () {
    botonesBorrar = document.querySelectorAll(".carrito-producto-borrar");

    botonesBorrar.forEach(boton => {boton.addEventListener("click", eliminarCarrito)
});
}

function EliminarProductoDelCarro (e) {
    const botonId = e.currentTarget.id;
    const carro = productosEnCarrito.findIndex  (producto => producto.id ===botonId);
    productosEnCarrito.splice(carro, 1);
    cargarProductosCarro();
    localStorage.setItem("carro-productos", JSON.stringify (productosEnCarrito));
}

botonElim.addEventListener ("click", eliminarCarrito);

function eliminarCarrito (){
    productosEnCarrito.length = 0;
    localStorage.setItem("carro-productos", JSON.stringify (productosEnCarrito));
    cargarProductosCarro();
}


function actualizarTotal() {
    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    total.innerText = `$${totalCalculado}`;
}


botonComprar.addEventListener ("click", comprarCarro);

function comprarCarro (){
    Swal.fire({
        title: 'Tu BASSET es tuyo, Gracias por elegrinos :)!',
        imageUrl: '../img/logo.png',
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: 'Custom image',
    })
    productosEnCarrito.length = 0;
    localStorage.setItem("carro-productos", JSON.stringify(productosEnCarrito));
    
    carroVacio.classList.add("disabled");
    carroProductos.classList.add("disabled");
    carroAcciones.classList.add("disabled");
    carroComprado.classList.remove("disabled");
}