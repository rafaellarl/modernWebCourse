/*
  OBJETO - É uma coleção de propriedades, onde cada propriedade é definida como um par de chave e valor. As chavas são sempre strings ou símbolos,
  e os valores podem ser de qualquer tipo. Incluindo outros objetos.

  Em JavaScript, todas as funções são objetos, mas nem todos os objetos são funções. A principal diferença é que funções podem ser chamadas e executar blocos de código,
  enquanto objeto são estrutura de dados que armazenam coleções de pares chaves-valor. Funções podem ter propriedades e métodos como qualquer objeto, mas também possuem a
  capacidade de executar e possivelmente retornar um valor. Em contraste, objetos são usados principalmente para organizar dados e representar entidades com atributos e comportamentos.
*/

// Quando buscamos o tipo de um Objeto temos como retorno um Função.
console.log(typeof Object);

// Quando buscamos o tipo da instância de um objeto temos como retorno um Objeto
console.log(typeof  new Object);

// Esse mesmo comportamento temos com as funções e classes, por exemplo:
const Cliente = function() {};
console.log(typeof Cliente);
console.log(typeof  new Cliente);

class Produto {};
console.log(typeof Produto);
console.log(typeof  new Produto);