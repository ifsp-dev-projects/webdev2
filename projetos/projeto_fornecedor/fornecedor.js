/* 
Crie o arquivo Fornecedor.js.
Defina a Classe e o Construtor
    Crie um construtor que possa ser inicializado sem parâmetros, com valores padrão: "Sem nome" e "(00)0000-0000". 
        criar um constructor sem parametros é semelhante a isso:
            constructor(nome = "Sem nome", fone = "(00)0000-0000") {
                this._nome = nome;
                this._fone = fone;
            }
    O mesmo construtor deve aceitar os parâmetros nome e fone.
Crie os Métodos get e set para os atributos nome e fone.
Exporte a Classe
Ao final do arquivo, adicione export default Fornecedor; para que outras classes possam usá-la.
*/

class Fornecedor{
    constructor(nome="Sem nome", fone="(00)0000-0000"){
        this._nome=nome;
        this._fone=fone;
    }

    get nome(){
        return this._nome;
    }

    get fone(){
        return this._fone
    }

    set nome(novoNome){
        this._nome=novoNome;
    }

    set fone(novoFone){
        this._fone=novoFone;
    }
}

export default Fornecedor; //torna a exportação possível