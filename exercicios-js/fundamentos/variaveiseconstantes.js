// let é mais moderno, mas var também funfa

var a = 3;
let b = 4;

var a = 30;
b = 40;

console.log(a,b);

a = 300;
b = 400;
console.log(a+b);

const c = 5;
// c = 50 vai dar erro pq a constante não pode ser alterada
console.log(c);
