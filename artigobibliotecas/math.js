let min = 500;
let max = 2000;
let salario = Math.floor(Math.random() * (max - min + 1)) + min;
console.log("O salário bruto é: ", salario);
let reajuste;
let novosalario;

if (salario < 600) {
    reajuste = 0.15;
    novosalario = salario + (salario * reajuste);
} else if (salario >= 600 && salario <= 1000) {
    reajuste = 0.10;
    novosalario = salario + (salario * reajuste);
} else if (salario > 1000 && salario <= 1500) {
    reajuste = 0.05;
    novosalario = salario + (salario * reajuste);
} else {
    novosalario = salario;
}

novosalario = Math.round(novosalario);
console.log("O salário reajustado é:", novosalario)

if (novosalario % 2 !== 0) {
    let raizQuadrada = Math.sqrt(novosalario);
    console.log("Raiz quadrada: " + Math.round(raizQuadrada));
} else {
    let valorAbsoluto = Math.abs(novosalario);
    console.log("Valor absoluto: " + valorAbsoluto);
}

if (novosalario > 1000) {
    let desconto = novosalario * 0.05;
    let salarioComDesconto = novosalario - desconto;
    salarioComDesconto = Math.round(salarioComDesconto);
    console.log("Salário com desconto: " + salarioComDesconto);
} else {
    console.log("Salário final: " + novosalario);
}
