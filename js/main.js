function inicializarProyecto() {
  cargarDatosJSON('../data/datos.json', prepararProyecto, manejarError);
}

function cargarDatosJSON(ruta, callbackExito, callbackError) {
  fetch(ruta)
    .then(response => {
      if (!response.ok) {
        throw new Error(`No se pudo cargar el archivo: ${ruta}`);
      }
      return response.json();
    })
    .then(data => {
      callbackExito(data);
    })
    .catch(error => {
      callbackError(error);
    });
}

function prepararProyecto(data) {
  actualizarHero(data.storeInfo);
  actualizarNavLinks(data.storeInfo.navLinks);
  generarProductos(data.products);
}

function manejarError(error) {
  console.error('Ocurrió un error:', error);
}

function actualizarHero(storeInfo) {
  const heroSection = document.querySelector(".hero .container");
  if (heroSection) {
    heroSection.innerHTML = `
      <h2>${storeInfo.title}</h2>
      <p>${storeInfo.description}</p>
    `;
  }
}

function actualizarNavLinks(navLinks) {
  const navLinksContainer = document.getElementById("nav-links");
  
  // Verificar si esUsuario está en true
  const esUsuario = localStorage.getItem('esUsuario') === 'true';

  if (navLinksContainer) {
    // Si esUsuario es true, agregar el enlace de "Cerrar sesión"
    if (esUsuario) {
      navLinks.push({
        name: 'Cerrar sesión',
        href: '#',
        id: 'cerrar-sesion',  // Para que puedas añadir funcionalidad al botón de cerrar sesión
      });
    }

    // Generar el HTML de los links
    navLinksContainer.innerHTML = navLinks
      .map(link => `
        <li><a href="${link.href}" id="${link.id || ''}">${link.name}</a></li>
      `)
      .join("");
  }

  document.getElementById('cerrar-sesion')?.addEventListener('click', function () {
    console.log("Cerrar sesión clickeado");
    localStorage.setItem('esUsuario', 'false'); // Guardar el estado de sesión
    location.reload();

    // Realiza otras acciones necesarias para cerrar sesión
  });
}

function generarProductos() {
  const productos = JSON.parse(localStorage.getItem('productos')) || [];
  const esUsuario = localStorage.getItem('esUsuario') === 'true'; // Verificamos si el usuario está logueado

  const productosFiltrados = esUsuario 
    ? productos 
    : productos.filter(product => product.esPremium === false); // Si no es usuario, solo productos premium

  const productsSection = document.querySelector(".products .container");

  if (productsSection) {
    productsSection.innerHTML = productosFiltrados
      .map(product => `
        <div class="product-card">
          <img src="${product.imagen}" alt="${product.nombre}">
          <h3>${product.nombre}</h3>
          <p>${product.descripcion}</p>
          <p><strong>Precio: $${product.precio.toFixed(2)}</strong></p>
        </div>
      `)
      .join("");
  }
}



inicializarProyecto();

