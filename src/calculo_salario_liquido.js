const calcularInss = require("./calculo_inss");
const calcularImpostoDeRenda = require("./calculo_imposto_de_renda");
function calcularSalarioLiquido(salarioBruto) {
    let salarioLiquido = 0
    salarioLiquido = (
        salarioBruto - 
        (calcularInss(salarioBruto) + 
        calcularImpostoDeRenda(salarioBruto)
    )
)
     return Number(salarioLiquido.toFixed(2))
 }

 module.exports = calcularSalarioLiquido
