let operador = null;
let n1 = null;

function adicionar(valor) {
    document.getElementById('entrada').value += valor;
}

function definirOperador(op) {
    n1 = parseFloat(document.getElementById('entrada').value);
    operador = op;
    document.getElementById('entrada').value = '';
}

function calcular() {
    let n2 = parseFloat(document.getElementById('entrada').value);
    let resultado = 0;
    if (operador === '+') resultado = n1 + n2;
    else if (operador === '-') resultado = n1 - n2;
    else if (operador === '*') resultado = n1 * n2;
    else if (operador === '/') resultado = n1 / n2;
    else {
        document.getElementById('entrada').value = 'Erro';
        return;
    }
    document.getElementById('entrada').value = resultado;
}

function limpar() {
    document.getElementById('entrada').value = '';
    n1 = null;
    operador = null;
}
