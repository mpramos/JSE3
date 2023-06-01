// !La desestructuración es una forma de desempaquetar arreglos y objetos y asignarlos a una variable distinta.
//? Desestrucción de arreglos
const numbers=[1,2,3,4]
let [one,,,fourth] = numbers
console.log(one);
// console.log(second)
//console.log(third)
console.log(fourth);
//let numero1=numbers[0]
console.log(numero1);
let names=['Juan','Rosa','Juana']
let [primeraPersona,segunda,p]=names
console.log(primeraPersona);
console.log(segunda);
console.log(p);

const fullstack=[
    ['HTML','CSS','JS','React'],
    ['Node','Express','MongoDB']
]
const [frontend,backend]=fullstack
console.log(frontend);
console.log(backend);
//? Desestrucción de arreglos durante la iteracion
let paises=[['Bolivia','Cochabamba'],['Argentina','Buenos Aires']]
let nuevoArreglo=[]
for (let[pais,ciudad]  of paises) {
    console.log(pais,ciudad);
    nuevoArreglo.push(ciudad)
}
console.log(nuevoArreglo);

//? Desestrucción de objetos
const calcularPerimetro= rectangulo=>{
    return 2*(rectangulo.ancho+rectangulo.alto)
}
console.log(calcularPerimetro(rectangulo));
const rectangulo={
    alto:10,
    ancho:20
}
const calcularPerimetroDesest=({alto:h,ancho:w})=>{
    return 2*(h + w)
}
console.log(calcularPerimetroDesest(rectangulo));

//? Desestrucción de objetos durante la iteracion

const listaTareas=[
    {
        tarea:'Realizar ejercicios de Matematicas',
        hora:'8:00',
        completado:true
    },
    {
        tarea:'Realizar ejercicios de Fisica',
        hora:'9:00',
        completado:true
    },
    {
        tarea:'Realizar ejercicios de Quimica',
        hora:'12:00',
        completado:false
    },
]
for (const {tarea,hora,completado} of listaTareas) {
    console.log(tarea,hora,completado);

}
