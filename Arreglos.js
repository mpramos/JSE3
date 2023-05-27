

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













