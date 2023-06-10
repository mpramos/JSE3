class Persona{
    //codigo
    constructor(nombre='Marisol',apellido='Gutierrez'){
        this.nombre = nombre
        this.apellido= apellido
        this.nota=0
        this.skills=[]
    }
    obtNombreCompleto(){
       return this.nombre+ ' '+ this.apellido 
    }
    get obtNota(){
        return this.nota
    }
    get obtSkills(){
        return this.skills
    }
    set cambiarNota(nota){
        this.nota+=nota
    }
    set actualizarSkills(skill){
        this.skills.push(skill)
    }
}

let persona=new Persona('Rosa','Ticona')
let persona1=new Persona()
// console.log(persona.obtNombreCompleto())
// console.log(persona.obtNombreCompleto())
// console.log(persona1.obtNota)
// console.log(persona1.obtSkills)
persona.cambiarNota=1
persona.cambiarNota=3
persona.cambiarNota=4
persona.actualizarSkills='HTML'
persona.actualizarSkills='CSS'
persona.actualizarSkills='JavaScript'

console.log(persona.obtNota)
console.log(persona.obtSkills)
//? HERENCIA
class Estudiante extends Persona{
    decirHola(){
        console.log('Hola soy un estudiante y estoy heredando todo de la clase Persona');
    }
}
console.log(Estudiante);



let estudiante1=new Estudiante('Marcos','Hinojosa')
console.log(estudiante1);
console.log(estudiante1.obtNombreCompleto());
estudiante1.decirHola()
estudiante1.actualizarSkills='React'
estudiante1.actualizarSkills='CSS'
estudiante1.cambiarNota=10
console.log(estudiante1.obtSkills);
console.log(estudiante1.obtNota);