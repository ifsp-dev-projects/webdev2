
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

//exemplo 2 de switch case (autenticação de usuário)
usuarioAutenticacao=false;
switch(usuarioAutenticacao){
    case true:
        console.log("usuario autenticado"); break
    case false:
        console.log("usuario não autenticado"); break
}


//exemplo 3 (estações do ano)
let mes = "setembro"
switch (mes){
    case "janeiro":
    case "fevereiro":
    case "dezembro":
        console.log("Verão"); break
    case "abril":
    case "maio":
    case "março":
        console.log("outono"); break
    case "julho":
    case "agosto":
    case "junho":
        console.log("inverno"); break
    case "novembro":
    case "setembro":
    case "outubro":
        console.log("primavera"); break
    
}