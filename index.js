
const suma = (num1, num2, num3) => { return num1 + num2 + num3 }


class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.vendido = false;
    }

    vender() {
        this.vendido = true;
        this.cantidad = this.cantidad - 1;
    }
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

// const agregarAlCarrito = x => {
//     x.vender();
//     Carrito.push(x);
//     alert(`Agregaste el ${(Inventario[x])}`);
//     return console.log(Carrito);
// };

function restarProdUno(){
    productoUno.vender();
    Carrito.push(productoUno);
    alert("Agregaste el Producto Uno al carrito");
    console.log(Carrito);
}
let boton1 = document.getElementById("boton1");
let evento = "click";
boton1.addEventListener("click", restarProdUno);

function restarProdDos(){
    productoDos.vender();
    Carrito.push(productoDos);
    alert("Agregaste el Producto Dos al carrito");
    console.log(Carrito);
}
let boton2 = document.getElementById("boton2");
boton2.addEventListener("click", restarProdDos);

function restarProdTres(){
    productoTres.vender();
    Carrito.push(productoTres);
    alert("Agregaste el Producto Tres al carrito");
    console.log(Carrito);
}
let boton3 = document.getElementById("boton3");
boton3.addEventListener("click", restarProdTres);

function reinicio(){
    Carrito.splice(0, 50);
    alert("Carrito eliminado");
    console.log(Carrito);
}
let botonReinicio = document.getElementById("botonReinicio");
botonReinicio.addEventListener("click", reinicio);

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

