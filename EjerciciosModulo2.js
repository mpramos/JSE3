//? Laboratorio
//Declaracion e inicializacion de las variables del contacto

let nombre1="Maxwell Wright"
let correo1="Curabitur.egestas.nunc@nonummyac.co.uk"

let nombre2="Raja Villarrea"
let correo2="posuere.vulputate@sed.com"

let nombre3="Helen Richards"
let correo3="libero@convallis.edu"

console.log(`Nombre : ${nombre1}`);
console.log(`correo1 : ${correo1}`);
console.log(`Nombre : ${nombre3}`);
console.log(`correo3 : ${correo3}`);

//?Tarea 3

// **Datos Primitivos**
// - Escribe un fragmento de código que creará variables y 
// las inicializará con valores Boolean, Number, BigInt, String y tipos
//  undefined utilizando (siempre que sea posible) literales y funciones 
//  constructoras.

let prendido=true //booleanos
let noPrendido=false //booleanos
console.log(typeof prendido);
console.log(typeof noPrendido);

let numero1=34 //number
let numero2=3.4
console.log(typeof numero1);
console.log(typeof numero2);

let numeroGrande=9000003333366661n
console.log(typeof numeroGrande);

let n=3
let cadena1="Hola a todos" //string
let cadena2='Hola a todos'
let cadena3=`EL valor de mi variables es ${n}`
console.log(typeof cadena1);
console.log(typeof cadena2);
console.log(typeof cadena3);
/*Imprime todos los valores y todos los tipos de esos valores usando
 console.log. Intenta usar la interpolación de cadenas para mostrar 
 el valor y el tipo al mismo tiempo con una sola llamada a console.log,
  por ejemplo, en el siguiente formato: 1000 [número].*/
 
  let varBooleano=true
  let varNumero=34
  let varCadena="Hola a todos"
  let varUndefined
  let varBigInt= 9000003333366661n
console.log(`${varBooleano} [${typeof varBooleano}]`);
console.log(`${varNumero} [${typeof varNumero}]`);
console.log(`${varCadena} [${typeof varCadena}]`);
console.log(`${varUndefined} [${typeof varUndefined}]`);
console.log(`${varBigInt} [${typeof varBigInt}]`);

/* Realiza una cadena de conversiones: crea un Boolean a 
partir de un BigInt creado a partir de un Number que se 
creó a partir de un String. Comienza con el valor "1234". 
¿Es posible?*/

let str="1234"
let num=Number(str) //1234
let big=BigInt(num) //1234n
let bool=Boolean(big)

console.log(bool); // true
console.log(typeof bool); // 

// Intenta agregar dos valores del mismo tipo y verifica el tipo de resultado. Pruébalo para todos los tipos de datos primitivos.


let prendido1=true 
let noPrendido1=false 
let resultadoBooleano=prendido1 + noPrendido1
console.log(`La suma de ${prendido1} + ${noPrendido1} es del tipo
    ${typeof resultadoBooleano} el resultado es ${resultadoBooleano}
`);

let undefined1=undefined
let undefined2=undefined
let resultadoUndefined=undefined1 + undefined2
console.log(`La suma de ${undefined1} + ${undefined2} es del tipo
    ${typeof resultadoUndefined} el resultado es ${resultadoUndefined}
`);
//?Intenta sumar dos valores de diferentes tipos
//? y verifica los resultados.


//*Sumando un number con un string
console.log(5 + "10");
console.log(typeof (5+"10"));
//*Sumando un boolean con un number
console.log(true + 10);
console.log(typeof (true + 10));
//*Sumando un boolean con un String
console.log(true + "10");
console.log(typeof (true + "10"));
//*Sumando un BigInt con un String
console.log(10000000n +"10")
console.log(typeof (10000000n +"10"))

//*Sumando un BigInt con un Number
console.log(10000000n +10)
console.log(typeof (10000000n +10))

// Intenta modificar la línea const str1 = 42 + "1"; 
// para obtener el resultado 43 (sin eliminar las comillas
//  alrededor del 1)

const str1= (42+1) *"1"
console.log(str1)

const str2 = 42 + Number("1")
console.log(str2)

