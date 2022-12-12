// vamos criar uma variável, mas sem inicializá-la
let valor

// ela é entendida, portanto, como Undefined 
console.log (valor)

// se eu tentar ler uma variavél que não existe? o Erro retorna IS NOT DEFINED

// console.log(valor2)

// UNDEFINED é diferente de IS NOT DEFINED


// agora vamos definir a variavel valor para não apontar pra nenhum lugar de memória - está vazia
valor = null
console.log(valor)

// console.log(valor.toString())    //vai dar erro

const produto = {}
console.log(produto.preco)

console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
// melhor usar delete produto.preco

console.log(produto)

produto.preco = null // sem preço
console.log(produto)



