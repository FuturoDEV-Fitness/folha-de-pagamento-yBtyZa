const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filtrarPares = (numeros) => {
    return numeros.filter(numero => numero % 2 === 0)
}

console.log(filtrarPares(numeros))

module.exports = filtrarPares