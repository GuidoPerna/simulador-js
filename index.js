
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

let Inventario = [{productoUno}, {productoDos}, {productoTres}];

for(const item of Inventario){
    console.log(item);
};


// let Precios = [100, 250, 300];
// let StockProductos = [10, 20, 15];

let pedido = alert("Seleccione al menos un producto");

let carrito = prompt("Seleccione entre 1, 2 o 3");

switch(carrito){
    case "1":
        alert(suma(total, total, Inventario.precio[0]));
        break;

    case "2":
        alert(suma(total, total, Precios[1]));
        break;
    
    case "3":
        alert(suma(total, total, Precios[2]));
        break;

    case"1 2":
        alert(suma(total, Inventario.precio[0], Inventario.precio[1]));
        break;

    case"1 3":
        alert(suma(total, Precios[0], Precios[2]));
        break;

    case"2 3":
        alert(suma(total, Precios[1], Precios[2]));
        break;

    case"1 2 3":
        alert(suma(Precios[0], Precios[1], Precios[2]));
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

