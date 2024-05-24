const pessoas = [{
    nome: 'João',
    idade: 25
},
{
    nome: 'Maria',
    idade: 18
},
{
    nome: 'Pedro',
    idade: 16
},
{
    nome: 'Ana',
    idade: 17
}
]

const filtrarAdultos = (pessoas) => {
    let adultos = []
    pessoas.map((pessoa) => {
        pessoa.idade >= 18 ? adultos.push(pessoa) : null
    })
    return adultos
    }

console.log(filtrarAdultos(pessoas))

module.exports = filtrarAdultos