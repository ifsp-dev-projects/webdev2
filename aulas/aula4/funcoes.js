//fazendo a mesma funcao de diversas formas

//criando uma função anonima
const imprimirSoma = function (a,b){
    console.log(a+b)
}
imprimirSoma(2,3)

//criando a minha função de seta (arrow)
const soma = (a,b) => {
    return a+b
}
console.log(soma(2,3))

//retorno implicito (arrow tbm)
const subtracao = (a,b) => a-b 
console.log(subtracao(2,3))

const imprime2 = a => console.log(a)
imprime2("Legal!!")