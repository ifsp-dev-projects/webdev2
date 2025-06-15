alert("Seja bem-vindo!"); //aparece na janela 
console.log("oi")

let entrada = ""; //variavel q vai guardar a entrrada do usuario

//arrow function
let subtrair = (numeros) => numeros.reduce((a, b) => a - b); // reduce "reduz" o array a um elemento so, ent da p ter vasrias entradas, aq ele ta subtraindo td do array numeros
let somar = (numeros) => numeros.reduce((a, b) => a + b);
let dividir = (numeros) => numeros.reduce((a, b) => a / b);
let multiplicar = (numeros) => numeros.reduce((a, b) => a * b);

//funcao anonima
const mostrarMenu = function() {
    return prompt(
        "Escolha uma operação:\n" +
        "1- somar\n" +
        "2- subtrair\n" +
        "3- multiplicar\n" +
        "4- dividir\n" +
        "5- sair"
    );
};


//parametro default
function mensagemFinal(texto = "Obrigado por usar a calculadora. Até logo!") {
    alert(texto);
}

//laço de repetição
while (entrada !== "sair") {
   entrada= mostrarMenu()
//switch case
    switch (entrada) {
        case "1":
        case "2":
        case "3":
        case "4":
            let valores = prompt("Digite os números separados por espaço:") //pede os numeros e armazena em valores
                .split(" ") //separa a string em um array, qubrando onde tiver espaço, yipo 2 4 5 vira ["2", "4", "5"]
                .map(Number); //converte as strings de entrada em numeros, tipo o int input do python

            if (valores.some(isNaN) || valores.length < 2) { //verifica se a entrada so tem numeros e se tem mais de 1
                alert("Por favor, digite pelo menos dois números válidos."); 
                break;
            }

            let resultado; //variavel p guardar o resultado da operçaão

            if (entrada === "1") resultado = somar(valores);
            if (entrada === "2") resultado = subtrair(valores);
            if (entrada === "3") resultado = multiplicar(valores);
            // verifica qual foi a entrada e chama a respectiva função atribuindo a entrada dos numeros
            if (entrada === "4") {
                if (valores.slice(1).includes(0)) {
                    alert("Não é possível dividir por zero.");
                    break; //verifica se algm numero dps do primeiro é 0
                }
                resultado = dividir(valores);
            }

            alert(`O resultado é: ${resultado}`);
            break;

        case "5":
            mensagemFinal();
            break;

        default:
            alert("Operação inválida! Tente novamente.");
    }
}
