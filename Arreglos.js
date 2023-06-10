

const nombre="Maria"
console.log(nombre);

const nombres=["Maria","Juana","Ana"]
const numeros=[1,1,1]
console.log(nombres);

const emojis=['🍊','🍓','🍋','💻','📲','👨🏻‍💻','😂','😃','😎']// 8-1 //7
//🍊 => 0 
//🍓 => 1
//🍋 => 2
//💻 => 3
//📲 => 4
console.log(emojis[emojis.length-1]);
console.log(emojis);
const frutas=emojis.slice(0,3)
console.log(emojis);
console.log(frutas);
const cajaFrutas=frutas.slice()
console.log(cajaFrutas);
const fruteria=emojis.splice(1,2)
console.log(fruteria);
const dispositivos= emojis.slice(-3)
console.log(dispositivos);

const emojis=['🍊','🍓','🍋','💻','📲','👨🏻‍💻','😂','😃','😎']// 8-1 //7
let carita='🥱'
 emojis.push(carita)  
 console.log(emojis);

//Creacion de arreglos a partir del constructor
const arr=Array(10)
console.log(arr.length);
const arr1=['🤓','🍕']
console.log(arr1.length);
//! SPLIT 
let js="javaScript"
const charsInJavaScript=js.split('')
console.log(charsInJavaScript);
let empresas='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const empresasArreglo= empresas.split(',')
console.log(empresasArreglo);
let txt='Yo estoy aprendiendo a manejar. HTML, CSS, JS, React.'
let palabras=txt.split(' ')
console.log(palabras);