/*Escribe un código que cree variables y las inicialice 
con valores Boolean, Number, BigInt, String y tipos
 undefined usando (cuando sea posible) literales y funciones
  constructoras.*/

  const bool1=Boolean(1)
  console.log(bool1)
  const numero=Number(5)
  console.log(numero)
  const bigint=BigInt(5n)
  console.log(bigint);
  const string=`Hola a todos`
  console.log(string);
  /**Imprime todos los valores y todos los tipos de esos valores 
   * usando console.log. Intenta usar la interpolación de 
   * cadenas para mostrar el valor y el tipo al mismo tiempo
   *  con una sola llamada a console.log. */
  console.log(`El valor de bool es ${bool1} y su tipo es ${typeof bool1}`);
  console.log(`El valor de numero es ${numero} y su tipo es ${typeof numero}`);
  console.log(`El valor de bigInt es ${bigint} y su tipo es ${typeof bigint}`);
  console.log(`El valor de string es ${string} y su tipo es ${typeof string}`);

  /*Realizar una cadena de conversiones: crear un Boolean a partir
   de un BigInt creado a partir de un Number que se creó a partir 
   de un String . Comienza con el valor "1234". ¿Es posible? */

   let str3="1234"
   let num3=Number(str3)
   let bigint3=BigInt(num3)
   let bool3=Boolean(bigint3)

   console.log(`El valor del booleano es ${bool3} y su tipo es ${typeof bool3}`);
   /*Intenta agregar dos valores del mismo tipo y verifica 
   el tipo de resultado. Pruébalo para todos los tipos primitivos.*/

   let num1= 10
   let num2= 20
   let num33= num1 + num2
   console.log(`El resultado de sumar ${num1} y ${num2} es ${num33} 
   y su tipo es ${typeof num33}`);

   let boolT=true
   let boolF=false
   let sumBol= boolT + boolF
   console.log(`El resultado de sumar ${boolT} y ${boolF} es ${sumBol} 
   y su tipo es ${typeof sumBol}`);

   const bigInt1= BigInt(123456)
   const bigInt2= BigInt(123456)
   const bigInt3= bigInt1 + bigInt2
   console.log(`El resultado de sumar ${bigInt1} y ${bigInt2} es ${bigInt3} y su tipo es ${typeof bigInt3}`);

   //?Prueba sumar dos valores de diferentes tipos y verifica los resultados.

   let boolT1=true
   let num22=0
   let resultadoBN= num22 + boolT1
   console.log(`El resultado de sumar ${boolT1} y ${num22} es ${resultadoBN} y su tipo es ${typeof resultadoBN}`);

/*Crea un objeto que describa un boleto de tren y guárdalo en la variable ticket. El objeto debe tener tres campos:

- estación inicial (el nombre clave es 'from', y como valor, proporciona el nombre de la estación más cercana en tu área)
- estación final (el nombre clave es 'to', y como valor, dar cualquier otra estación dentro de 100 km)
- el precio del boleto (el nombre clave es 'price', y como valor, proporciona la cantidad que te gustaría pagar por este boleto)

El objeto debe crearse usando llaves {}, en los que todos los campos se enumerarán inmediatamente. Luego muestra los valores de todos los campos del ticket en la consola.

Declara un objeto vacío y guárdalo en la variable person. Usando la notación de punto, agrega los campos `firstName` y `lastName` al objeto ingresando tus datos como valores. Intenta mostrar los campos individuales en la consola.*/

const ticket={
    from: "Estacion 1",
    to:"Estacion 2",
    price: 100
}
console.log(`Estacion inicial : ${ticket.from} [${typeof ticket.from}]`);
console.log(`Estacion final : ${ticket.to} [${typeof ticket.to}]`);
console.log(`Precio del boleto : ${ticket.price} [${typeof ticket.price}]`);

let person={}
console.log(person);
person.firstName="Juan"
person.lastName="Perez"
console.log(person);
console.log(person.firstName);
console.log(person.lastName);


/*Estamos creando una pequeña biblioteca de libros sobre programación
 en JavaScript. Tenemos tres libros y queremos preparar una lista de 
 ellos. Almacenaremos tres datos de cada libro: el título, el autor y 
 el número de páginas:

1. *Speaking JavaScript*, Axel Rauschmayer, 460.
2. *Programming JavaScript Applications*, Eric Elliott, 254.
3. *Understanding ECMAScript 6*, Nicholas C. Zakas, 352.
- Crea un arreglo de tres objetos que representen los libros. 
Cada objeto debe tener las siguientes propiedades: título, autor,
 páginas.
- Hemos agregado un nuevo libro a nuestra colección: 
Learning JavaScript Design Patterns, por Addy Osmani, 254 páginas.
 Usa el método apropiado para adjuntar el libro al final del arreglo.
  Muestra la longitud del arreglo y, a su vez, todos los nombres de 
  los libros en la colección.
- Utiliza el comando slice para copiar los dos últimos libros al 
nuevo arreglo.
- El primer libro de la colección se pierde en circunstancias 
inexplicables. Ya has aceptado la pérdida, así que ahora elimínalo
 del arreglo. ¿Cuál método usarás para este propósito? Muestra la 
 longitud del arreglo y todos los nombres de los libros de la
  colección a su vez.
- Muestra la suma de las páginas de todos los libros de la colección. */

const books=[
{
    título:'Speaking JavaScript',
    autor:' Axel Rauschmayer',
    páginas:460
},
{
    título:'Programming JavaScript Applications',
    autor:' Eric Elliott',
    páginas:254
},
{
    título:'Understanding ECMAScript 6',
    autor:' Nicholas C. Zakas',
    páginas:352
},

]

books.push({
    título:'Learning JavaScript Design Patterns',
    autor:' Addy Osmani',
    páginas:254
})
console.log(`Longitud del arreglo : ${books.length}`);

let total=0
for(let i=0; i<= books.length -1; i++){
    console.log(books[i].título);
    total += books[i].páginas;
}
console.log(total);

let numbers=[12,3,5]
let sliced=numbers.slice(-2)
let pop=numbers.pop()
console.log(sliced)
console.log(numbers);




