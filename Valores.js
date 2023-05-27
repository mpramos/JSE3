
//! Valores falsy en JavaScript
//? 0 : El numero cero es considerado falsy
//? NaN: Not a Number es considerado falsy
//? undefined: Una variable que que se ha definido pero no hemos
//? asignado un valor
//? null: Es considerado falsy
//? false: El booleano false es considerado falsy
//? "": una cadena de texto vacía es considerada falsy

//! Valores truthy en JavaScript

//* Strings no vacios 
//* Numeros diferentes de cero
//* Booleanos true
//*Arreglos no vacios
//* Objetos no vacios
//* Funciones definidas
//?
let miVariable="juan";
console.log(miVariable);
if (miVariable) {
    console.log("Es Truthy");
}else{
    console.log("Es Falsy");
}
//?
let miVariable1="maria";
let miVariable2=1;
if (miVariable1 && miVariable2) {
    console.log('Ambos son Truthys');
} else if(miVariable1 || miVariable2) {
    console.log('Al menos una variable es falsy');
}else{
    console.log('Ninguno es Truthy');
}



