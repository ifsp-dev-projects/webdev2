
//estrutura de seleção mmultipla: switch case
//exemplo 1(criando um menu):
let opcao = 'c'
console.log("escolha \n ")
console.log("(s) - Solteiro")
console.log("(c) - Casado")
console.log("(d) - Divorciado \n\n")
switch(opcao){
    case 'c':
        console.log("Casado"); break
    case 's': 
        console.log("Solteiro"); break
    case 'd':
        console.log("Divorciado"); break
    default:
        console.log("outros")
}
