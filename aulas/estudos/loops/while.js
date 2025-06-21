//treinando estrutura de repetição (loop) while
//while (condição){
// comandos/ ações
//}
//se a condição for ou se tornar falsa, a declaração dentro do laço para a execução e o controle é passado para a instrução após o laço

//ex1: cod que printa os numeros de 10 a 15

console.log("Contando do 10 até o 15 \n")
n=10
while (n<=15){
    console.log(n)
    n++
}

//ex2: torre de asteriscos

console.log("\nTorre de asteriscos \n")
x="*"
linhas=0

while(linhas<=10){
    console.log(x)
    x+="*"
    linhas++
}

//ex3: valor dos produtos de uma loja
console.log("\n Calculando o preço total do estoque de uma loja")

class Produtos{
    static listaDeProdutos=[] //essa lista pertence a classe toda por causa do static, se n tivesse ele iria pertencer ao metodo em especifico

    constructor( descricao, valor, quantidade){
        this.descricao=descricao
        this.valor=valor
        this.quantidade=quantidade
        Produtos.listaDeProdutos.push(this)
    }

    static calcularTotal(){
        let total=0
        let i=0 
        while(i<this.listaDeProdutos.length){
            const {valor, quantidade} = this.listaDeProdutos[i] // isso se chama desestruturação de objeto, é uma forma mais rápida de acessar as propriedades de um obj, ele basicamente ta olhando pro obj q ta em tal indice da lista e falando "me da so as propriedades valor e qntdd desse obj aq", {valor, quantidae} são as chaves do objeto especifico q ta sendo chamado em lista[i]
            total += valor * quantidade
            i++
        }
        return total
    }
}

new Produtos("Resma Ofício", 11.50, 10)
new Produtos("Lápis preto", 0.50, 3)
new Produtos("Transferidor de plástico", 1.20, 4)

console.log("Total dos produtos: ", Produtos.calcularTotal())