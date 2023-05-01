//Metdos de cadenas
let suma= 2+5
let suma1= 2+5
let suma2= 2+5
let suma3= 2+5
let nombre="maria" 
let Nombre='maria'
let nombre2=`maria `
console.log(nombre2);
console.log(suma); //7
console.log('La suma que obtuvo '+nombre2 + 'fue ' + suma   );
console.log(`La suma que tuvo ${nombre2} fue ${suma} ${suma1}` );

let a=3
let b=2
//
if (a>b) {
    console.log(a + ' es mayor que ' + b);
}else{
    console.log(a + ' es menor que ' + b);
}
//
console.log(`El numero ${a} es mayor que ${b} ? :${a>b} `);
// let edad=14
if (edad >=18) {
    console.log('La persona puede votar');
}else{
    console.log('La persona no puede votar porque es menor de edad');
}
let num= 1>0 ? 1:0
console.log(num);
let NombreCaja= 'luna'==='box' ? 'CajaDeChocolates':1
console.log(NombreCaja);
let banderas = 'estaPrendido' ? true:false
console.log(banderas);

//Operador Ternario
let age=18
console.log(`                 VOTACION 
            ${age>=18 ? 'si puedes votar':'no puedes votar' }`);

