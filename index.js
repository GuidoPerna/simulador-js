
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
let inventario = [];
let carrito = [];


/**
 * Evento que se dispara cuando ya se cargó toda la pagina
 */
window.addEventListener('load', async (event) => {
    await loadAll()
});

const loadAll = async () => {
    readStorage();
    inventario = await getInventory();
    renderAllInventario();
    renderAllCarrito();
}

const getInventory = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( async () => { 
        const respuesta = await fetch("./inventario.json").catch(reject);
        resolve(respuesta.json());
        }, 1500)
    })
};


/**
 * Si el producto ya existe en el carrito devuelve su index. Caso contrario, devuelve -1
 */
 const findProductoEnCarrito = (idProducto) => {
    return carrito.findIndex( item => item.id === idProducto );
}

/**
 * Actualiza el inventario, aumentando ó disminuyendo la cantidad de un producto segun el valor recibido
 */
const handleInventarioCantidad = (id, cantidad = 0) => {
    const index = inventario.findIndex( i => i.id === id );
    if (index > -1) {
        inventario[index].cantidad = inventario[index].cantidad + cantidad;
        renderAllInventario();
    }
}

/**
 * Actualiza el carrito, aumentando ó disminuyendo la cantidad de un producto segun el valor recibido
 */
const handleCarrito = async (idProducto, cantidad = 1) => {
    const itemInventario = inventario.find(item => item.id === idProducto); // Busco en el inventario
    const busquedaEnCarrito = findProductoEnCarrito(idProducto); // Busco en carrito

    if (  busquedaEnCarrito > -1 ) {
        carrito[busquedaEnCarrito].cantidad = carrito[busquedaEnCarrito].cantidad + cantidad;
    } else {
        const nuevo = { ...itemInventario, cantidad };
        carrito.push( nuevo ); // Agrego uno nuevo
    }

    handleInventarioCantidad(itemInventario.id, -1 * cantidad); // Actualizo el INVENTARIO
    renderAllCarrito(); // Redibuja todo el carrito en pantalla

    saveToStorage(); // Guardar todo el carrito en el storage

    Swal.fire({
        icon: 'success',
        position: 'top',
        title: `Se ${cantidad > 0 ? 'agregó' : 'eliminó'} ${Math.abs(cantidad)} "${itemInventario.nombre}"`,
        toast: true,
        showConfirmButton: false,
        timer: 1500,
    });
}

const renderAllInventario = async () => {
    const containerInventario = document.getElementById("containerInventario");
    containerInventario.innerHTML = ''; // Limpio la pantalla
    inventario.forEach(el => {
        const producto = document.createElement("li");
        producto.innerHTML = `
            <span> ${el.cantidad} </span>
            <i> "${el.nombre?.toUpperCase()}" </i>
            <strong> $${el.precio} </strong>
            <button class="btn btn-success btn-sm ms-3" onclick="handleCarrito(${el.id}, 1)">➕</button>
            <button class="btn btn-outline-success btn-sm" onclick="handleCarrito(${el.id}, ${el.cantidad})">Full</button>
        `;
        producto.classList.add('mt-1');
        containerInventario.append(producto);
    });
}

const renderAllCarrito = () => {
    const contenedorCarrito = document.getElementById("containerCarrito");
    contenedorCarrito.innerHTML = ''; // Limpio la pantalla
    carrito.forEach( el => {
        const item = document.createElement("li")
        item.classList.add("containerCarrito")
        item.innerHTML = `
            <span> ${el.cantidad} </span>
            <span> "${el.nombre}" </span>
            <strong> $${el.precio}</strong>
            <strong> ░ Total: $ ${el.precio * el.cantidad} ░ </strong>
            <button class="btn btn-warning btn-sm" onclick="handleCarrito(${el.id}, -1)">➖</button>
            <button class="btn btn-outline-danger btn-sm" onclick="handleCarrito(${el.id}, ${-1 * el.cantidad})">Vaciar</button>
        `;
        contenedorCarrito.appendChild(item);
    });
}

const limpiarCarrito = async () => {
    carrito = [];
    clearStorage();
    loadAll();
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
            limpiarCarrito();
            Swal.fire(
                'El carrito ha sido vaciado!',
                'Puedes iniciar tu pedido nuevamente.',
                'success'
            )
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
