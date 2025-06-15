let prova1= 1;
let prova2=3;
let trabalho =0;
let faltas=53;
console.log(prova1);
console.log(prova2);
console.log(trabalho);
media=[(prova1*0.4)+(prova2*0.6)]*0.7 + trabalho;
if (media>=6){
    console.log("Aprovado");
}
else if (media>=3 && media<6){
    console.log("Aluno está de exame");
}
else if (faltas>24){
    console.log("Reprovado por faltas");
}
else {
    console.log("reprovado");
}