
class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        }
}

let productoUno = new Producto("Producto Uno", 100, 10);
let productoDos = new Producto("Producto Dos", 250, 20);
let productoTres = new Producto("Producto Tres", 300, 15);
let total = 0;

let Inventario = [productoUno, productoDos, productoTres];

let carrito = [];


// function agregarAlCarrito(x){
//     Carrito.push(x);
//     // restarStock();
//     console.log(Carrito);
// }

const traerDatos = async () => {
  const respuesta = await fetch("./data.json");
  const data = await respuesta.json();
  data.forEach(element => {
    let div = document.createElement("div");
    div.innerHTML = `
     <h3>Producto: ${element.nombre}</h3>
     <p>Precio: $${element.precio}</p>
     <button id="agregar${element.nombre}">Agregar</button>
     `;
    productosData.append(div);

    let boton = document.getElementById(`agregar${element.nombre}`);
    boton.addEventListener("click", () => {
      agregarAlCarrito(element.id);
      alert(`Se agregó el ${element.nombre}`)
    })
  });
}

traerDatos();

const agregarAlCarrito = (productoId) => {

  const contenedorCarrito = document.getElementById("carritoContenedor");

  const renderCarrito = async () => {
    const objeto = await fetch("./data.json");
    const info = await objeto.json();
    info.find(item => item.id == productoId)
        carrito.push(objeto);
        console.log(carrito);
        objeto.cantidad = 1

        let div = document.createElement("div")
        div.classList.add("productoEnCarrito")
        div.innerHTML = `<p>${info.nombre}</p>
      <p>Precio: ${info.precio}</p> 
      <p id="cantidad${info.id}">Cantidad: ${info.cantidad}</p>
      <button id="eliminar${info.id}" class="boton-eliminar" >Reinicar carrito</button>`;
        contenedorCarrito.appendChild(div)
      }
      renderCarrito();
  }
  


function reinicio(){
  carrito.splice(0, 50);
  console.log(carrito);
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

for(const item of carrito){
    guardar(carrito, JSON.stringify(item));
}

localStorage.setItem("Inventario", JSON.stringify(carrito));

let carritoParse = JSON.parse(localStorage.getItem("carrito"));

let contenedorDos = document.getElementById("productosData");



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

