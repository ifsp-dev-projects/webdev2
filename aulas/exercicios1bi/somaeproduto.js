console.log("Código sem laços: \n")
function soma(a,b){
    return a+b;
}
let r1=soma(9, 3.7);
let r2=soma(9, 2);
let r3=soma(9,8.5);
let r4=soma(3.7,2);
let r5=soma(3.7,8.5);
let r6=soma(2, 8.5);

function multiplicacao(c,d){
    return c*d;
}
let rm1=multiplicacao(9, 3.7);
let rm2=multiplicacao(9, 2);
let rm3=multiplicacao(9,8.5);
let rm4=multiplicacao(3.7,2);
let rm5=multiplicacao(3.7,8.5);
let rm6=multiplicacao(2, 8.5);

console.log("soma de a+b = ", r1);
console.log("soma de a+c = ", r2);
console.log("soma de a+d = ", r3);
console.log("soma de b+c = ", r4);
console.log("soma de b+d = ", r5);
console.log("soma de d+c = ", r6);
console.log("produto de a*b = ", Number(rm1.toFixed(2)));
console.log("produto de a*c = ", rm2);
console.log("produto de a*d = ", rm3);
console.log("produto de b*c = ", rm4);
console.log("produto de b*d = ", Number(rm5.toFixed(2)));
console.log("produto de d*c = ", rm6);

console.log("\n Código com laços:\n")
//apesar de funcional, esse codigo repete muita coisa, então p otimiza-lo pode-se utilizar laços de repetição
function soma(a, b) {
    return a + b;
}

function multiplicacao(a, b) {
    return a * b;
}

let valores = [9, 3.7, 2, 8.5]; // valores em lista p otimizar tamanho do codigo e tempo
let nomes = ['a', 'b', 'c', 'd']; //same

console.log("SOMAS:");// titulo p indicar parte das somas.
for (let i = 0; i < valores.length; i++) { //laço q percorre por tds os valores
    for (let j = i + 1; j < valores.length; j++) { //laço q cmc do proximo elemento +1 (proximo da lista) pra nao repetir a soma dos msms valores
        let resultado = soma(valores[i], valores[j]); //declara resultado e usa a function de soma p fzr o calculo (I+J)
        console.log(`soma de ${nomes[i]} + ${nomes[j]} = ${resultado}`); // printa soma do i + j = r
    }
}
// aq é identico ao de cima mas usa a function de multiplicar
console.log("\nMULTIPLICAÇÕES:");
for (let i = 0; i < valores.length; i++) {
    for (let j = i + 1; j < valores.length; j++) {
        let resultado = Number(multiplicacao(valores[i], valores[j]).toFixed(2));
        console.log(`produto de ${nomes[i]} * ${nomes[j]} = ${resultado}`);
    }
}

//CONCLUSÃO: o output vai ser o msm, mas o segundo codg ficou +limpo e -repetitivo, mas a logica funciona em ambos.