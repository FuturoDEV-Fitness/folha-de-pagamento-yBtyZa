const calcularInss = require("./calculo_inss");
const calcularImpostoDeRenda = require("./calculo_imposto_de_renda");

console.log(calcularInss(5600).toFixed(2))
console.log(calcularImpostoDeRenda(5600).toFixed(2))
