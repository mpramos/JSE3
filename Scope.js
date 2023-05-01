//SCOPE 
let x=1 // variables globales
let z=3 //variables globales

 {
  console.log(x); //1
  console.log(z); //3
 }
 {
    console.log('un mensaje '+ x); // 'un mensaje 1'
 }
 {
    console.log(x); // 1
 }
if (x>0) {
    console.log('se esta ejecutando la tarea');
} else {
    console.log('no se estará ejecutando la tarea');
}


let zz=3
{
    let zz=4
    console.log(zz);
    {
       let zz=5
       console.log(zz); 
       
    }

}
console.log(zz);

for (let i = 0; i < zz; i++) {
console.log(i);    
}

