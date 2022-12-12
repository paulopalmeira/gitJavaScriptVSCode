// criando array

const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])

// não existe o item 4 no array valores... o que o javascript retorna? UNDEFINED
console.log(valores[4])

// não existe o item 4 no array valores... criamos o item 5... ao listar o array: <1 empty item>
valores[5] = 10
console.log(valores)

// agora vamos dar um valor no item 4 do array valores
valores[4] = 'Lila'
console.log(valores)

// quantos elementos temos no array valores? 6 ...
console.log(valores.length)

// inserir vários itens no mesmo array com o push
valores.push({id: 3}, false, null)
console.log(valores)

// o pop tira o último valor do array
console.log(valores.pop())

delete valores[0]
console.log(valores)
