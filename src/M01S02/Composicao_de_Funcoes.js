const compor = (somar, multiplicar) => {
 return function(valor){
    return somar(multiplicar(valor))
 }
}

function somar1(valor) {
    return valor + 1;
}

function multiplicar2(valor) {
    return valor * 2;
}

let funcaoComposta = compor(somar1, multiplicar2)

console.log(funcaoComposta(5))

module.exports = compor