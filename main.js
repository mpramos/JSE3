function outer() {
    let nombre = "outer";
    let str = inner(); //hola
    return str;
}

function inner() {
    let nombre = "inner";
    return "¡Hola!";
}

console.log("Antes de llamar a outer()");
console.log(outer());
console.log("Despues de llamar a outer()");
let end = 2; 
for(let i=1; i<=end; i++) { 
    console.log(i); 
}
