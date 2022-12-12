// par nome/valor

const saudacao = "Oi"

function exec() {
    const saudacao = "E aiiii"
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: "Rua Exemplo",
        numero: 123
    } 
}

console.log(saudacao)
console.log(exec())
console.log(cliente)