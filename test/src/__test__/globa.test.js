let text="Hola"
test('should first', () => { expect(text).toMatch(/Hola/)})

const frutas=['🍒','🍉','🍊','🍋','🥝']
test('Tenemos una fruta 🍊?', () => { 
    expect(frutas).toContain('🍊')
    // expect(frutas).toContain('🍟')
 })
 test('Es un numero mayor?',()=>{
    // expect(7).toBeGreaterThan(9)
    expect(10).toBeGreaterThan(9)
 })
 test('Verdadero',()=>{
    expect('false').toBeTruthy()

 })