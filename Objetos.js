//!Objetos
const persona={
    nombre:"Juan",
    apellido:"Perez",
    edad:25,
    pais:'Bolivia',
    tecnologias:[
        'HTML','CSS','JS','React'
    ],
    obtenerNombreCompleto: function () {
        return `${this.nombre} ${this.apellido}`
    }
}
// console.log(persona);
// console.log(persona.edad);
// console.log(persona.obtenerNombreCompleto());
// persona.telefono='7777777'
// console.log(persona);
//!Metodos de los objetos
//? Object.assign
const objectoCopia=Object.assign(persona)
console.log(objectoCopia);

//? Object.keys 
const keys= Object.keys(persona)
// console.log(keys);
//? Object.values
const value=Object.values(persona)
console.log(value);
//? Object.entries
const entries=Object.entries(persona)
console.log(entries);


