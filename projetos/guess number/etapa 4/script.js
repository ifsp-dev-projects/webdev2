/*
Etapa 4: Toques Finais e Publicação (Aula 4)
• Adicionar um botão "Jogar Novamente" que reinicia o jogo sem precisar recarregar a
página.
• Aplicar estilos no style.css para deixar o jogo com uma aparência mais profissional e
agradável.
• Testar exaustivamente para encontrar e corrigir possíveis bugs
*/

let NumeroUsuario = document.getElementById("NumeroUsuario");
let mensagem = document.getElementById("mensagem");
let mensagem2 = document.getElementById("mensagem2");
let mensagem3 = document.getElementById("mensagem3");
let mensagem4 = document.getElementById("mensagem4");
let mensagem5 = document.getElementById("mensagem5");
let exibirstart = document.getElementById("start");
let gamewon = document.getElementById("gamewon");
let gameover = document.getElementById("gameover");
let jogo = document.getElementById("telajg");
let botao = document.getElementById("button");
let play = document.getElementById("play");
let botaorestart = document.getElementById("restart");
let botaorestart2 = document.getElementById("restart2");
let entradas = [];
let lost = false;
let win = false;
let start = true;
let loopdojg;

let min = 1;
let max = 20;
let maxtentativas = 10;
let tentativasRestantes;


function telajogo() {
    start = false;
    lost = false;
    win = false;
    maxtentativas = 10;
    entradas.length = 0;
    numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
    exibirstart.classList.add('hidden');
    gameover.classList.add('hidden');
    jogo.classList.remove('hidden');
    gamewon.classList.add('hidden');
    exibirMensagem(mensagem, "O número sorteado é: ")
    exibirMensagem(mensagem2, "Seus palpites: ");
    exibirMensagem(mensagem3, "Tentativas restantes: 10")

}

function telagamewon() {
    win = true;
    gamewon.classList.remove('hidden');
    jogo.classList.add('hidden');
    exibirMensagem(mensagem4, `O numero sorteado foi ${numeroSorteado}, você venceu com ${entradas.length} tentativa(s)`)

}
function telagameover() {
    lost = true;
    gameover.classList.remove('hidden');
    jogo.classList.add('hidden');
    exibirMensagem(mensagem5, `O numero sorteado foi ${numeroSorteado}`)
}


function exibirMensagem(elemento, texto, cor = "black") {
    elemento.innerHTML = texto;
    elemento.style.color = cor;
}

function verificarPalpite() {
    let numero = parseInt(NumeroUsuario.value);
    if (isNaN(numero)) {
        alert("Digite um número entre 1 e 20");
        return;
    }
    if (numero < min || numero > max) {
        alert("Digite um número entre 1 e 20");
    }
    else if (numero == numeroSorteado) {
        entradas.push(numero);
        win = true;
        telagamewon();
    }
    else if (numero > 0 && numero < numeroSorteado) {
        exibirMensagem(mensagem, "O número sorteado é: maior!", "orange");
        entradas.push(numero);
    }
    else if (numero > numeroSorteado) {
        exibirMensagem(mensagem, "O número sorteado é: menor!", "blue");
        entradas.push(numero);

    }


    exibirMensagem(mensagem2, "Seus palpites: " + entradas.join(", "),);
    tentativas(numero)

}


function tentativas(numero) {
    let tentativasRestantes = maxtentativas - entradas.length;

    if (lost || win) return;

    if (entradas.length >= maxtentativas && numero !== numeroSorteado) {
        lost = true;
        telagameover();
    }
    else if (!win && !lost) {
        exibirMensagem(mensagem3, `Tentativas restantes: ${tentativasRestantes}`)
    }
}


function iniciarjogo() {
    if (win == false && lost == false && start == false) {
        verificarPalpite()
    }
}

play.addEventListener('click', telajogo);
botao.addEventListener(`click`, iniciarjogo);
botaorestart.addEventListener("click", telajogo);
botaorestart2.addEventListener("click", telajogo);
