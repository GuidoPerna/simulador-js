
const suma = (num1, num2, num3) => {return num1 + num2 + num3}


class Producto{
    constructor(nombre, precio, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.vendido = false;
    }

    // vender(){
    //     this.cantidad = this.cantidad -1;
    // }
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

let pedido = alert("Seleccione al menos un producto");

let carrito = prompt("Seleccione entre 1, 2 o 3");

switch(carrito){
    case "1":
        alert(suma(total, total, Inventario[0].precio));
        break;

    case "2":
        alert(suma(total, total, Inventario[1].precio));
        break;
    
    case "3":
        alert(suma(total, total, Inventario[2].precio));
        break;

    case"1 2":
        alert(suma(total, Inventario[0].precio, Inventario[1].precio));
        break;

    case"1 3":
        alert(suma(total, Inventario[0].precio, Inventario[2].precio));
        break;

    case"2 3":
        alert(suma(total, Inventario[1].precio, Inventario[2].precio));
        break;

    case"1 2 3":
        alert(suma(Inventario[0].precio, Inventario[1].precio, Inventario[2].precio));
        break;

    default:
        alert("Debe ingresar un producto");
        break;
}


let respuesta = prompt("Completaste tu pedido?");

if(respuesta.toLowerCase() != "si"){
    alert("Realiza tu pedido nuevamente ");
}else{
    alert("Pedido cargado");
};

while(respuesta != "si"){
    pedido = alert("Seleccione al menos un producto");
    carrito = prompt("Seleccione entre 1, 2 o 3");

    switch(carrito){
        case "1":
            alert(suma(total, total, productoUno.precio));
            break;
    
        case "2":
            alert(suma(total, total, productoDos.precio));
            break;
        
        case "3":
            alert(suma(total, total, productoTres.precio));
            break;
    
        case"1 2":
            alert(suma(total, productoUno.precio, productoDos.precio));
            break;
    
        case"1 3":
            alert(suma(total, productoUno.precio, productoTres.precio));
            break;
    
        case"2 3":
            alert(suma(total, productoDos.precio, productoTres.precio));
            break;
    
        case"1 2 3":
            alert(suma(productoUno.precio, productoDos.precio, productoTres.precio));
            break;
    
        default:
            alert("Debe ingresar un producto");
            break;
    }
    
    respuesta = prompt("Completaste tu pedido?");

    if(respuesta.toLowerCase() != "si"){
        alert("Realiza tu pedido nuevamente ");
    }else{
        alert("Pedido cargado");
    };
}

