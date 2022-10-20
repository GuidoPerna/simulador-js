
/**
 * La clase para cada producto, por defecto se crea con una sola cantidad.
 */
class Producto {
    constructor(nombre, precio, cantidad = 1) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}


/**
 *  Variables Globales
 */
let carrito = [];


/**
 * Evento que se dispara cuando ya se cargó toda la pagina
 */
window.addEventListener('load', async (event) => {
    readStorage();
    renderAllInventario();
    renderAllCarrito();
});


const getInventory = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( async () => { 
        const respuesta = await fetch("./inventario.json").catch(reject);
        resolve(respuesta.json());
        }, 1000)
    })
};


/**
 * Si el producto ya existe en el carrito devuelve su index. Caso contrario, devuelve -1
 */
const findProductoEnCarrito = (idProducto) => {
    return carrito.findIndex( item => item.id === idProducto );
}

const agregarAlCarrito = async (idProducto) => {
    const inventario = await getInventory();
    const itemInventario = inventario.find(item => item.id === idProducto); // Busco en el inventario
    const busquedaEnCarrito = findProductoEnCarrito(idProducto); // Busco en carrito

    if (  busquedaEnCarrito > -1 ) {
        ++carrito[busquedaEnCarrito].cantidad; // Ya existe, le sumo uno
    } else {
        const nuevo = { ...itemInventario, cantidad: 1 };
        carrito.push( nuevo ); // Agrego uno nuevo
    }
    renderAllCarrito(); // Redibuja todo el carrito en pantalla

    saveToStorage(); // Guardar todo el carrito en el storage

    Swal.fire({
        icon: 'success',
        position: 'top',
        title: `Se agregó un "${itemInventario.nombre}"`,
        toast: true,
        showConfirmButton: false,
        timer: 1500,
    });
}

const quitarDelCarrito = async (idProducto) => {
    const inventario = await getInventory();
    const itemInventario = inventario.find(item => item.id === idProducto); // Busco en el inventario
    const busquedaEnCarrito = findProductoEnCarrito(idProducto); // Busco en carrito

    if (busquedaEnCarrito > -1) {
        --carrito[busquedaEnCarrito].cantidad; // Ya existe, le resta uno
    }

    renderAllCarrito(); // Redibuja todo el carrito en pantalla

    saveToStorage(); // Guardar todo el carrito en el storage

    Swal.fire({
        icon: 'success',
        position: 'top',
        title: `Se agregó un "${itemInventario.nombre}"`,
        toast: true,
        showConfirmButton: false,
        timer: 1500,
    });
}

const renderAllInventario = async () => {
    const containerInventario = document.getElementById("containerInventario");
    containerInventario.innerHTML = '';
    const data = await getInventory();

    data.forEach(element => {
        const producto = document.createElement("li");
        producto.innerHTML = `
            <span> ${element.cantidad} </span>
            <i> "${element.nombre?.toUpperCase()}" </i>
            <strong> $${element.precio} </strong>
            <button class="btn btn-success btn-sm ms-3" id="agregar${element.nombre}">Agregar</button>
        `;
        producto.classList.add('mt-1');
        containerInventario.append(producto);

        const boton = document.getElementById(`agregar${element.nombre}`);
        boton.addEventListener("click", () => agregarAlCarrito(element.id) )
    });
}

const renderAllCarrito = () => {
    const contenedorCarrito = document.getElementById("containerCarrito");
    contenedorCarrito.innerHTML = ''; // Limpio el contendor
    carrito.forEach( el => {
        const item = document.createElement("li")
        item.classList.add("containerCarrito")
        item.innerHTML = `
            <span> ${el.cantidad} </span>
            <span> "${el.nombre}" </span>
            <strong> $${el.precio}</strong>
            <strong> ░ Total: $ ${el.precio * el.cantidad} ░ </strong>
            <button id="eliminar${el.id}" class="btn btn-danger btn-sm" >Quitar</button>
        `;
        contenedorCarrito.appendChild(item);

        const boton = document.getElementById(`eliminar${el.id}`);
        boton.addEventListener("click", () => quitarDelCarrito(el.id))
    });
}

const limpiarCarrito = () => {
    carrito = [];
    renderAllCarrito();
    clearStorage();
}

const botonReinicio = document.getElementById("botonReinicio");
botonReinicio.addEventListener("click", () =>
    Swal.fire({
        title: 'Quieres vaciar el carrito?',
        text: "Tendras que iniciar tu pedido nuevamente!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Borrar'
    }).then( (result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'El carrito ha sido vaciado!',
                'Puedes iniciar tu pedido nuevamente.',
                'success'
            )
            limpiarCarrito();
        }
    })
);

const saveToStorage = () => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

const readStorage = () => {
    const storageCarrito = localStorage.getItem('carrito');
    carrito = storageCarrito ? JSON.parse(storageCarrito) : [];
}

const clearStorage = () => {
    localStorage.removeItem('carrito');
}
