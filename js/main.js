// PRODUCTOS
const productos = [
    // Series
    {
        id: "series-01",
        titulo: "jon-snow-got",
        imagen: "./img/jon-snow-got-series.jpg",
        categoria: {
            nombre: "Series",
            id: "series"
        },
        precio: 13000
    },
    {
        id: "series-02",
        titulo: "rick-sanchez",
        imagen: "./img/rick-rick-and-morty-series.jpg",
        categoria: {
            nombre: "series",
            id: "series"
        },
        precio: 13000
    },
    {
        id: "series-03",
        titulo: "michael-scott",
        imagen: "./img/michael-scott-theoffice-series.jpg",
        categoria: {
            nombre: "series",
            id: "series"
        },
        precio: 13000
    },
    {
        id: "series-04",
        titulo: "morty-smith",
        imagen: "./img/morty-rick-and-morty-series.jpg",
        categoria: {
            nombre: "series",
            id: "series"
        },
        precio: 13000
    },
    {
        id: "series-05",
        titulo: "dwight-schrute",
        imagen: "./img/dwight-schrute-theoffice-series.jpg",
        categoria: {
            nombre: "series",
            id: "series"
        },
        precio: 13000
    },
    // Peliculas
    {
        id: "peliculas-01",
        titulo: "Darth Vader",
        imagen: "./img/darth-vader-star-wars-peliculas.jpg",
        categoria: {
            nombre: "Peliculas",
            id: "peliculas"
        },
        precio: 13000
    },
    {
        id: "peliculas-02",
        titulo: "Neo",
        imagen: "./img/neo-matrix-peliculas.jpg",
        categoria: {
            nombre: "peliculas",
            id: "peliculas"
        },
        precio: 13000
    },
    {
        id: "peliculas-03",
        titulo: "Thor",
        imagen: "./img/thor-marvel-peliculas.jpg",
        categoria: {
            nombre: "peliculas",
            id: "peliculas"
        },
        precio: 13000
    },
    {
        id: "peliculas-04",
        titulo: "Capitan América",
        imagen: "./img/capitan-america-marvel-peliculas.jpg",
        categoria: {
            nombre: "peliculas",
            id: "peliculas"
        },
        precio: 13000
    },
    {
        id: "peliculas-05",
        titulo: "Harry Potter",
        imagen: "./img/harrypotter-peliculas.jpg",
        categoria: {
            nombre: "peliculas",
            id: "peliculas"
        },
        precio: 13000
    },
    {
        id: "peliculas-06",
        titulo: "Dumbledore",
        imagen: "./img/dumbledore-harry-potter-peliculas.jpg",
        categoria: {
            nombre: "peliculas",
            id: "peliculas"
        },
        precio: 13000
    },
    {
        id: "peliculas-07",
        titulo: "Iron Man",
        imagen: "./img/iron-man-marvel-peliculas.jpg",
        categoria: {
            nombre: "peliculas",
            id: "peliculas"
        },
        precio: 13000
    },
    {
        id: "peliculas-08",
        titulo: "Trinity",
        imagen: "./img/trinity-matrix-peliculas.jpg",
        categoria: {
            nombre: "peliculas",
            id: "peliculas"
        },
        precio: 13000
    },
    // Videojuegos
    {
        id: "videojuegos-01",
        titulo: "Vi",
        imagen: "./img/vi-lol-juegos.jpg",
        categoria: {
            nombre: "Videojuegos",
            id: "videojuegos"
        },
        precio: 13000
    },
    {
        id: "videojuegos-02",
        titulo: "Lee Sin",
        imagen: "./img/lee-sin-lol-juegos.jpg",
        categoria: {
            nombre: "videojuegos",
            id: "videojuegos"
        },
        precio: 13000
    },
    {
        id: "videojuegos-03",
        titulo: "Tresh",
        imagen: "./img/tresh-lol-juegos.jpg",
        categoria: {
            nombre: "videojuegos",
            id: "videojuegos"
        },
        precio: 13000
    },
    {
        id: "videojuegos-04",
        titulo: "Kratos",
        imagen: "./img/kratos-god-of-war-juegos.jpg",
        categoria: {
            nombre: "videojuegos",
            id: "videojuegos"
        },
        precio: 13000
    },
    {
        id: "videojuegos-05",
        titulo: "Tracer",
        imagen: "./img/tracer-overwatch-juegos.jpg",
        categoria: {
            nombre: "videojuegos",
            id: "videojuegos"
        },
        precio: 13000
    }
];


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}