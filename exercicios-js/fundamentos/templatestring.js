const nome = "Caroline"
const concatenacao = "Olá " + nome + "!" // veja que tem que ficar tudo na mesma linha
console.log(concatenacao)

// já a técnica template permite várias linhas. Ex:

const template=`
    Olá
    ${nome}!`

console.log(concatenacao, template)

// expressões...

console.log(`1 + 1 = ${1+1}`)

// transformando em maiúsculo

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up(nome)}`)

