/*
  var - é um palavra chave em JavaScript usada para declarar uma variável com escopo de função ou global, dependendo do contexto em que é declarada.
  Variáveis declaradas com 'var' podem ser redeclaradas e atualizadas dentro de seu escopo.
*/

// EXEMPLO UTILIZANDO BLOCO
{
  {
    {
      {
        var varBloco = 'var bloco';
      }
    }
  }
}

console.log(varBloco);

// EXEMPLO UTILIZANDO BLOCO DE FUNCAO
function testeVar() {
  var varBlocoFuncao = 'var bloco funcao';
}

testeVar();
// console.log(varBlocoFuncao);

// Variáveis declaradas com 'var' podem ser redeclaradas e atualizadas dentro de seu escopo.
var numero = 1;
{
  var numero = 2
  console.log('dentro => ', numero);
}

console.log('fora => ', numero);

/*
  let - é uma palavra-chave em JavaScript usada para declarar variáveis com escopo de bloco, o que seginifica que a variável só é acessível  dentro do bloco em que foi declarada.
*/
var numero1 = 1;

{
  let numero1 = 2;
  console.log(numero1);
}

console.log(numero1)

// Variáveis declaradas com 'let' não podem ser redeclaradas no mesmo escopo, mas podem ser atualizadas.

var numero1 = 1;

{
  let numero1 = 2;
  console.log(numero1);

  // Apresenta erro de sitanxe
  // let numero1 = 3;
  numero = 3;
}

console.log(numero1)


/*
  const - é uma palavra-chave em JavaScript usada para declarar variáveis que não podem ser reatribuidas após a sua inicialização. Assim como 'let', 'const' tem escopo de bloco.
  O que siginifica que a variável é acessível apenas dentro do bloco onde foi declarada. No entanto, ao contrário de 'let', uma vez que uma variável é atribuida com 'const',
  seu valor não pode ser alterado.
*/

const numero2 = 1;

{
  console.log(numero2);

  // Apresenta erro de sitanxe
  // numero2 = 3;
}

/*
  Hoisting - é um comportamento em JavaScript onde a declaração de variáveis (usando 'var') e declarações de funções são movidas para o tpo do seu escopo antes da execução do código.
  No entanto, apenas as declarações são içadas, não as inicializações.
*/

console.log('a =', a);

var a = 2;

console.log('a =', a);

