/*
Etapa 2: Adicionando o Desafio (Aula 2)
• Implementar um contador de tentativas (ex: 10 tentativas).
• Exibir o número de tentativas restantes na tela.
• Criar um array para armazenar os palpites anteriores e mostrá-los ao jogador.
• Implementar a lógica de vitória e derrota (se acertar dentro das tentativas ou se as
tentativas acabarem)
*/

let NumeroUsuario = document.getElementById("NumeroUsuario");
let botao = document.getElementById("button");
let entradas = [];
let lost = false;
let win = false;
let loopdojg;

let min = 0;
let max = 19;
let numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;


function ValidarNumero() {
    let numero = parseInt(NumeroUsuario.value);
    if (win == false && lost == false) {

        if (numero < 1 || numero > 20) {
            console.log("Digite um número entre 1 e 20");
        }
        else if (numero == numeroSorteado) {
            console.log("Acertou!");
            entradas.push(numero);
        }
        else if (numero > 0 && numero < numeroSorteado) {
            console.log("É maior!");
            entradas.push(numero);
        }
        else if (numero > numeroSorteado) {
            console.log("É menor!");
            entradas.push(numero);

        }
        console.log("Seus palpites: " + entradas.join(" - "));
        tentativas()
    }


}


function tentativas() {
    let numero = parseInt(NumeroUsuario.value);
    if (entradas.length > 9) {
        console.log("Que pena! Você ficou sem tentativas e perdeu. Jogue novamente!");
        lost = true;
    }
    else if (numero == numeroSorteado && entradas.length <= 9) {
        console.log("parabéns! voce venceu");
        win = true;
    }
}


botao.addEventListener('click', ValidarNumero);