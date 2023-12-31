// Programa principal
// POO = Programação Orientada a Objetos

// classes = são modelos ou modes de objetos
// objetos = são abstrações ou representações de "coisas" que existem no mundo real
// objeto = instância ou objeto do tipo | objeto é um tipo de dados

//! Aula 47 - Métodos acessores get e set - são usados para controlar a manipulação de atribuição e acesso aos valores que fazem parte dos atributos das classes.

class Pessoa
{
    //? atributos = variáveis ou características
    _nome // tipo String - o underline está indicando que os atributos são protegidos (privados)
    _idade // tipo Integer
    _peso  // tipo Float ou Real
    _altura // tipo Float ou Real
    _imc
    static totalPessoas = 0 // atributo estático ou da classe

    //! métodos = funções ou comportamentos
    // método construtor
    constructor (nome, idade, peso, altura) {
        this._nome = nome
        this._idade = idade
        this._peso = peso
        this._altura = altura
        this._imc = this._peso / (this._altura * this._altura)
        Pessoa.totalPessoas += 1 // contador com incremento
    }

    //! set imc
    calculaImc(){
        return (this._peso / (this._altura * this._altura)).toFixed(2)
    }

    //! get = pegar
    get nome() {
        return this._nome
    }

    get idade() {
        return this._idade
    }

    get peso() {
        return this._peso
    }

    get altura() {
        return this._altura
    }

    get imc(){
        return this._imc
    }

    get totalPessoas(){
        return Pessoa.totalPessoas
    }

    //! set = configurar, editar, alterar
    set nome(novoNome){
        this._nome = novoNome
    }

    set idade(novaIdade){
        this._idade = novaIdade
    }

    set peso(novoPeso){
        this._peso = novoPeso 
    }

    set altura(novaAltura){
        this._altura = novaAltura
    }
}

//* criar novo objeto a partir da class, instanciar
let pessoa1 = new Pessoa('Cristiano Barbosa', 37, 85.5, 1.82)
let pessoa2 = new Pessoa('Inácia Barbosa', 64, 63.5, 1.63)
let pessoa3 = new Pessoa('Andreza Barbosa', 20, 45.3, 1.41)
let pessoa4 = new Pessoa('Edilma Barbosa', 50, 63.5, 1.52)
/*
console.log(pessoa1)
console.log(pessoa2)
*/
//! atribuir valores para os atributos de um objeto

//todo - Nesta aula, foi visto que não é correto criar os objetos com valores inicialmente indefinidos e depois atribuir aqui os valores. Fere alguns princípios de segurança. Usa-se o método constructor.
// pessoa1.nome = 'Cristiano'
// pessoa1.idade = 40
// pessoa1.peso = 84.5
// pessoa1.altura = 1.76

// pessoa2.nome = 'Maria'
// pessoa2.idade = 63
// pessoa2.peso = 70.5
// pessoa2.altura = 1.63

// console.log(pessoa1)
// console.log(pessoa2)
// console.log(pessoa3)
// console.log(pessoa4)

console.log(Pesssoa.totalPessoas)