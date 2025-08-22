/*
Etapa 1: O Coração do Jogo (Aula 1)
• Criar a estrutura básica no index.html (um título <h1>, um campo <input type="number">
e um <button>).
• No script.js, criar a variável para o número secreto (usando Math.random()).
• Implementar a função principal que compara o palpite do usuário com o número secreto.
• Exibir mensagens simples de "Acertou!", "É maior!" ou "É menor!" usando console.log().
*/

let NumeroUsuario = document.getElementById("NumeroUsuario");
let mensagem = document.getElementById("mensagem");

let min = 0;
let max = 20;
let numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
function ValidarNumero(){
    let numero = parseInt(NumeroUsuario.value);

    if (numero == numeroSorteado) {
        console.log("Acertou!");
    }
    else if (numero < numeroSorteado) {
        console.log("É maior!");
    }
    else {
        console.log("É menor!");
    }
}