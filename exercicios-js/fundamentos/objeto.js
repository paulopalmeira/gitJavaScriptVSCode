/* um par de chaves representa um OBJETO
primeiro o objeto foi criado vazio
depois foi atribuido um nome
*/
const prod1 = {}
prod1.nome = 'Celular Ultra Mega'

// atribuimos um preço
prod1.preco = 4998.90

// agora usando uma notação com colchete (mesma coisa do acima)
prod1['Desconto legal'] = 0.40

console.log(prod1)

// com notação literal já criando chave e valor diretamente

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90 
}

console.log(prod2)