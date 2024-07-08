/*
  Quase tudo é função
*/
console.log(typeof Object);

/*
  Exemplos básicos de funções
*/

// Função básica
function imprimeSoma(a, b) {
  const soma = a + b;
  console.log(soma);
}

imprimirSoma(2, 6);

// Armazenando uma função em uma variável
const imprimeDivisao = function (a, b) {
  const divisao = a / b;
  console.log(divisao);
}

imprimeDivisao(4, 2);

// Arrow function
const imprimeSubtracao = (a, b) => {
  const subtracao = a - b;
  console.log(subtracao);
};

imprimeSubtracao(6, 5);

// Arrow function com retorno implicito
const imprimeSubtracao2 = (a, b) => a - b;

console.log(imprimeSubtracao2(6, 5));