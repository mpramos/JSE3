function externa() {
    let contador=0
    function interna() {
        contador ++
        return contador
    }
    return interna
}
const funcionExterna=externa()
console.log(funcionExterna());
console.log(funcionExterna());
console.log(funcionExterna());
console.log(funcionExterna());
function externa() {
    let contador=0
    function internaMas() {
        contador ++
        return contador
    }
    function internaMenos() {
        contador --
        return contador
    }

    return {
        mas:internaMas(),
        menos:internaMenos()
    }
}
const objetoInterno=externa();
console.log(objetoInterno.mas);
console.log(objetoInterno.menos);
console.log(objetoInterno.mas);
console.log(objetoInterno.mas);
console.log(objetoInterno.mas);

