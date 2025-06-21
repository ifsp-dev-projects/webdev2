/*
no for, tbm existem algumas variantes como o forEach, o forIn e o forOf, vamos ver cada um deles

forEach(): é um método que irá executar uma função para cada elemento presente em um array

array.forEach(function(elemento, indice, array) {
  código a ser executado para cada elemento
});
*/


//ex1: tabuada do 2 com função externa
const numeros= [0,1,2,3,4,5,6,7,8,9,10]

function tabuadaDo2(item){
    console.log(item*2)
}
numeros.forEach(tabuadaDo2)

//ex2: imprimir cada item do array c função interna arrow
console.log("\n")
const frutas = ["maçã", "banana", "uva"];

frutas.forEach((fruta) => {
  console.log(fruta);
});

//ex3: somar tds os itens do array
console.log('\n')

const numeros2 = [10, 20, 30];
let soma = 0;

numeros2.forEach((num) => {
  soma += num;
});

console.log("Soma:", soma);


//ex4:objs dentro de um array

console.log("\n")
const produtos = [
  { nome: "Camisa", preco: 50 },
  { nome: "Calça", preco: 100 },
  { nome: "Sapato", preco: 200 }
];

produtos.forEach((produto) => {
  console.log(`${produto.nome} custa R$${produto.preco}`);
});


//For...In: permite iterar sobre as propriedades enumeradas de um objeto de acordo com a ordem em que foram inseridos, diferente do for...in, o for...f pega diretamente os valores aoi inves do indice

//ex1:printar o indice e o item de um array
console.log('\n')
const cores=['verde', 'amarelo', 'azul', 'branco']

for (i in cores){
  console.log(i, cores[i])
} //n pe mt recomendado usar desse jeito em arrays, mlhr usar for for of ou foreach q sao mais seguos

//ex2: percorrendo um objeto
console.log("\n")
const pessoa = {
  nome: "Ana",
  idade: 16,
  estado: "São Paulo"
};

for (let chave in pessoa) {
  console.log(chave + ": " + pessoa[chave]);
}

//ex3: verificando se uma chave existe
console.log('\n')
const carro = {
  modelo: "Gol",
  ano: 2020
};

for (let chave in carro) {
  if (chave === "modelo") {
    console.log("O carro tem a propriedade 'modelo'");
  }
}


//For...of:permite percorrer um objeto iterativo (array, map, set) e executar um bloco de código

//ex1:percorrendo e imprimindo os itens de uma lista
console.log('\n')
const numeros3=[10,11,22,33,44,55]

for ( const numero of numeros3){
  console.log(numero)
}

//ex2: percorrendo uma string
console.log('\n')
const palavra = "Olá";

for (let letra of palavra) {
  console.log(letra);
}


//ex3: percorrendo um set (estrutura que não peermite elementos repetidos)
console.log('\n')
const numeros4 = new Set([1, 2, 3, 3, 2]);

for (let numero of numeros4) {
  console.log(numero);
}

//ex4: percorrendo Map (estrutura chave => valor)
console.log('\n')
const mapa = new Map();
mapa.set("nome", "Ana");
mapa.set("idade", 16);

for (let [chave, valor] of mapa) {
  console.log(chave + ": " + valor);
}


/*

🚩 RESUMO DAS DIFERENÇAS:

- for         
→ Controle total do loop (índices, condições, incremento).
→ Funciona bem com arrays e quando precisa de mais controle.

- forEach     
→ Percorre arrays.
→ Executa uma função para cada item.
→ Não permite usar break ou continue.
→ Não retorna valor (sempre undefined).

- for...in    
→ Percorre as CHAVES (índices no array ou propriedades no objeto).
→ Usado principalmente para objetos.
→ No array, retorna o índice como string (não recomendado).

- for...of    
→ Percorre os VALORES de elementos iteráveis (arrays, strings, Map, Set).
→ Não funciona diretamente em objetos.

*/
