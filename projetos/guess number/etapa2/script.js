/*
Etapa 2: Adicionando o Desafio (Aula 2)
• Implementar um contador de tentativas (ex: 10 tentativas).
• Exibir o número de tentativas restantes na tela.
• Criar um array para armazenar os palpites anteriores e mostrá-los ao jogador.
• Implementar a lógica de vitória e derrota (se acertar dentro das tentativas ou se as
tentativas acabarem)
*/

let NumeroUsuario = document.getElementById("NumeroUsuario");
let mensagem = document.getElementById("mensagem");
let mensagem2 = document.getElementById("mensagem2")
let botao = document.getElementById("button");
let tentativas = 10;
let entradas=[];

let min = 0;
let max = 19;
let numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;

function ValidarNumero(){
    let numero = parseInt(NumeroUsuario.value);
    entradas.push(numero)

    if  (numero<0 || numero >20){
        mensagem.innerHTML="Digite um número entre 1 e 20";
        mensagem.style.color="red";
    }
    else if (numero == numeroSorteado) {
        mensagem.innerHTML="Acertou!";
        mensagem.style.color="green";
    }
    else if (numero>0 && numero< numeroSorteado) {
        mensagem.innerHTML="É maior!";
        mensagem.style.color="orange";
    }
    else if (numero > numeroSorteado) {
       mensagem.innerHTML="É menor!";
       mensagem.style.color="orange";
    }
}

while (tentativas>=1){
    mensagem.innerHTML="tentativas restantes:" + tentativas
    tentativas--
}

botao.addEventListener('click', ValidarNumero)