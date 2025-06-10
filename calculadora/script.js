
const tela = document.getElementById("tela");
const numeros = document.querySelectorAll(".numero");
const operadores = document.querySelectorAll(".operador");
const igual = document.querySelector(".igual");
const limpar = document.querySelector(".limpar");

let a = null;
let b = null;
let operador = null;

numeros.forEach(botao => {
    botao.addEventListener("click", () => adicionarNumero(botao.textContent));
});

operadores.forEach(botao => {
    botao.addEventListener("click", () => definirOperador(botao.textContent));
});

operadores.forEach(botao => {
    botao.addEventListener("click", () => definirOperador(botao.textContent));
});

// Executa a operação ao clicar em "="
igual.addEventListener("click", calcular);

// Limpa tudo
limpar.addEventListener("click", resetar);

// Funções simples
function adicionarNumero(valor) {
    tela.value += valor;
}

function definirOperador(op) {
    a = parseFloat(tela.value);
    operador = op;
    tela.value = "";
}

function calcular() {
    b = parseFloat(tela.value);
    let resultado;

    if (operador === "+") resultado = somar(a, b);
    else if (operador === "-") resultado = subtrair(a, b);
    else if (operador === "*") resultado = multiplicar(a, b);
    else if (operador === "/") resultado = dividir(a, b);
    else resultado = "Erro";

    tela.value = resultado;
}

function somar(x, y) {
    return x + y;
}

function subtrair(x, y) {
    return x - y;
}

function multiplicar(x, y) {
    return x * y;
}

function dividir(x, y) {
    return y === 0 ? "Erro" : x / y;
}

function resetar() {
    tela.value = "";
    a = null;
    b = null;
    operador = null;
}
