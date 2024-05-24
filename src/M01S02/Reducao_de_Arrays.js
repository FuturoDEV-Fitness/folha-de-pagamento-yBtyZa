let numeros = [1, 2, 3, 4, 5];

const calcularProduto = () => {
    return numeros.reduce((acc, numero) => acc * numero, 1)
}

console.log(calcularProduto(numeros))

module.exports = calcularProduto