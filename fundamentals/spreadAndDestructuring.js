/*
  Operador de desestruturação - é uma sintaxe que permite estrair valores de arrays ou propriedades de objetos em variáveis destintas de forma mais rápida e legível.
*/
console.log('desestruturação');

const objeto1 = {
  nome: 'Rafaella',
  idade: 26,
  contato: {
    endereco: {
      rua: 'Rua ABC',
      numero: 1000,
    },
    telefone: '62 9 9999 - 9999'
  }
}

// desestruturação
const { contato } = objeto1;

// desestruturação aninhada
const { contato: { telefone, endereco } } = objeto1;
const { contato: { endereco: { numero }}} = objeto1;

console.log('contato', contato);
console.log('endereco', endereco);
console.log('telefone', telefone);
console.log('numero', numero);

// desestruturação
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [n1, n2, n3, n4, , n5, , n7] = array1;

console.log(n1, n2, n3, n4, n5, n7);

// desestruturação aninhada
const array2 = [[1, 2, 3, 4], [5, 6, 7, 8, 9]];
const [, [, nota1]] = array2;

console.log(nota1);

// destruturação em funções com objetos
function rand({ min = 0, max = 1000}) {
  const valor = Math.random() * (min - max) + min;
  return Math.floor(valor);
}

const obj = { min: 40, max: 50}
console.log(rand(obj));

/*
  Operador spread - é usado para espalhar os elementos de um array ou as propriedades de um objeto em outro array ou objeto.
*/

console.log('spread');

const array3 = [1, 2, 3, 4, 5];
const array4 = [...array3];

array3.push(6);
console.log(array3);
console.log(array4);

const objeto3 = {
  cliente: 'Rafaella',
  idade: 26,
};

console.log(objeto3);

const objeto4 = {...objeto3, idade: 24};

console.log(objeto4);