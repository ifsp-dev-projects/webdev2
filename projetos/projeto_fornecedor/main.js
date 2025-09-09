/*
Arquivo Principal-Main.js.

import Fornecedor from './Fornecedor.js';

import FornecedorPessoa from './FornecedorPessoa.js';

Importe as Classes quevocê criou //já herdamos com import antes

Crie os Objetos (Instâncias)
    Agora você pode criar instâncias das suas classes e usar os métodos set para definir valores e get para exibi-los no console!


Como Executar o Projeto com Node.js

Inicie o projeto

No terminal, dentro da pasta do projeto, rode o comando: npm init -y.

Configure o package.json

Abra o arquivo package.json que foi criado e adicione a linha "type": "module", dentro das chaves {}. Adicione também o script de start. 

Seu arquivo deve ficar parecido com este:
    {
        "name": "heranca-javascript",\
        "version":"1.0.0",
        "description":"",
        "type":"module",

        "scripts":{
            "start":"node main.js"
        },
        "keywords":[],
        "author":"",
        "license":"ISC"
    }
Execute seu código no terminal, basta rodar o comando: npm start. 
*/

import Fornecedor from './fornecedor.js';

import FornecedorPessoa from './fornecedorPessoa.js';

const fornecedor1= new Fornecedor();
console.log(fornecedor1, fornecedor1.nome, fornecedor1.fone);

const fornecedor2 = new Fornecedor("Agostinho produtos", "(22) 98263-9808");
console.log(fornecedor2, fornecedor2.nome, fornecedor2.fone);

const pessoa1= new FornecedorPessoa("Ana", "(11) 96272-2591", "11.111.111-1", "796.568.7.316-49");
console.log(pessoa1, pessoa1.nome, pessoa1.rg);

pessoa1.nome="Ana Moser";
pessoa1.rg="73.972.786-3";

console.log(pessoa1.nome, pessoa1.rg)