/*
Etapa 4: Toques Finais e Publicação (Aula 4)
• Adicionar um botão "Jogar Novamente" que reinicia o jogo sem precisar recarregar a
página.
• Aplicar estilos no style.css para deixar o jogo com uma aparência mais profissional e
agradável.
• Testar exaustivamente para encontrar e corrigir possíveis bugs
*/

const NumeroUsuario = document.getElementById("NumeroUsuario"); // Input

const mensagem      = document.getElementById("mensagem"); // Round description
const mensagem2     = document.getElementById("mensagem2"); // All attemps
const mensagem3     = document.getElementById("mensagem3"); // Remain steps
let mensagem4 = document.getElementById("mensagem4"); // Number drawn + total attempts (gamewon page)
let mensagem5 = document.getElementById("mensagem5"); //Number drawn (gameover page)

const exibirstart   = document.getElementById("start");
const gamewon       = document.getElementById("gamewon");
const gameover      = document.getElementById("gameover");

const jogo          = document.getElementById("telajg");
const botao         = document.getElementById("button");
const play          = document.getElementById("play");
const forms         = document

const botaorestart  = document.getElementById("restart");
const botaorestart2 = document.getElementById("restart2");

let entradas    = [];
let lost    = false;
let win = false;
let start = true;
let loopdojg;

let NUMBER_MIN = 1;
let NUMBER_MAX = 20;
let ATTEMPTS_MAX = 10;
let tentativasRestantes;


function telaJogo() {
    start = false;
    lost = false;
    win = false;

    ATTEMPTS_MAX = 10;
    entradas.length = 0;
    NUMBER_GUESS = Math.floor(Math.random() * (NUMBER_MAX - NUMBER_MIN + 1)) + NUMBER_MIN;

    exibirstart.classList.add('hidden');
    gameover.classList.add('hidden');
    jogo.classList.remove('hidden');
    gamewon.classList.add('hidden');

    exibirMensagem(mensagem, "O número sorteado é: ")
    exibirMensagem(mensagem2, "Seus palpites: ");
    exibirMensagem(mensagem3, "Tentativas restantes: 10")

}

function telaGameWon() {
    win = true;
    gamewon.classList.remove('hidden');
    jogo.classList.add('hidden');
    exibirMensagem(mensagem4, `O numero sorteado foi ${numeroSorteado}, você venceu com ${entradas.length} tentativa(s)`)

}
function telaGameOver() {
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
    NumeroUsuario.value='';
    if (isNaN(numero)) {
        alert("Digite um número entre 1 e 20");
        return;
    }
    if (numero < NUMBER_MIN || numero > NUMBER_MAX) {
        exibirMensagem(mensagem, `Por favor, digite um número de ${NUMBER_MIN}-${NUMBER_MAX}`);
    }
    else if (numero == NUMBER_GUESS) {
        entradas.push(numero);
        win = true;
        telaGameWon();
    }
    else if (numero > 0 && numero < NUMBER_GUESS) {
        exibirMensagem(mensagem, "O número sorteado é: maior!", "orange");
        entradas.push(numero);
    }
    else if (numero > NUMBER_GUESS) {
        exibirMensagem(mensagem, "O número sorteado é: menor!", "blue");
        entradas.push(numero);

    }


    exibirMensagem(mensagem2, "Seus palpites: " + entradas.join(", "),);
    tentativas(numero)

}


function tentativas(numero) {
    let tentativasRestantes = ATTEMPTS_MAX - entradas.length;

    if (lost || win) return;

    if (entradas.length >= ATTEMPTS_MAX && numero !== NUMBER_GUESS) {
        lost = true;
        telaGameOver();
    }
    else if (!win && !lost) {
        exibirMensagem(mensagem3, `Tentativas restantes: ${tentativasRestantes}`)
    }
}


function iniciarJogo() {
    if (win == false && lost == false && start == false) {
        verificarPalpite()
    }
}

play.addEventListener('click',telaJogo);
botao.addEventListener(`click`, iniciarJogo);
botaorestart.addEventListener("click", telaJogo);
botaorestart2.addEventListener("click", telaJogo);

forms.addEventListener('submit', (e)=>{
    e.preventDefault();
    teaJogo();
});
