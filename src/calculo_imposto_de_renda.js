function calculoImpostoDeRenda(salarioBruto) {
    const TETO_IMPOSTO = 884.96
    let impostoDeRenda = 0

    if(salarioBruto >= 2112.01 && salarioBruto <= 2826.65) {
        impostoDeRenda = salarioBruto * 0.075
    } else if(salarioBruto >= 2826.66 && salarioBruto <= 3751.05) {
        impostoDeRenda = salarioBruto * 0.15
    } else if(salarioBruto >= 3751.06 && salarioBruto <= 4664.68) {
        impostoDeRenda = salarioBruto * 0.225
    } else if(salarioBruto >= 4664.69) {
        impostoDeRenda = TETO_IMPOSTO
    } else {
        impostoDeRenda = 0
    }
    return Number(impostoDeRenda.toFixed(2))
}

module.exports = calculoImpostoDeRenda