// Patron: Puede ser un texto o cualquier forma de patron que tenga algún tipo de similitud

//banderas:
//! g: una bandera global que significa buscar un patron en todo el texto
//! i: indicador que no distingue entre mayusculas y minusculas (buscar tanto en mayusculas y minusculas)
//! m: multilinea

//! Creación de un patrón con RegExp Constructor
let patron1='javascript'
let reEx=new RegExp(patron1)
console.log(reEx)

let patron2='javascript'
let badera='gi'
let regEx= new RegExp(patron2)
console.log(regEx);

let regExpr=/javascript/gi
console.log(regExpr);

//!  METODOS de objeto de expresiones regulares RegExp
//? test()
const str='Estoy aprendiendo a usar el lenguaje de javascript'
const patron3=/javascript/
// const patron3=/hola/
const resultado= patron3.test(str)
console.log(resultado);
//? match()
const str1='Estoy aprendiendo a usar el lenguaje de Javascript'
const patron4=/javascript/gi
const resultado1=str1.match(patron4)
console.log(resultado1);