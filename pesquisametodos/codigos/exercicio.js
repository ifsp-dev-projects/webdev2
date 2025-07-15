// criando um "molde" (classe) para o aluno
class Aluno {
  constructor(nome, notas) { //metodo construtor
    this.nome = nome;       // nome do aluno
    this.notas = notas;     // notas do aluno (um array com números)
  }

  // função para calcular a média das notas do aluno
  media() {
    let soma = this.notas.reduce((total, nota) => total + nota, 0);
    return soma / this.notas.length;
  }
}

// criando 3 alunos e colocamos eles num array
const alunos = [
  new Aluno("ana", [8, 9, 10]),
  new Aluno("edu", [6, 5]),
  new Aluno("levi", [9, 8])
];

// mostrando o nome e a média de cada aluno usando o for...of
console.log("Médias dos alunos:");
for (const aluno of alunos) {
  console.log(`${aluno.nome} - Média: ${aluno.media().toFixed(1)}`);
}

// forEach para mostrar todas as notas de cada aluno
console.log("\nNotas dos alunos:");
alunos.forEach(aluno => {
  console.log(`${aluno.nome}: ${aluno.notas.join(', ')}`);
});

// filter para pegar só os alunos que tiraram média 7 ou mais
const aprovados = alunos.filter(aluno => aluno.media() >= 7);
console.log("\nAprovados:");
console.log(aprovados.map(a => a.nome).join(', '));

// calculando a média geral da turma com reduce
const mediaGeral = alunos.reduce((total, aluno) => total + aluno.media(), 0) / alunos.length;
console.log("\nMédia geral da turma:", mediaGeral.toFixed(2));

// for...in para mostrar os "campos" (propriedades) de um aluno
console.log("\nPropriedades do objeto Aluno:");
for (const prop in alunos[0]) {
  console.log(prop);
}

// map para guardar quantas notas cada aluno tem
const mapa = new Map();
for (const aluno of alunos) {
  mapa.set(aluno.nome, aluno.notas.length);
}

// mostrando o Map com for...of
console.log("\nQuantidade de notas por aluno:");
for (const [nome, quantidade] of mapa) {
  console.log(`${nome} tem ${quantidade} notas`);
}
