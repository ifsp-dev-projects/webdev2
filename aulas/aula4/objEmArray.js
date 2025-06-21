//trabalhando com array e laço de repetição do..while
const alunos=[
    {aluno:'Henrique', nota:8},
    {aluno:'AnaBela', nota:10},
    {aluno:'Fernandez', nota:10},
    {aluno:'Bianca', nota:9}
] //sao 4 objetos dentro de uma lista

let index=0
let somadasNotas=0
let totalAlunos=alunos.length

//t=utilizando o laço de repetição
do{
    somadasNotas+= alunos[index].nota
    index++
} while(index<totalAlunos)

let media = somadasNotas / totalAlunos;
console.log(media)