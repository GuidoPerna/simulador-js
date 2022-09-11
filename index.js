
const suma = (num1, num2, num3) => { return num1 + num2 + num3 }


class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.vendido = false;
    }

    vender() {
        this.cantidad = this.cantidad - 1;
    }
}

let productoUno = new Producto("Producto Uno", 100, 10);
let productoDos = new Producto("Producto Dos", 250, 20);
let productoTres = new Producto("Producto Tres", 300, 15);
let total = 0;

let Inventario = [productoUno, productoDos, productoTres];
// console.log(Inventario[0].precio);

// for(const item of Inventario){
//     console.log(item);
// };

let pocoStock = Inventario.filter((item) => item.cantidad < 14);
console.table(pocoStock);

// Inventario.sort((a, b) => a.cantidad - b.cantidad);
// console.table(Inventario)

let pedido = alert("Seleccione al menos un producto");

function carrito(){
    
let compra = prompt("Seleccione entre 1, 2 o 3");

switch (compra) {
    case "1":
        alert(suma(total, total, Inventario[0].precio));
        break;

    case "2":
        alert(suma(total, total, Inventario[1].precio));
        break;

    case "3":
        alert(suma(total, total, Inventario[2].precio));
        break;

    case "1 2":
        alert(suma(total, Inventario[0].precio, Inventario[1].precio));
        break;

    case "1 3":
        alert(suma(total, Inventario[0].precio, Inventario[2].precio));
        break;

    case "2 3":
        alert(suma(total, Inventario[1].precio, Inventario[2].precio));
        break;

    case "1 2 3":
        alert(suma(Inventario[0].precio, Inventario[1].precio, Inventario[2].precio));
        break;

    default:
        alert("Debe ingresar un producto");
        break;
}
}

carrito();

let respuesta = prompt("Completaste tu pedido?");

if (respuesta.toLowerCase() != "si") {
    alert("Realiza tu pedido nuevamente ");
} else {
    alert("Pedido cargado");
};

while (respuesta.toLowerCase() != "si") {
    let pedido = alert("Seleccione al menos un producto");
    carrito ();

    respuesta = prompt("Completaste tu pedido?");

    if (respuesta.toLowerCase() != "si") {
        alert("Realiza tu pedido nuevamente ");
    } else {
        alert("Pedido cargado");
    };
}

