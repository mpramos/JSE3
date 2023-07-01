
let texto='Hola'

test('Debe contener un texto en especifico', () => { 
    expect(texto).toMatch(/Hola/)
 })

 const frutas=['🍓','🍉','🍊','🍋']

test('Tenemos una fruta 🍋?',()=>{
    expect(frutas).toContain('🍋')
})
test('Es un numero mayor?',()=>{
    expect(10).toBeGreaterThan(9)
})
test('Verdadero',()=>{
    expect(true).toBeTruthy()
})

let reverseString=(cadena)=>{
    return new Promise((resolve,reject)=>{
        if(cadena){
            resolve(cadena.split("").reverse().join(""))
        } else{
            reject('No se ingreso ninguna cadena')
        }
    })
}
test('Debe devolver una promesa', () => { 
    return reverseString("hola")
             .then(cadena=>{expect(cadena).toBe('aloh')})
 })

 test('Probar async/await',async()=>{
    let cadena= await reverseString("hola")
    expect(cadena).toBe("aloh")
 })
