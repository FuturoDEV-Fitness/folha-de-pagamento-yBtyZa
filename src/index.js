// const calcularSalarioLiquido = require("./calculo_salario_liquido");
// const calcularInss = require("./calculo_inss");
// const calcularImpostoDeRenda = require("./calculo_imposto_de_renda");
// const PdfDocument = require('pdfkit');
// const fs = require('fs');

// const readline = require('readline');

// const input = readline.createInterface(
//     process.stdin,
//     process.stdout
// );

// function perguntarNome(callback) {
//     input.question("Nome do colaborador: ", (nome) => {
//         if (nome.length === 0) {
//             console.log("Por favor, digite o nome do colaborador.");
//             return perguntarNome(callback);
//         }
//         callback(nome);
//     });
// }

// function perguntarCPF(callback) {
//     input.question("CPF do colaborador: ", (cpf) => {
//         if (!/^\d{11}$/.test(cpf)) {
//             console.log("Por favor, digite um CPF válido com 11 dígitos.");
//             return perguntarCPF(callback);
//         }
//         cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
//         callback(cpf);
//     });
// }

// function perguntarSalarioBruto(callback) {
//     input.question("Salário bruto: ", (salarioBrutoStr) => {
//         const salarioBruto = parseFloat(salarioBrutoStr);
//         if (isNaN(salarioBruto) || salarioBruto <= 0) {
//             console.log("Por favor, digite um valor válido para o salário bruto.");
//             return perguntarSalarioBruto(callback);
//         }
//         callback(salarioBruto);
//     });
// }


// function gerarFolhaPagamento() {
//     perguntarNome((nome) => {
//         perguntarCPF((cpf) => {
//             perguntarSalarioBruto((salarioBruto) => {

//                 const inss = calcularInss(salarioBruto);
//                 const impostoDeRenda = calcularImpostoDeRenda(salarioBruto);
//                 const salarioLiquido = calcularSalarioLiquido(salarioBruto);
//                 console.log(`--- Folha de pagamento ---\nNome: ${nome}\nCPF: ${cpf}\nSalário bruto: ${salarioBruto}\nINSS: ${inss}\nImposto de renda: ${impostoDeRenda}\nSalário líquido: ${salarioLiquido}`);

//                 const doc = new PdfDocument();
//                 doc.pipe(fs.createWriteStream('folha-de-pagamento-' + nome + '.pdf'))
//                 doc.fontSize(16)
//                     .text("--- Folha de pagamento ---")
//                     .text(`Nome: ${nome}`)
//                     .text(`CPF: ${cpf}`)
//                     .text('--- ---')
//                     .text(`Salario bruto: ${salarioBruto}`)
//                     .text(`INSS: ${inss}`)
//                     .text(`Imposto de renda: ${impostoDeRenda}`)
//                     .text('--- ---')
//                     .text(`Salario liquido: ${salarioLiquido}`);
//                 doc.end();
//             })
//         })
//     })
// }

// gerarFolhaPagamento()

const filtrarPares = require("./M01S02/Manipulacao_Basica_de_Arrays");
filtrarPares

const filtrarAdultos = require("./M01S02/Manipulacao_de_Objetos");
filtrarAdultos

const agruparPorCategoria = require("./M01S02/Agrupamento_de_Dados");
agruparPorCategoria

const contador = require("./M01S02/Funcoes_Que_Retornam_Funcoes");
let contador1 = contador()
console.log(contador1())
console.log(contador1())
console.log(contador1())

let contador2 = contador()
console.log(contador2())
console.log(contador2())