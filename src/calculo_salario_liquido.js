const calcularInss = require("./calculo_inss");
const calcularImpostoDeRenda = require("./calculo_imposto_de_renda");
function calcularSalarioLiquido(salarioBruto) {
     salarioBruto = (
        salarioBruto - 
        (calcularInss(salarioBruto) + 
        calcularImpostoDeRenda(salarioBruto)
    )
)
     return salarioBruto
 }

 module.exports = calcularSalarioLiquido
