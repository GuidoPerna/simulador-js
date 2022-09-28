
const suma = (num1, num2, num3) => { return num1 + num2 + num3 }


class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        // this.vendido = false;
    }

    // vender() {
    //     this.vendido = true;
    //     this.cantidad = this.cantidad - 1;
    // }
}

let productoUno = new Producto("Producto Uno", 100, 10);
let productoDos = new Producto("Producto Dos", 250, 20);
let productoTres = new Producto("Producto Tres", 300, 15);
let total = 0;

let Inventario = [productoUno, productoDos, productoTres];

// for(const item of Inventario){
//     console.log(item);
// };

// let pocoStock = Inventario.filter((item) => item.cantidad < 14);
// console.table(pocoStock);

// Inventario.sort((a, b) => a.cantidad - b.cantidad);
// console.table(Inventario)

// let pedido = alert("Seleccione al menos un producto");

let Carrito = [];

function restarCantidad(x){
    Carrito[x].cantidad -1;
}

function agregarAlCarrito(x){
    Carrito.push(x);
    // restarStock();
    console.log(Carrito);
}

let contenedor = document.getElementById("listaDeProductos");

for(const items of Inventario){ 
    let div = document.createElement("div");
    div.innerHTML = `<h3>Producto: ${items.nombre}</h3>
                    <p>Precio: $${items.precio}</p>
                    <button id="agregar${items.nombre}">Agregar</button>`;

    contenedor.append(div);
    let boton = document.getElementById(`agregar${items.nombre}`);
    boton.addEventListener("click", () => agregarAlCarrito(items));
}

function reinicio(){
    Carrito.splice(0, 50);
    console.log(Carrito);
}
let botonReinicio = document.getElementById("botonReinicio");
botonReinicio.addEventListener("click", () => Swal.fire({
    title: 'Quieres vaciar el carrito?',
    text: "Tendras que iniciar tu pedido nuevamente!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Borrar'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'El carrito ha sido vaciado!',
        'Puedes iniciar tu pedido nuevamente.',
        'success'
      )
      reinicio();
    }
  }));

const guardar = (x, y) => {localStorage.setItem(x, y)};

for(const item of Carrito){
    guardar(Carrito, JSON.stringify(item));
}

localStorage.setItem("Inventario", JSON.stringify(Carrito));

let carritoParse = JSON.parse(localStorage.getItem("Carrito"));

// Swal.fire({
//     title: 'Are you sure?',
//     text: "You won't be able to revert this!",
//     icon: 'warning',
//     showCancelButton: true,
//     confirmButtonColor: '#3085d6',
//     cancelButtonColor: '#d33',
//     confirmButtonText: 'Yes, delete it!'
//   }).then((result) => {
//     if (result.isConfirmed) {
//       Swal.fire(
//         'Deleted!',
//         'Your file has been deleted.',
//         'success'
//       )
//     }
//   })


// function opciones(){
    
// let compra = prompt("Seleccione entre 1, 2 o 3");

// switch (compra) {
//     case "1":
//         alert(suma(total, total, Inventario[0].precio));
//         break;

//     case "2":
//         alert(suma(total, total, Inventario[1].precio));
//         break;

//     case "3":
//         alert(suma(total, total, Inventario[2].precio));
//         break;

//     case "1 2":
//         alert(suma(total, Inventario[0].precio, Inventario[1].precio));
//         break;

//     case "1 3":
//         alert(suma(total, Inventario[0].precio, Inventario[2].precio));
//         break;

//     case "2 3":
//         alert(suma(total, Inventario[1].precio, Inventario[2].precio));
//         break;

//     case "1 2 3":
//         alert(suma(Inventario[0].precio, Inventario[1].precio, Inventario[2].precio));
//         break;

//     default:
//         alert("Debe ingresar un producto");
//         break;
// }
// }

// opciones();

// let respuesta = prompt("Completaste tu pedido?");

// if (respuesta.toLowerCase() != "si") {
//     alert("Realiza tu pedido nuevamente ");
// } else {
//     alert("Pedido cargado");
// };

// while (respuesta.toLowerCase() != "si") {
//     let pedido = alert("Seleccione al menos un producto");
//     opciones ();

//     respuesta = prompt("Completaste tu pedido?");

//     if (respuesta.toLowerCase() != "si") {
//         alert("Realiza tu pedido nuevamente ");
//     } else {
//         alert("Pedido cargado");
//     };
// }

