
let productosEnCarrito = JSON.parse(localStorage.getItem("carro-productos"));

let carroVacio = document.querySelector ("#carrito-vacio");
let carroProducto = document.querySelector ("#carrito-productos");
let carroAcciones = document.querySelector ("#carrito-acciones");
let carroComprado = document.querySelector ("#carrito-comprado");

if (productosEnCarrito) {
    carroVacio.classList.add("disabled");
    carroProducto.classList.remove("disabled");
    carroAcciones.classList.remove("disabled");
    carroComprado.classList.add("disabled");

    carroProducto.innerHTML = "";

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
        <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash-fill"></i></button>
        `;


        carroProducto.append(div);
    })
    
}else{

}

