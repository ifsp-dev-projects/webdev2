//o laço for tem a mesma função do while, ou seja, fazer algo repetitivo; ao inves de utilizar uma expressão desconhecida, usamos um conjunto fixo de circunstâncias; temos q inicializar uma variavel c um valor qlqr, tstar uma condição e incrementar ou decrementar o valor da variável inicial, tudo na mesma instrução
//for (valor inical; condição; incremento/decremento){
// ações
//}

//ex1: soma dos primeiros 10 números naturais
console.log("Somando os 10 primeiros números naturais: \n")

let soma = 0
for ( let i = 0; i <= 10; i++) {
    soma += i

}
console.log(soma)

//ex2: imprimindo os números primos dentro de um intervalo escolhido pelo usuário
console.log("Identificando os números primos entre um intervalo")
const readline=require ('readline') //módulo nativo do Node.js que permite criar interfaces de leitura e escrita no terminal.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var num1=0
var num2=0

rl.question("\nDigite o valor que inicializa a sequência:", (num1) => {
    rl.question("Digite o valor que encerra a sequência: ", (num2) => {
        console.log(`Os números primos entre ${num1} e ${num2} são: `)

        for (let i =num1; i<=num2; i++){
            let flag=0;

            for (let j=2;j<i; j++){
                if (i%j==0){
                    flag=1
                    break
                }
            }

            if (i>1 && flag==0){
                console.log(i)
            }
        }

        rl.close()
        rl.close()
    })
})
