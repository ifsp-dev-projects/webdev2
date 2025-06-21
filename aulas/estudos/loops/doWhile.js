//do while é praticamente identico ao while, porem a condição so e testada depois da açlão do laço ser eecutada, assim, mesmo se a condição falhar, o laço sera executado pelo menos uma vez (se a condição falha non while, o laço nunca é executado, essa é praticamente a unica diferença)

//do {
//comandos ou ações
//} while (condição)

//ex1: conatgem regressiva de 1 a 10
console.log("Contando de 10 a 0")
var cont=10

do{
    console.log(cont)
    cont--
} while(cont>=0)

//ex2: verificando o primeiro n divisivel por 19 entre 100 e 200
console.log(" \nPrimeiro numero divisível por 19 entre 100 e 200")
z=100
 do{
    if (z%19==0){
        console.log("O primeiro número divisível por 19 entre 100 e 200 é: ", z)
        break
    }
    z++
 }while(z<=200)

//ex3: média das notas de uma turma
console.log("\n Média dos alunos")
class Alunos{
    constructor( nome, nota){
        this.nome=nome,
        this.nota=nota
    }
}
let aluno1= new Alunos ("Henrique", 8)
let aluno2= new Alunos ('Anabela', 10)
let aluno3= new Alunos ('Fernandez', 10)
let aluno4= new Alunos ('Bianca', 9)

turma=[aluno1, aluno2, aluno3, aluno4]

soma=0
index=0

do{
    soma+= turma[index].nota
    index++
} while (index< turma.length)


let media= soma/ turma.length

console.log("A média da turma é: ", media)