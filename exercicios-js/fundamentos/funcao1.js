// Funcao sem retorno

function imprimirSoma(a, b) {
    console.log(a+b)
}

imprimirSoma(2,3)

imprimirSoma(2) // aqui a recebe 2 e b recebe undefined, logo o resultado sera NaN (Not a Number)

imprimirSoma(2,3,10,14,16) // ele considera somente os dois primeiros parâmetros e ignora os demais

// Funcao com retorno

function soma(a,b=1) {
    return a+b
}

console.log(soma(2,3))
console.log(soma(2)) //na resposta ele considera o valor atribuido para b
