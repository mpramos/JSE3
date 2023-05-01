//!Los tipos de datos primitivos en JavaScript incluyen:

//? Números: enteros, flotantes
//?Cadenas //String: cualquier dato entre comillas simples, comillas dobles o comillas invertidas
//?Booleanos - valor verdadero o falso
//?Nulo: valor vacío o sin valor
//?Indefinido - una variable declarada sin un valor
//?Símbolo: un valor único que puede generar el constructor de símbolos

let palabra= "JavaScript" //String 
console.log(palabra[5]='Y')
console.log(palabra)// INMUTABLES //CAMBIAR
//* Comparacion de valores de tipos de datos primitivos
let numeroUno=3 //number
let numeroDos=3 //number
console.log(numeroUno==numeroDos) //true

let js='JavaScript' //String
let py = 'Python'   //String
console.log(js==py) //false


let luzEncendida= true
let luzApagada= false
console.log(luzEncendida==luzApagada) //false
//*Los tipos de datos NO primitivos en JavaScript incluyen:
// Objeto//
// Arreglos//

//! TIPOS DE DATOS NO PRIMITIVOS
let numeros=[1,2,3,4]
console.log(numeros);
numeros[0]= 10 //[10,2,3,4]
console.log(numeros);
let nums=[1,2,3]
let numeritos=nums

console.log(nums == numeritos) //true
 let usuario={
    name:'Susana',
    reole:'developer',
    country:1
 }
 let copiausuario=usuario

 console.log(copiausuario==usuario)















