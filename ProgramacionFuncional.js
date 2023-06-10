let paises=['Bolivia','Peru','Argentina']
paises.forEach(elemento=>console.log(elemento.toLowerCase()))
//map
const numeros=[1,2,3,4,5,6,7,8]
const cuadrados=numeros.map(elemento=>elemento*elemento)
console.log(cuadrados);
console.log(numeros);
let paises1=['Bolivia','Peru','Chile']

let paisesMayuscula= paises1.map(pais=>pais.toUpperCase())
console.log(paisesMayuscula);
// filter
const paisesConLetraI= paises1.filter(pais=>pais.includes('i'))
console.log(paisesConLetraI);

// reduce
// let sum=0
const numeros1=[1,2,3,4,5,6,7,8]
const sum=numeros1.reduce((acumulada,elemento)=>acumulada*elemento)
console.log(sum);
// numeros1.forEach(element=>sum+=element)
// console.log(sum);
// every
const numeros2=[1,2,3,4,5,6,7,8]
const numerosPares=[2,4,6,8]
const todosPares=numerosPares.every(elemento=>elemento%2===0)
console.log(todosPares);
//find
const numeros3=[1,8,3,4,5,6,7,8]
const numero=numeros3.find(elemento=>elemento%2===0)
console.log(numero);
//findIndex
const numeros4=[1,3,3,4,5,6,7,8]
const indice=numeros4.findIndex(elemento=>elemento%2===0)
console.log(indice);
const nombres=['M','Juana','Carlos']
const nombre=nombres.find(nombre=>nombre.includes('a'))
console.log(nombre);
//some
const numeros5=[1,2,3,4,5,6,7,8]
const algunosPares=numeros5.some(elemento=>elemento%2===0)
console.log(algunosPares);
// sort
let productos=['Leche','Cafe','Azucar','Miel']
console.log(productos.sort());
let numeros6=[1,9,8,7,5,3,4,2,6]
console.log(numeros6.sort());
let numeros7=[9.81,3.14,100,37]
console.log(numeros7.sort((a,b)=>a-b));
console.log(numeros7.sort((a,b)=>b-a));

let usuarios=[
    {
    nombre:'Maria',
    edad:60
    },
    {
    nombre:'Juana',
    edad:30
    },
    {
    nombre:'Pepe',
    edad:40
    },
    ]
    usuarios.sort((a,b)=>{
        if(a.edad<b.edad) return 1
        if(a.edad>b.edad) return -1
        return 0
    })
    console.log(usuarios);



