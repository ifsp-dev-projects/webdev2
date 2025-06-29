# Laços de Repetição e Arrays em JavaScript

Este repositório contém uma explicação detalhada sobre os conceitos de laços de repetição e arrays na linguagem JavaScript, abordando suas sintaxes, funcionalidades e exemplos práticos. O objetivo é fornecer um guia claro para entender como iterar sobre dados e manipular coleções de forma eficiente.

---

## 🧠 Conceitos Abordados

### 1. Laços de Repetição

#### 1.1. `for...of`

**Conceito:**
O loop `for...of` foi introduzido no ECMAScript 2015 (ES6) e é projetado para iterar diretamente sobre os **valores** de objetos iteráveis. Isso inclui estruturas como `Array`, `String`, `Map`, `Set`, `TypedArray`, e o objeto `arguments`. Sua principal vantagem é a simplicidade e a clareza ao acessar os elementos em ordem, sem a necessidade de manipular índices. Ele **não funciona** com objetos comuns (`Object`) a menos que eles implementem o protocolo iterador.

**Sintaxe:**

```javascript
for (variavel of iteravel) {
  // declaração a ser executada para cada valor
}
1.2. for...in
Conceito:
O laço for...in foi originalmente criado para iterar sobre as propriedades enumeráveis de um objeto. Ele retorna as chaves (ou nomes das propriedades) do objeto, que podem então ser usadas para acessar os valores correspondentes (ex: objeto[chave]). Embora possa ser usado em arrays, não é a forma recomendada, pois pode iterar sobre propriedades não numéricas herdadas da cadeia de protótipos e não garante a ordem numérica dos índices. É mais adequado para iterar sobre chaves de objetos.

Sintaxe:

JavaScript

for (variavel in objeto) {
  // bloco de código a ser executado
}
2. Métodos de Array de Alta Ordem
2.1. forEach
Conceito:
O método forEach() é um método de array que executa uma função callback uma vez para cada elemento do array. Ele percorre o array do início ao fim e, a cada iteração, disponibiliza o valor do elemento, seu índice e uma referência ao próprio array. O forEach é usado para executar efeitos colaterais (como imprimir valores, modificar objetos existentes) e não retorna um novo array.

Sintaxe:

JavaScript

array.forEach(function(valorAtual, indice, array) {
  // bloco de instruções
});

// Ou usando arrow function:
array.forEach((valorAtual, indice, array) => {
  // bloco de instruções
});
Parâmetros da Callback:

valorAtual: O elemento sendo processado no array.

indice (opcional): O índice do elemento sendo processado.

array (opcional): O array sobre o qual forEach foi invocado.

2.2. map
Conceito:
O método map() é uma função iterativa de array que cria um novo array com os resultados da chamada de uma função callback para cada elemento no array original. Sua principal característica é a transformação: ele pega cada elemento, aplica uma lógica definida na callback e retorna um novo elemento, construindo assim um array completamente novo sem modificar o original. Ele ignora posições vazias em arrays esparsos.

Sintaxe:

JavaScript

array.map(function callback(elemento, indice, arrayOriginal) {
  // código que retorna o novo valor para este elemento
}, thisArg);
Parâmetros da Callback:

elemento: O elemento sendo processado no array.

indice (opcional): O índice do elemento sendo processado.

arrayOriginal (opcional): O array sobre o qual map foi invocado.

thisArg (opcional): O valor a ser usado como this ao executar a função callback.

2.3. filter
Conceito:
O método filter() é um método de array que cria um novo array contendo apenas os elementos do array original que "passam" em um teste implementado pela função callback. Essencialmente, a callback deve retornar um valor truthy para incluir o elemento no novo array ou um valor falsy para excluí-lo. O filter() é ideal para selecionar um subconjunto de elementos com base em uma condição.

Sintaxe:

JavaScript

array.filter(function(currentValue, index, array) {
  // condição que retorna true ou false
}, thisArg);
Parâmetros da Callback:

currentValue: O elemento sendo processado no array.

index (opcional): O índice do elemento sendo processado.

array (opcional): O array sobre o qual filter foi invocado.

thisArg (opcional): O valor a ser usado como this ao executar a função callback.

2.4. reduce
Conceito:
O método reduce() é um método poderoso de array que executa uma função acumuladora (callback) em cada elemento do array (da esquerda para a direita) para reduzir o array a um único valor. Esse "valor único" pode ser um número, um objeto, uma string, ou qualquer outra coisa que a lógica da callback produza. Ele é frequentemente usado para somar, contar, agrupar ou transformar a estrutura de dados de um array.

Sintaxe:

JavaScript

array.reduce(function(acumulador, valorAtual, indice, array) {
  // bloco de instruções
}, valorInicial);
Parâmetros da Callback:

acumulador: O valor retornado da última invocação da callback, ou o valorInicial (se fornecido).

valorAtual: O elemento sendo processado no array.

indice (opcional): O índice do elemento sendo processado.

array (opcional): O array sobre o qual reduce foi invocado.

valorInicial (opcional): Um valor a ser usado como o primeiro argumento (acumulador) na primeira chamada da função callback. Se não for fornecido, o primeiro elemento do array será usado como valorInicial, e valorAtual começará no segundo elemento.

3. Arrays
3.1. Conceito de Arrays
Conceito:
Um Array em JavaScript é um objeto global que funciona como uma coleção ordenada de elementos. Os arrays são estruturas de dados versáteis que permitem armazenar múltiplos valores em uma única variável. Os elementos são acessados por um índice numérico baseado em zero (o primeiro elemento está na posição 0). Arrays são dinâmicos, ou seja, seu tamanho pode ser ajustado a qualquer momento, e podem conter elementos de tipos de dados variados.

Sintaxe:

JavaScript

// Usando literais de array (forma mais comum e recomendada)
const meuArray = [elemento1, elemento2, ..., elementoN];

// Usando o construtor Array
const outroArray = new Array(elemento1, elemento2, ..., elementoN);

// Array vazio
const arrayVazio = [];
3.2. Arrays como Objetos
Conceito:
Em JavaScript, os arrays são, na verdade, objetos especiais. Eles herdam propriedades e métodos tanto do protótipo Array.prototype quanto do Object.prototype. Embora tenham comportamentos específicos para lidar com índices numéricos e a propriedade length (que é atualizada automaticamente), eles são, em sua essência, objetos onde as "chaves" são os índices numéricos (convertidos para strings internamente). Isso significa que, assim como outros objetos, podemos adicionar propriedades personalizadas a um array, embora essa prática seja incomum para manipulação de dados de array.

Sintaxe:

JavaScript

const meuArray = [1, 2, 3];
console.log(typeof meuArray); // Saída: 'object'

// Podemos adicionar propriedades customizadas a um array
meuArray.minhaPropriedade = "Teste";
console.log(meuArray.minhaPropriedade); // Saída: "Teste"
4. for...of com Outros Tipos Iteráveis
4.1. for...of com Strings
Conceito:
Strings em JavaScript são consideradas objetos iteráveis. O for...of permite iterar sobre cada caractere individual da string. Essa abordagem é particularmente útil porque ela lida corretamente com pontos de código Unicode que podem consistir em múltiplos caracteres de "unidade de código" UTF-16 (como emojis ou caracteres especiais), garantindo que cada símbolo visível seja tratado como uma única iteração.

Sintaxe:

JavaScript

for (const caractere of minhaString) {
  // Faça algo com cada caractere
}
4.2. for...of com Map
Conceito:
O objeto Map em JavaScript é uma coleção de pares chave-valor onde as chaves podem ser de qualquer tipo de dado. Map é um objeto iterável. Quando o for...of é usado diretamente em um Map, ele itera sobre os pares chave-valor, retornando um array de dois elementos [chave, valor] em cada iteração. Isso facilita o acesso simultâneo à chave e ao valor de cada entrada.

Sintaxe:

JavaScript

for (const [chave, valor] of meuMap) {
  // Faça algo com a chave e o valor
}
4.3. for...of com Set
Conceito:
O objeto Set em JavaScript é uma coleção de valores únicos de qualquer tipo de dado. Set é um objeto iterável que mantém a ordem de inserção. O for...of é a forma padrão e mais conveniente de iterar sobre os elementos de um Set. Ao usá-lo, cada iteração simplesmente retorna um dos valores contidos no Set.

Sintaxe:

JavaScript

for (const valor of meuSet) {
  // Faça algo com cada valor
}
📚 Referências
MDN Web Docs - for...of: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...of

MDN Web Docs - for...in: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...in

MDN Web Docs - Array.prototype.forEach(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

MDN Web Docs - Array.prototype.map(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map

MDN Web Docs - Array.prototype.filter(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

MDN Web Docs - Array.prototype.reduce(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

MDN Web Docs - Array: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array

MDN Web Docs - Map: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map

MDN Web Docs - Set: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Set