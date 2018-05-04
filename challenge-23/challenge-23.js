(function (win, doc) {
'use strict';
  /*
  Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
  As regras são:

  - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
  diretamente;
  - O input deve iniciar com valor zero;
  - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
  - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
  multiplicação(x) e divisão(÷);
  - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
  que irá limpar o input, deixando-o com valor 0;

  - A cada número pressionado, o input deve atualizar concatenando cada valor
  digitado, como em uma calculadora real;
  - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
  operação no input. Se o último caractere no input já for um símbolo de alguma
  operação, esse caractere deve ser substituído pelo último pressionado.
  Exemplo:
  - Se o input tem os valores: "1+2+", e for pressionado o botão de
  multiplicação (x), então no input deve aparecer "1+2x".
  - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
  input;
  - Ao pressionar o botão "CE", o input deve ficar zerado.
  */

  var $visor = doc.querySelector('[data-js="visor"]');
  var $buttonsNumbers = doc.querySelectorAll('[data-js="button-number"]');
  var $buttonsOperations = doc.querySelectorAll('[data-js="button-operation"]');
  //var $buttonCE = doc.querySelector('[data-id="button-operation-ce"]'); mudou
  var $buttonCE = doc.querySelector('[data-js="button-ce"]');
  var $buttonEqual = doc.querySelector('[data-js="button-equal"]');

  //console.table($buttonsNumbers); para teste se traz os botões acima
  //ou console.log($buttonsNumbers);

  //*obs abaixo se utilizarmos $buttonsNumber.forEach(function (button) {} )
  //na linha 40 ao invês do Array.prototype dará erro,
  //retornando que forEach não é uma função de $buttonsNumber
  //logo, temos que utilizar o Array.prototype passando o $buttonsNumber
  //como parâmetro this obtendo assim as características/propriedades
  //do obj array (aulas modulo 21)

  //atrelando eventos aos botões
  Array.prototype.forEach.call($buttonsNumbers, function (button) {
    //console.log(button); para teste
    button.addEventListener('click', handleClickNumber, false);
  });

  Array.prototype.forEach.call($buttonsOperations, function (button) {
    //console.log(button); para teste
    button.addEventListener('click', handleClickOperation, false);
  });

  $buttonCE.addEventListener('click', handleClickCE, false);

  $buttonEqual.addEventListener('click', handleClickEqual, false);

  function handleClickNumber() {
    //console.log(this); //this representa o botão teste ok
    $visor.value += this.value;
  }

  function handleClickOperation() {
    $visor.value = removeLastItemIfIsAnOperator($visor.value);
    $visor.value += this.value;
  }

  function handleClickCE() {
    $visor.value = 0;
  }

  function isLastItemAnOperation(number) {
    var operations = ['+', '-', 'x', '÷'];
    var lastItem = number.split('').pop();
    return operations.some(function(operator) {
        return operator === lastItem;
    });
  }
    //console.log(lastItem); teste ok

  function removeLastItemIfIsAnOperator(number) {
    if(isLastItemAnOperation(number)) {
      return number.slice(0, -1);
    }
    return number;
  }

  function handleClickEqual() {
    $visor.value = removeLastItemIfIsAnOperator($visor.value);
    var allValues = $visor.value.match(/\d+[+x÷-]?/g);
    $visor.value = allValues.reduce(function(accumulated, actual) {
      //console.log(accumulated.slice(0, -1) ); test ok
      var firstValue = accumulated.slice(0, -1);
      var operator = accumulated.split('').pop();
      var lastValue = removeLastItemIfIsAnOperator(actual);
      var lastOperator = isLastItemAnOperation(actual) ?
        actual.split('').pop() :
        '';

      //console.log(firstValue, operator); //test ok
      switch(operator) {
        case '+':
          return Number(firstValue) + Number(lastValue) + lastOperator;
        case '-':
          return Number(firstValue) - Number(lastValue) + lastOperator;
        case 'x':
          return Number(firstValue) * Number(lastValue) + lastOperator;
        case '÷':
          return Number(firstValue) / Number(lastValue) + lastOperator;
      }
    });


    //console.log(result); test ok

    //console.log(allValues); test ok
    //console.log($visor.value.match(/(?:\d+)|[+x÷-]/g) ); teste ok
    //traz um array com todos os numeros
    //a23145
  }


})(window, document);
