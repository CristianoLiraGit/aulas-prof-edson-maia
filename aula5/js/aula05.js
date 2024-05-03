/* Arquivo JS aula 05 Objetos */

// CRIAR OBJETO
let pessoa = {
    nome   : 'Edson',
    idade  : 40,
    peso   : 83.5,
    altura : 1.75,
    doador : false, // a vírgula aqui no final não é obrigatória
}

let produtos = {
    descricao : [],
    preco : []
}

const carros = {
    marca : ['Ford', 'Fiat', 'GM'],
    modelo : ['Ka', 'Uno', 'Corsa'],
    ano : [1999, 2005, 2010] 
}

// como acessar uma propriedade usando .
/*
pessoa.nome
pessoa.idade
pessoa.peso
pessoa.altura
*/

// ACESSAR PROPRIEDADE usando ['']
/*
pessoa['nome']
pessoa['idade']
pessoa['peso']
pessoa['altura']
*/

// OPERAÇÃO IMC = peso / (altura * altura)
let imc = pessoa.peso / (pessoa.altura * pessoa.altura)

// .toFixed(X)
// limita o numero de casas decimais
console.log("IMC " + imc.toFixed(2))

// ALTERAR/ATUALIZAR VALOR de propriedade
pessoa.nome = "Edson Maia"
produtos.descricao = ['Arroz']
produtos.descricao.unshift('Farinha')
produtos.preco = [4.99]
produtos.preco.unshift(10.50)

// Usando spreed operator
produtos.descricao = [...produtos.descricao, 'Feijão', 'Trigo']
produtos.preco = [...produtos.preco, 9.99, 4.79]

// Usando spreed operator em objetos const
carros.marca  = [...carros.marca, 'WV']
carros.modelo = [...carros.modelo, 'Fusca']
carros.ano    = [...carros.ano, '1979']

/*
RESOLUÇÃO DOS ALUNOS:

// Desafio 01 - Informações
let pessoa = {
    nome: 'Fedor Vladimirovich Emelianenko',
    nacionalidade: 'Russo',
    idade: 44,
    peso: 106,
    altura: 1.83,
}
document.write(`<h2>Informações</h2> <br>`)
document.write(`Lutador: ${pessoa.nome} <br>`)
document.write(`Nacionalidade: ${pessoa.nacionalidade} <br>`)
document.write(`Idade: ${pessoa.idade} anos <br>`)
document.write(`Peso: ${pessoa.peso} kg <br>`)
document.write(`Altura: ${pessoa.altura} m <br>`)

// Desafio 02 - Frase do Dia
const dia = 10
const mes = 9
const ano = 2021
const frase = "Seja curioso. Leia de tudo. Tente coisas novas."
const autor = "Aron Swartz"

document.write(`<h2>Frase do dia</h2> <br>`)
document.write(`${dia}/${mes}/${ano} <br>`);
document.write(`${frase} <br>`)
document.write(`${autor} <br>`)

// Desafio 03 - Array de Meses do Ano
const data = {
    mes: ['Mar', 'Jun', 'Set', 'Dez'],
}

document.write(`<h2>Array de Meses do Ano</h2> <br>`)
document.write(`${data.mes[0]}, ${data.mes[1]}, ${data.mes[2]}...`)

// Desafio 04 - Objeto Jogo
let game = {
    jogo : 'League Of Legends - LOL',
    dev : 'Riot Games',
    ano : 2009
}

document.write(`<h2>Objeto Jogo</h2> <br>`)
document.write(`Jogo: ${game.jogo} <br> Desenvolvedor: ${game.dev} <br> Lançamento: ${ano}`)

*/