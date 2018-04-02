/*
Declare uma variável chamada `sum` e atribua a ela uma função chamada
`calculateSum`. A função deve receber dois parâmetros e retornar a soma
desses parâmetros.
*/
var sum = function calculateSum(x, y) {
  return x + y;
};

/*
Invoque a função criada acima, passando dois números que serão somados, e mostre
o resultado no console, com a frase:
"A soma de [VALOR 1] e [VALOR2] é igual a [RESULTADO]."
*/
var vx = 5;
var vy = -2;
console.log( 'A soma de ' + vx  + ' e ' + vy  + ' é igual a ' + sum(vx, vy) + '.' );
// não conseguimos utilizar calculateSum no lugar de sum diretamente.
// calculateSum foi passada para a variável sum, não sendo visível externamente
// Se chamarmos calculateSum(1, 2); //ReferenceError: calculateSum is not defined
// Mas, console.log(sum(1, 2)); // 3 estará OK
/*
Mostre no console o nome da função criada acima, com a frase:
"O nome da função que faz a soma é [NOME DA FUNÇÃO]."
*/
console.log('O nome da função que faz a soma é ' + sum.name + '.');
/*
Crie uma função literal chamada `showName`. Essa função deve retornar o
seu nome.
*/
function showName() {
  return 'Júlio Sá';
}

/*
Declare uma variável chamada `varShowName` que recebe a função criada acima.
*/
varShowName = showName;
// acima estamos passando a função para a variável sem invocá-la.
// se invocassemos a variável receberia o resultado da função.

// console.log(varShowName); //retornará: [Function: showName]
/*
Usando a variável criada acima, mostre no console o nome e o retorno da função
atribuída a ela, com a seguinte frase:
"A função [NOME DA FUNÇÃO] retorna [RETORNO DA FUNÇÃO]."
*/
console.log('A função ' + varShowName.name + ' retorna ' +
varShowName() +'.');

/*
Crie uma função literal chamada `calculator`, que funcione assim:
- A função deve receber um parâmetro que dirá qual operação matemática ela
vai efetuar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;
- Essa função deve retornar uma segunda função que fará o seguinte:
  - Essa segunda função deve receber dois parâmetros;
  - Esses dois parâmetros serão os operandos usados na operação matemática;
  - O retorno dessa segunda função é a operação matemática completa, com a frase:
  "Resultado da operação: [NUMERO1] [OPERADOR] [NUMERO2] = [RESULTADO]."
  - Se o operador não for válido, retornar a frase:
  "Operação inválida."
*/

function calculator (operador) {
  return function operacao(x, y) {
    var resultado;
    switch(operador) {
      case '+' :
        resultado = x + y;
        break;
      case '-' :
        resultado = x - y;
        break;
      case '*' :
        resultado = x * y;
        break;
      case '/' :
        resultado = x / y;
        break;
      case '%' :
        resultado = x % y;
        break;
      default :
        return 'Operação inválida. ' + x + ' ' + operador + ' ' + y +
        ' = ' + resultado + '.';
    }
      return 'Resultado da operação: ' + x + ' ' + operador + ' ' + y +
      ' = ' + resultado + '.';
  };
}

/*
Declare uma variável chamada `sum`, que receberá a função acima, passando como
parâmetro o operador de soma.
*/
var sum = calculator('+');

/*
Agora `sum` é uma função. Mostre no console a soma de dois números, usando ela.
*/
console.log(sum(7, 8));

/*
Agora, declare algumas variáveis com os nomes `subtraction`, `multiplication`,
`division` e `mod`, e atribua a elas a função `calculator`, passando o operador
correto por parâmetro para cada uma delas.
*/
var subtraction = calculator('-');
var multiplication = calculator('*');
var division = calculator('/');
var mod = calculator('%');
var teste = calculator('ff');

/*
Faça uma operação com cada uma das funções criadas acima, mostrando o resultado
no console.
*/
console.log(subtraction(5, 2));
console.log(multiplication(20, 8));
console.log(division(15, 3));
console.log(mod(50, 10));
console.log(teste(10, 20));
