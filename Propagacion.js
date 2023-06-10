//! Operador de propagacion ...


let numeros=[1,2,3,4,5,6,7,8,9,10]

let [num1,num2,...rest]=numeros
console.log(num1);
console.log(num2);
console.log(rest);
//?Para copiar arreglos
const pares=[0,2,4,6,8,10]
const numeroPares=[...pares]
console.log(pares);
console.log(numeroPares);
const impares=[1,3,5,7,9]
const numerosImpares=[...impares]
console.log(numerosImpares);

const todosNumeros=[...numeroPares,...numerosImpares]
console.log(todosNumeros);
//?Para copiar objetos
const usuario={
    nombre:"Pepe",
    edad:25,
    sexo:"M",
    pais:'Bolivia'
}
const copiaUsuario={...usuario}
console.log(copiaUsuario);

//?Operador de propagacion en Funcion de flecha 


const sumaElementos=(...args)=>{
    let suma=0
    for (const num  of args) {
        suma+=num
    }
    return suma
}
console.log(sumaElementos(1,2,3,4,5));

