let nomeAluno = document.getElementById('nomeAluno');
let notaAluno = document.getElementById('notaAluno');
let adc = document.getElementById('adc');
let listaAlunos = document.getElementById('alunos-adc');
let msg = document.getElementById('mensagem')

class Alunos {
    static alunos = [];
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
        Alunos.alunos.push(this);
    }

    media() {
        return this.nota
    }
}


function adcAluno(nome, nota) {
    msg = ""
    let notaAlu = parseInt(notaAluno.value)
    if (notaAlu <= 10) {
        new Alunos(nome, nota);
        listaAlunos.innerHTML = ''; 
        for (const aluno of Alunos.alunos) {
            listaAlunos.innerHTML += `<li>Nome: ${aluno.nome} | Nota: ${aluno.media()}</li>`
        }
        nomeAluno.value = '';
        notaAluno.value = '';
        nomeAluno.focus();
    }

    else {
        msg.innerHTML = "Digite uma nota válida"
    }

}

adc.addEventListener('click', (e) => {
    e.preventDefault();
    adcAluno(nomeAluno.value, Number(notaAluno.value))
})