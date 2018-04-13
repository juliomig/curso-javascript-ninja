(function () {
  'use strict' //diretiva
  /*
  1. Envolva todo o conteúdo desse desafio em uma IIFE.
  2. Adicione a diretiva 'use strict';
  3. Crie um arquivo index.html e adicione esse script à ele.
  */

  /*
  Declare uma variável chamada `name` que receba seu primeiro nome.
  Mostre no console todas as letras do seu nome separadas, com a frase:
  - "[LETRA] é a [POSIÇÃO]ª letra do meu nome."
  Ex: no caso do nome ser "Fernando", deve mostrar as frases:
  - "F é a 1ª letra do meu nome."
  - "e é a 2ª letra do meu nome."
  E assim por diante, até a última.
  */
  console.log( 'As letras do seu nome:' );
  var name = 'Fernando';
  for(var i = 0, len = name.length; i < len; i++){
    console.log(name[i] + ' é a ' + (i + 1) + 'a. letra do meu nome.');
  }

  /*
  - Declare uma variável chamada `fullName`, que receba seu nome completo,
  escrito no formato de slug (caixa baixa e palavras separadas por um traço).
  Ex: o nome "Fernando Daciuk" ficaria "fernando-daciuk"
  - Faça a primeira letra de cada nome ficar em caixa alta, e troque o traço
  por um espaço.
  - Detalhe: o código que você escrever abaixo deve funcionar para qualquer
  nome, então fique à vontade para usar as artimanhas que já viu até agora no
  curso para fazer isso funcionar corretamente :)
  - Mostre no console o nome no formato slug, e o resultado final. Use um
  console.log para cada formato.
  */
  console.log( '\nNome convertido à partir de um slug:' );
  var fullName = 'fernando-daciuk-terceiro-junior'; //formato slug
  var newFullName = fullName.split('-').map(function(name){
      return name.charAt(0).toUpperCase() + name.slice(1);
  }).join(' ');
  // split separa os nomes e retorna um array
  // map percorre os itens do array e faz caixa alta na primeira letra
  // charAt(0) traz a primeira letra e toUpperCase faz caixa alta
  // e slice traz o restante do nome sem a primeira letra
  //join ' ' junta os nomes do array com espaço
  console.log(fullName);
  console.log(newFullName);

  /*
  - Crie um array com 5 nomes. Reduza esses nomes a uma única string, separando
  cada nome por vírgula. Entre o penúltimo e o último nome, o separador deve
  ser um "e". No final, concatene com a frase: " são meus amigos.".
  O resultado final deve ficar mais ou menos assim:
  - "João, Maria, Roberto, Pedro e Marcos são meus amigos."
  - Detalhe: o código abaixo deve funcionar com um array de qualquer tamanho.
  5 nomes foi somente uma sugestão ;)
  */
  console.log( '\nMeus amigos:' );
  var friends = ['Paulo', 'Marcos', 'Maria', 'Sandro', 'Felipe'];
  var phrase = friends.reduce(function(acumulado, atual, index) {
    var separator = friends.length - 1 === index ? ' e ' : ', ';
    // qdo o index for 4 - 1 = 3 significa que estará em Sandro e o separator
    // será igual ao ' e '', senão ', '
    return acumulado + separator + atual;
  }).concat( ' são meus amigos.');
  console.log(phrase);

  /*
  Usando o replace(), faça a string "Roberto" virar "Roberta".
  Mostre o resultado no console.
  */
  console.log( '\nEra "Roberto", agora é:' );

  console.log('Roberto'.replace('to', 'ta'));

  /*
  Mostre no console a parte "nando" da string "Fernando". Use o método que
  faz a busca do final para o início da string.
  */
  console.log( '\nParte de uma string:' );

  console.log('Fernando'.slice('Fernando'.lastIndexOf('nando')));
  // ou da forma abaixo:
  console.log('Fernando'.substring(8,3));
  /*
  Declare uma variável chamada `myName`, que receba o seu primeiro nome,
  escrito de forma natural.
  Mostre no console esse nome, mas com as letras intercalando entre maiúsculas
  e minúsculas.
  - Detalhe: o código abaixo deve funcionar da mesma forma para qualquer nome,
  de qualquer tamanho, escrito de qualquer forma.
  Ex.: Nomes que deveriam funcionar: "Fernando", "RoBertO", "gabriEla", etc.
  */
  console.log( '\nNome com letras intercaladas entre caixa alta e baixa:' );
  var myName = 'Julio';
  var newName = [];
  for( var i = 0, len = myName.length; i < len; i++) {
    newName.push(i % 2 === 0 ? myName[i].toUpperCase() : myName[i].toLowerCase() );
  }
  console.log(newName.join(''));

}) ();
