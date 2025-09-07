/*Crie uma classe chamada Aluno com nome e notas, contendo um método media() que
calcula a média das notas.
Crie 3 alunos usando essa classe e coloque todos em um array.
Use for...of para mostrar o nome e a média de cada aluno.
Use forEach para mostrar todas as notas de cada aluno.
Use filter para pegar só os alunos com média maior ou igual a 7.
Use reduce para calcular a média geral da turma.
Use for...in para mostrar as propriedades de um dos alunos.
Crie um Map com o nome do aluno como chave e a quantidade de notas como valor.
Depois, use for...of para mostrar esse mapa.*/

class Aluno{
    constructor(nome,notas){
        this.nome=nome;
        this.notas=notas;
    }

    media(){
        const soma = this.notas.reduce((acumulador, nota)=>acumulador+nota,0);
        return (soma/this.notas.length)
    }
}

const alunos =[
    new Aluno ("Ana", [5, 4, 2]),
    new Aluno ("Heloisa", [10, 10, 9]),
    new Aluno ("Levi", [9, 10, 9])
]

for (const aluno of alunos){
    console.log(`Nome: ${aluno.nome} | Média: ${(aluno.media().toFixed(2))}`)
}

console.log()

alunos.forEach(aluno =>{
    console.log(`Aluno: ${aluno.nome} | Notas: ${aluno.notas}`)
})

const aprovados = alunos.filter(aluno=> aluno.media()>=7);
console.log(aprovados)

const mediaTurma = alunos.reduce((acumulador, aluno) => acumulador +aluno.media(), 0)/alunos.length
console.log(mediaTurma.toFixed(2))

for (const propriedade in alunos[0]){
    console.log(propriedade)
}

