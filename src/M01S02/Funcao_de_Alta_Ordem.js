const transformarArray = (array, transformacao) => {
    return array.map((numero) => {
        return transformacao(numero)
 })
 
}

const dobrar = (numero) => {
    return numero * 2
}

let numeros = [1, 2, 3, 4, 5];
console.log(transformarArray(numeros, dobrar))

module.exports = transformarArray