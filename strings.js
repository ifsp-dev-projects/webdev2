let texto = "Ana Julia";
let maiuscula = texto.toUpperCase(); 
let minuscula = texto.toLowerCase();
let letra = texto.charAt(0);
let parte = texto.substring(4);
let troca = texto.replace("Julia", "Moser");
let contem = texto.includes("Julia");
let dividido = "menina, estudante, bonita".split(",");
console.log(maiuscula, minuscula, letra, parte, troca, contem, dividido)
