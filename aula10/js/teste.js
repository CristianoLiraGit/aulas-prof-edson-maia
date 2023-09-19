function somar(a=0, b=0){
    return a + b
}

// console.log(somar(5, 5))
console.log(`A soma é ${somar(5, 5)}`)

const multiplica = (a, b) => { // arrow function
    return a * b // não precisa usar return. Chamei a função sem usar o return e deu undefined.
}

console.log(multiplica(5, 3))
// -=-=-=-=-=-=-=-=-= Outra função -=-=-=-=-=-=-=-=-=-=-=-
function parimp(n){
    if(n % 2 == 0){
        return "par"
    }else {
        return 'ímpar'
    }
}
let res = parimp(7)
console.log(res)