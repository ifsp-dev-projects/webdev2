/*
Etapa 3: Deixando o Código Profissional (Aula 3)
• Refatorar (reorganizar) o script.js. Quebre o código em funções menores e bem definidas,
como iniciarJogo(), verificarPalpite(), exibirMensagem(), etc.
• Utilizar Arrow Functions ou Funções Anônimas para os eventos de clique.
• Substituir os alerts por manipulação do DOM para exibir as mensagens diretamente na
página HTML.
*/

let NumeroUsuario = document.getElementById("NumeroUsuario");
let mensagem = document.getElementById("mensagem");
let mensagem2 = document.getElementById("mensagem2");
let mensagem3 = document.getElementById("mensagem3");
let botao = document.getElementById("button");
let entradas = [];
let lost = false;
let win = false;
let loopdojg;

let min = 1;
let max = 20;
let maxtentativas=10;
let numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;

function exibirMensagem(elemento, texto, cor = "black") {
    elemento.innerHTML = texto;
    elemento.style.color = cor;
}

function verificarPalpite() {
    let numero = parseInt(NumeroUsuario.value);


    if (isNaN(numero)) {
        exibirMensagem(mensagem, "Digite um número entre 1 e 20", "red");
        return;
    }
    if (numero < min || numero > max) {
        exibirMensagem(mensagem, "Digite um número entre 1 e 20", "red");
    }
    else if (numero == numeroSorteado) {
        exibirMensagem(mensagem, "Parabéns! Voce venceu", "green");
        entradas.push(numero);
        win=true
    }
    else if (numero > 0 && numero < numeroSorteado) {
        exibirMensagem(mensagem, "É maior!", "orange");
        entradas.push(numero);
    }
    else if (numero > numeroSorteado) {
        exibirMensagem(mensagem, "É menor!", "orange");
        entradas.push(numero);

    }


    exibirMensagem(mensagem2, "Seus palpites: " + entradas.join(" - "), "blue");
    tentativas(numero)

}


function tentativas(numero) {
    let tentativasRestantes = maxtentativas - entradas.length ;

    if (lost || win) return; 

    if (entradas.length > maxtentativas && numero !==numeroSorteado) {
        exibirMensagem(mensagem3, "Que pena! Você ficou sem tentativas e perdeu. Jogue novamente!", "red");
        lost = true;
    }
    else if (!win && !lost) {
        exibirMensagem(mensagem3, `Tentativas restantes: ${tentativasRestantes}`, "purple")
    }
}

function iniciarjogo() {
    if (win == false && lost == false) {
        verificarPalpite()
    }
}

botao.addEventListener('click', ()=> iniciarjogo());