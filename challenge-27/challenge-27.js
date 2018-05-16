(function () {
  'use strict';
  /*
  Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
  métodos semelhantes aos que existem no array, mas que sirvam para os
  elementos do DOM selecionados.
  Crie os seguintes métodos:
  - forEach, map, filter, reduce, reduceRight, every e some.

  Crie também métodos que verificam o tipo do objeto passado por parâmetro.
  Esses métodos não precisam depender de criar um novo elmento do DOM, podem
  ser métodos estáticos.

  Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
  no objeto, como nos exemplos abaixo:
  DOM.isArray([1, 2, 3]); // true
  DOM.isFunction(function() {}); // true
  DOM.isNumber('numero'); // false

  Crie os seguintes métodos para verificação de tipo:
  - isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
  O método isNull deve retornar `true` se o valor for null ou undefined.
  */

  function DOM(elements) {
    this.element = document.querySelectorAll(elements);
  }

  DOM.prototype.on = function on(eventType, callback) {
    Array.prototype.forEach.call(this.element, function(element) {
      element.addEventListener(eventType, callback, false);
    });
  };

  DOM.prototype.off = function off(eventType, callback) {
    Array.prototype.forEach.call(this.element, function(element) {
      element.removeEventListener(eventType, callback, false);
    });
  };

  DOM.prototype.get = function get() {
    return this.element;
  };
  // parte 1 do exercício
  //Crie os seguintes métodos:
  //- forEach, map, filter, reduce, reduceRight, every e some.

  DOM.prototype.forEach = function forEach() {
    return Array.prototype.forEach.apply(this.element, arguments );
  };

  //para teste do forEach para selecionar todos os links do pag HTML
  //var $a = new DOM('[data-js="link"]');
  //console.log($a);
  //$a.forEach(function(item) {
    //console.log(item);
    //console.log(item.firstChild); nó de texto
  //   console.log(item.firstChild.nodeValue); //somente o texto do link
  // });
  // fim do forEach

  DOM.prototype.map = function map() {
    return Array.prototype.map.apply(this.element, arguments );
  };

  DOM.prototype.filter = function filter() {
    return Array.prototype.filter.apply(this.element, arguments );
  };

  DOM.prototype.filter = function filter() {
    return Array.prototype.filter.apply(this.element, arguments );
  };

  DOM.prototype.reduce = function reduce() {
    return Array.prototype.reduce.apply(this.element, arguments );
  };

  DOM.prototype.reduceRight = function reduceRight() {
    return Array.prototype.reduceRight.apply(this.element, arguments );
  };

  DOM.prototype.every = function every() {
    return Array.prototype.every.apply(this.element, arguments );
  };

  DOM.prototype.some = function some() {
    return Array.prototype.some.apply(this.element, arguments );
  };

  //teste das funções criadas DOM - map
  // var $a = new DOM('[data-js="link"]');
  // console.log($a);
  // var dataJs = $a.map(function(item) {
  //   return item.getAttribute('data-js');
  // });
  // console.log(dataJs); //retorna os atributos link

  //teste das funções criadas DOM - reduce
  // var $a = new DOM('[data-js="link"]');
  // console.log($a);
  // var dataJs = $a.reduce(function(acc, item, index) {
  //   return acc + ' ' + item.getAttribute('data-js') + index;
  // }, 0); //0 como valor acc acumulado inicial
  // console.log(dataJs);

  // Parte 2 do exercício
  // Crie os seguintes métodos para verificação de tipo:
  // - isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.

  DOM.prototype.isArray = function isArray(param ) {
    return Object.prototype.toString.call(param ) === '[object Array]';
  };
  //teste isArray
  //console.log(DOM.prototype.isArray([1, 2, 3]) ); // ou instanciando o DOM
  // var dom = new DOM();
  // console.log( dom.isArray([1, 2, 3]) );

  DOM.prototype.isObject = function isObject(param ) {
    return Object.prototype.toString.call(param ) === '[object Object]';
  };

  DOM.prototype.isFunction = function isFunction(param ) {
    return Object.prototype.toString.call(param ) === '[object Function]';
  };

  DOM.prototype.isNumber = function isNumber(param ) {
    return Object.prototype.toString.call(param ) === '[object Number]';
  };

  DOM.prototype.isString = function isString(param ) {
    return Object.prototype.toString.call(param ) === '[object String]';
  };

  DOM.prototype.isBoolean = function isBoolean(param ) {
    return Object.prototype.toString.call(param ) === '[object Boolean]';
  };

  DOM.prototype.isNull = function isNull(param ) {
    return Object.prototype.toString.call(param ) === '[object Null]'
    || Object.prototype.toString.call(param ) === '[object Undefined]';
  };

  //teste isNull
  // var dom = new DOM();
  // console.log( dom.isNull() );
  //console.log( dom.isNull([1, 2, 3]) );

  //teste isFunction
  var dom = new DOM();
  console.log( dom.isFunction(function() {}) );

})();
