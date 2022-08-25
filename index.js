
let suma = (num1, num2, num3) => {return num1 + num2 + num3}

let productoUno = 10;
let productoDos = 15;
let productoTres = 25;
let total = 0;

let pedido = alert("Seleccione al menos un producto");

let carrito = prompt("Seleccione entre 1, 2 o 3");

switch(carrito){
    case "1":
        alert(suma(total, total, productoUno));
        break;

    case "2":
        alert(suma(total, total, productoDos));
        break;
    
    case "3":
        alert(suma(total, total, productoTres));
        break;

    case"1 2":
        alert(suma(total, productoUno, productoDos));
        break;

    case"1 3":
        alert(suma(total, productoUno, productoTres));
        break;

    case"2 3":
        alert(suma(total, productoDos, productoTres));
        break;

    case"1 2 3":
        alert(suma(productoUno, productoDos, productoTres));
        break;

    default:
        alert("Debe ingresar un producto");
        break;
}


let respuesta = prompt("Completaste tu pedido?");

if(respuesta.toLowerCase() === "si"){
    alert("Pedido cargado");
}else{
    alert("Continua tu pedido");
};

