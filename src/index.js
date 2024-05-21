const calcularSalarioLiquido = require("./calculo_salario_liquido");
const calcularInss = require("./calculo_inss");
const calcularImpostoDeRenda = require("./calculo_imposto_de_renda");

const readline = require('readline');

const input = readline.createInterface(
    process.stdin,
    process.stdout
);

input.question("Nome do colaborador: ", (nome) => {
        input.question("CPF do colaborador: ", (cpf) => {
            input.question("Salário bruto: ", (salarioBruto) => {
                const inss = calcularInss(salarioBruto);
                const impostoDeRenda = calcularImpostoDeRenda(salarioBruto);
                const salarioLiquido = calcularSalarioLiquido(salarioBruto);
                console.log(`--- Folha de pagamento ---\nNome: ${nome}\nCPF: ${cpf}\nSalário bruto: ${salarioBruto}\nINSS: ${inss}\nImposto de renda: ${impostoDeRenda}\nSalário líquido: ${salarioLiquido}`);
            })
        })
    })