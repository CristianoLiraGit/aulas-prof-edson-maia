const objs = [ 
    {
        nome: 'Cristiano',
        idade: 37,
        esta_trabalhando: true,
        detalhes_profissão: {
            profissão: 'Programador',
            empresa: 'Empresa X'
        },
        hobbies: ['tocar guitarr', 'Correr', 'Programar'],
    },

    {
        nome: 'Natália',
        idade: 30,
        esta_trabalhando: false,
        detalhes_profissão: {
            profissão: null,
            empresa: null,
        },
        hobbies: ['Ler', 'Academia', 'Escovar cabelos'],
    },
    
]

// console.log(objs)

// JSON
// converter objeto para json (Aqui é enviando os dados para a API)
const jsonData = JSON.stringify(objs)

// console.log(objs) // Vai imprimir no console dois arrays de objetos

console.log(jsonData) // Vai imprimir no console os objetos com o formato de json válido.
console.log(`O tipo é ${typeof jsonData}.`)

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Receber os dados da API e transformá-los em objeto do JavaScript (o JavaScript não lida com JSON)
// Converter JSON para objeto:
const objData = JSON.parse(jsonData)
console.log(`O tipo é ${typeof objData}.`)

objData.map((pessoa, chave)=>{
    console.log(pessoa.nome, chave)
    console.log(`Temos ${pessoa.nome} na posição ${chave}.`)
})