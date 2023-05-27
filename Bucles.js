//FOR

//CONDICIONAL

if (3 > 5 === true) {
    console.log('tres es mayor a cinco');
} else {
    console.log('tres es menor a cinco');

}

let nombre = "maria"

if (nombre === "maria") {
    console.log("los nombres son iguales");
} else {
    console.log("los nombres no son iguales");
}
if (4 > 1) {
    console.log("el numero es un numero uno");
} else {
    console.log("no es el numero uno")
}


for (let i = 1; i <= 10; i++) { //1 // 11
    console.log(i); //10
} //1

//! EJERCICIOS 

//?TAREA 1
// Escribe un fragmento de código que escriba números del 100 al 0 en la consola, pero en pasos de 10 en 10; entonces sería 100, 90, 80...,10,0 etc.

for (let i = 100; i >= 0; i -= 10) {
    console.log(i);

}
//?TAREA 2
// Modifica el programa anterior para que le pida al usuario el primer y último número a usar en lugar de 100 y 0 (pista: use el cuadro de diálogo prompt). Comprueba si los valores introducidos son correctos (que el valor inicial sea mayor que el valor final).



let superiorLimite = 100
let inferiorLimite = 5


if (!Number.isNaN(superiorLimite) && !Number.isNaN(inferiorLimite) && superiorLimite > inferiorLimite) {
    for (let i = superiorLimite; i >= inferiorLimite; i -= 10) {
        console.log(i);

    }
}

//!TAREA 3
// Hay diez números diferentes en este arreglo:


// let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];

// Escribe un programa que primero escriba todos estos números en la consola, luego solo los que son pares (pista: el residuo de dividir un número par entre 2 es igual a 0), luego solo los que son mayores que 10 y al mismo tiempo menor que 60
let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22]
for (const number of numbers) {
    if (number > 10 && number < 60) {
        console.log(number)
    }
}
for (const number of numbers) {
    if (number % 2 === 0) {
        console.log(number);
    }
}
for (let number of numbers) {
    console.log(number);
}
//!TAREA 5
//     El contenido del objeto que describe la posición del barco llamado "Mareno" se muestra en la consola.


// LATITUD -> 40.07288 
// LONGITUD -> 154.48535 
// CURSO -> 285.6 
// VELOCIDAD -> 14.0 
// OMI -> 9175717 
// NOMBRE -> MARENO
// El código que se presenta a continuación se usa para esto. Completa el programa declarando el objeto que falta en lugar de los tres puntos.  
// let vessel = ... 

// for( let key in vessel) { 
//     console.log(`${key} -> ${vessel[key]}`);
// }
let vessel = {
    LATITUD: 40.07288,
    LONGITUD: 154.48535,
    CURSO: 285.6,
    VELOCIDAD: 14.0,
    OMI: 9175717,
    NOMBRE: "MARENO"

}

for (let key in vessel) {
    console.log(`${key} -> ${vessel[key]}`);
}