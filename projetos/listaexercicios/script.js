let title=document.getElementById('title');
let mensagemNome = document.getElementById('nome');
let mensagemIdade = document.getElementById('idade');
let mensagemProf = document.getElementById('profissao');
let trocar = document.getElementById('trocar');

class Pessoa {
    constructor(nome, idade, profissao) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }
}

const pessoas =[
    new Pessoa("Ana", 16, "Programadora"),
    new Pessoa("Heloisa Tanaka", 15, "Analista"),
    new Pessoa ("Eduardo", 17, "Economista" ),
    new Pessoa ("Levi", 16, "Gerente de Marketing" ),

]

let indice = 0;

function mostrarPessoa(){
    title.classList.add('hidden');
    const pessoa = pessoas[indice];
    mensagemNome.innerHTML=`${pessoa.nome}`;
    mensagemIdade.innerHTML=`Idade: ${pessoa.idade}`;
    mensagemProf.innerHTML=`Profissão: ${pessoa.profissao}`;
}
trocar.addEventListener("click", () => {
    indice=(indice+1)%pessoas.length;
    mostrarPessoa();
});