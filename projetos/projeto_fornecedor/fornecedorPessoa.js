/*
FornecedorPessoa-classe especialista (ou subclasse).

Crie o arquivo FornecedorPessoa.js.
Importe a Classe Pai
    No início do arquivo, escreva: import Fornecedor from './Fornecedor.js';

Crie a Classe usando extends
    class FornecedorPessoa extends Fornecedor { ... }

Defina o Construtor usando super
    O construtor deve receber nome, fone, rg e cpf.

Use super(nome, fone); para enviar os dados para o construtor da classe Fornecedor.

Crie os Métodos get e set Para rg e cpf.

Exporte a Classe export default FornecedorPessoa;
*/

import Fornecedor from './fornecedor.js'

class FornecedorPessoa extends Fornecedor{
    constructor(nome, fone, rg, cpf){
        super(nome, fone);
        this._rg=rg;
        this._cpf=cpf;
    }

    get rg(){
        return this._rg;
    }

    get cpf(){
        return this._cpf;
    }

    set rg(novoRg){
        this._rg=novoRg;
    }

    set cpf(novoCpf){
        this._cpf=novoCpf;
    }
}

export default FornecedorPessoa;