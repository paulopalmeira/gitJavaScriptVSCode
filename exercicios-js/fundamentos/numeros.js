const peso1 = 1.0;
const peso2 = Number("2.0");

console.log(peso1, peso2);

// vamos checar se é número - se sim, retorna true
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

// operação com as variáveis

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);
console.log(media);


console.log(media.toFixed(2)); // limitar o número de casas decimais

console.log(media.toString(2)); // converte em binário

console.log(typeof media); // vai te falar que é number

console.log(typeof Number); // aqui ele vai te falar que é function



