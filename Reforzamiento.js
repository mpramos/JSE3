//!OBJETOS

let persona={
    nombre: 'Juan',
    edad: 30,
    pais:'España'
}
console.log(persona);
persona.edad=31
console.log(persona);
let carro={
    modelo:'Fiat',
    año: 2021
}
console.log(carro);
carro.color="azul"
console.log(carro);

let frutas={
    nombre:'manzana',
    color:'rojo',
    peso:0.2
}
delete frutas.peso
console.log(frutas);

let cat ={edad: 5, nombre:'bolca de nieve'}
cat.edad=6
console.log(cat);

let hexNumero1 = 0xFF
let hexNumero2 = 0x21
let suma= hexNumero1 + hexNumero2
let producto= hexNumero1 * hexNumero2
console.log(suma);
console.log(producto);
/*
let x=0x21 
let x= 33
*/

console.log(hexNumero1);
console.log(hexNumero2);
  /* 0 1 2 ... 9 A = 10  B= 11 C D E F=15*/
  0xAB = A * 16 ^1 + B * 16 ^0
  0xAB = 10 * 16 ^1 + 11 * 16 ^0
  0xAB = 160 + 11
  0xAB = 171
  
  0xAB = A * 16 ^1 + B * 16 ^0
  0x21 = 2 * 16 ^1 + 1 * 16 ^0
  0x21 = 32 + 1
  0x21 = 33
  console.log(0x21);

  let alto

let persona={
    nombre:'Juan',
    edad:31,
}
function sumar() {
    
}
//ALCANCE DE VARIABLE
let numero = 5
{
    let numero = 10
    numero=numero*2
    console.log(numero);
}
console.log(numero);

"use strict"
nombre="Juana"
console.log(nombre);

"use strict"
function sumar(a,a,b) {
    return a + a+b
}
console.log(sumar(1,2,3));

//!METODOS DE ARREGLOS
 const numeros=[1,2,3,4]
 console.log(numeros);
 
 numeros.push(5)
 console.log(numeros);
 
 numeros.pop()
 console.log(numeros);
 
 //SHIFT UNSHIFT
 const frutasArreglo=["manzanas","banana","kiwi","naranja"]
 console.log(frutasArreglo);
 frutasArreglo.shift()
 console.log(frutasArreglo);
 frutasArreglo.unshift("pera")
 console.log(frutasArreglo);
 
 //SLICE
 const numerosSlice=[1,2,3,4,5]
 console.log(numerosSlice);
 
 const subnumeros= numerosSlice.slice(1,4) //[ 2, 3, 4 ]
 console.log(subnumeros);
 console.log(numerosSlice);
 
 const frutasArreglo1=["manzanas","banana","kiwi","naranja"]
 const copiaFrutas= frutasArreglo1.slice()
 console.log(copiaFrutas);

 let cadena="abcdefg".slice(2,4)
 console.log(cadena); //cd
 //SPLICE
 const numerosSplice2=[1,2,3,4,5]
 console.log(numerosSplice2);
 const elementosEliminados= numerosSplice2.splice(0,3)
 console.log(numerosSplice2);
 console.log(elementosEliminados);

 // revertir
 const numerosRevertido=[1,2,3,4,5]
 console.log(numerosRevertido);
 const numeritosRevertidos= numerosRevertido.reverse()
 console.log(numerosRevertido);

//! IMPORTANCIA DE NOMBRES DESCRIPTIVOS

let a=10
let b=20
let c= a +b

// Ejemplos 
let precioProducto=10
let cantidadProducto=20
let totalCompra=precioProducto*cantidadProducto
console.log(totalCompra);

//! Concatenaciones
let precio=10
let descripcion="camisa"
let mensaje= "El precio de la " + descripcion + "es $" + precio + "."
console.log(mensaje);
console.log(typeof mensaje);

let nombre="Rosa"
let apellido="Perez"
let nombreCompleto= nombre.concat(" ",apellido)
console.log(nombreCompleto);

//! Valores numericos

let resultado= "hola"/ 2
console.log(resultado);
console.log(typeof resultado);

let maximo= Number.MAX_VALUE
let infinito= maximo +1
console.log(infinito);
console.log(typeof infinito);


let numeroN= new Number("10")
let resultadoN= numeroN +5
console.log(resultadoN);
console.log(typeof resultadoN);

//! SHADOWING

let nombreG= "Juana"
function saludar() {
    let nombreG="Ana"
    console.log("HOLA" + nombreG + "!");
}
console.log("ADIOS " + nombreG );
saludar()








 
 
 
 
 
 
 
 
 