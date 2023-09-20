let carros = ['Fusca', 'Brasília', 'Monza', 'Chevette']

for (let i = 0; i < carros.length; i++) {
    console.log(`${carros[i]}`)
}

console.log('-=-=-=-=-=-=-=-=--=-=-=-=')

carros.forEach((carro, pos)=>{
    console.log(`${carro} na posição ${pos + 1}`)
})
