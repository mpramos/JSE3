
//! FUNCION DE DECLARACION
function suma(a,b) {
    return a+b
}
//! FUNCION DE EXPRESION
const sum=function (a,b) {
    return a+b
}
console.log(sum(2,7));

//! FUNCION ANONIMA
function(){
        return
}
function(){
        console.log();
}
function(a,b){
}
//! FUNCION DE FLECHA
let sumaFlecha=(a,b)=> a+b
console.log(sumaFlecha(4,5));

6!=6*5*4*3*2*1
6!=6*5! ///6*5*4*6
5!=5*4! ///5*4*6
4!=4*3! ///4*6
3!=3*2! ///3*2=6
2!=2*1! /// 2!=2*1=> 2!=2
1!=1*1//1


//?
function factorial (n) {
    return n > 1 ? n * factorial(n - 1) : 1;//6* factorial(5)///6*5!// 6*5*4*3*2
                                            //5* factorial(4)///5*4!// 5*4*3*2
                                            //4* factorial(3)///4*3!// 4*3*2
                                            //3* factorial(2)       // 3*2
                                            //2* factorial(1)       // 2*1 =2
                                            //1
}

console.log(factorial(6)); // -> 720
