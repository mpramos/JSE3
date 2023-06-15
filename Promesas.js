
// Pendiente 
// cumplido
//rechazo

//! Constructor de promesas
//sintaxis
let promise = new Promise((resolve, reject) => {
    resolve('satisfactorio')
    reject('falló')
})

// ? Promesas
let promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        let skills = ['HTML', 'CSS', 'JS']
        if (skills.length > 0) {
            resolve(skills)
        } else {
            reject("No hay habilidades")
        }
    }, 2000);
})
promiseOne
    .then((resultado) => console.log(resultado))
    .catch((error) => console.log('error ', error))
let promiseIncludesNode = new Promise((resolve, reject) => {
    setTimeout(() => {
        let skills = ['HTML', 'CSS', 'JS', 'Node']
        if (skills.includes('Node')) {
            resolve('Fullstack')
        } else {
            reject("No está incluido")
        }
    }, 2000);
})
promiseIncludesNode
    .then((resultado) => console.log(resultado))
    .catch((error) => console.log('error ', error))

let url = 'https://rickandmortyapi.com/api/character'
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
//! Async await
let cuadrado = async function (n) {
    return n * n
}
let value = await cuadrado(2)
console.log(value);

let fetchData = async () => {
    try {
        let respuesta = await fetch('https://rickandmortyapi.com/api/character')
        let data= await respuesta.json()
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}

console.log("-async await");
fetchData();






