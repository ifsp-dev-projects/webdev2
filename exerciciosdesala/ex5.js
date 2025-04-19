let min = 0;
let max = 99;
let idade = Math.floor(Math.random() * (max - min + 1)) + min;
console.log("A idade é: ", idade)
if (idade<16){
    console.log("Não eleitor");
}
 else if (idade>=16 && idade<65){
    console.log("Eleitor obrigatório");
}
else{
    console.log("Eleitor facultativo")
}