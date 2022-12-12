// Armazenando uma função dentro de uma variável ou constante

const imprimirSoma = function (a,b) {
    console.log(a+b)
}

imprimirSoma(2,3)

//Armazenando uma funcao ARROW em uma variável

const soma = (a,b) => {
    return a+b
}

console.log(soma(2,3))


// retorno implícito
const subtracao = (a,b) => a-b
console.log(subtracao(5,3))