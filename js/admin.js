function obtenerProductos() {
    return JSON.parse(localStorage.getItem('productos')) || [];
}

function guardarProductos(productos) {
    localStorage.setItem('productos', JSON.stringify(productos));
}

function agregarProducto(producto) {
    let productos = obtenerProductos();
    productos.push(producto);
    guardarProductos(productos);
    mostrarProductos();
}

function eliminarProducto(id) {
    let productos = obtenerProductos();
    productos = productos.filter(producto => producto.id !== id);
    guardarProductos(productos);
    mostrarProductos();
}

function mostrarProductos() {
    const productos = obtenerProductos();
    const container = document.getElementById('products-container');
    container.innerHTML = ''; 

    productos.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto');
        productoDiv.innerHTML = `
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <p>Precio: $${producto.precio}</p>
        <p>${producto.esPremium}</p>
        <img src="${producto.imagen}" alt="${producto.nombre}" style="width: 100px; height: 100px;">
        <button onclick="eliminarProducto(${producto.id})">Eliminar</button>
      `;
        container.appendChild(productoDiv);
    });
}

document.getElementById('product-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = document.getElementById('product-name').value;
    const descripcion = document.getElementById('product-description').value;
    const precio = parseFloat(document.getElementById('product-price').value);
    const imagen = document.getElementById('product-image').value;
    const esPremium = document.getElementById('is-premium').checked;

    const nuevoProducto = {
        id: Date.now(), 
        nombre,
        descripcion,
        precio,
        imagen,
        esPremium
    };

    agregarProducto(nuevoProducto);

    document.getElementById('product-form').reset();
});

document.addEventListener('DOMContentLoaded', mostrarProductos);
