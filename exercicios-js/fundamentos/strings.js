const escola = "LILA";

// para buscar qual a letra num determinado ponto da string - começa no zero
// veja que a string LILA seria 0L 1I 2L 3A
console.log(escola.charAt(3));

// para saber o valor de um determinado ponto da string na Tabela ASCII
console.log(escola.charCodeAt(2));

// para saber em qual ponto da String está um determinado caracter
// veja que o caracter L aparece em 1 (pq o 0 é o L)

console.log(escola.indexOf('I'));



console.log(escola.substring(1));
console.log(escola.substring(0,3));

// vamos concatenar

console.log("Catiola ".concat(escola));

// jogar o valor para a variável

var animal = "Catiola ".concat(escola).concat('!');
console.log(animal);

// substituindo um caracter dentro de um texto

console.log(escola.replace(2, 'o'));

// converter string em array
// o que eu vou usar no split como separador? no caso, a vírgula 
console.log('Jesus, Maria, José' .split(','));


