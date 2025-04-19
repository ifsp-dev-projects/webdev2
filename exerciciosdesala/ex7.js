let min = 0;
let max = 2000;
let salario= Math.floor(Math.random() * (max - min + 1)) + min;
console.log("O salário é: ", salario);
let reajuste;
let novosalario;
if (salario<500){
    reajuste=0.15;
    novosalario=salario+(salario*reajuste);
    console.log("O novo salário é: " + novosalario.toFixed(2));
}
else if (salario>=500 && salario<=1000){
    reajuste=0.1;
    novosalario=salario+(salario*reajuste);
    console.log("O novo salário é: " + novosalario.toFixed(2));
}
else{
    reajuste=0.5;
    novosalario=salario+(salario*reajuste);
    console.log("O novo salário é: " + novosalario.toFixed(2));
}