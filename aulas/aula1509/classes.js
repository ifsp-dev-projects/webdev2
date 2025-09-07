/*
classe:
    nome, tributos e metodos
        atributos -> caracteristicas do objeto
        metodos-> comportamento da classe
    classes podem ser:
        internas:classe no arquivo
        exernas:classe num arquivo estrangeiro

    *metodos e atributos possuem visibilidade: public (+) e private (-)
        ->definem a acessibilidade
            contrutores;
            com retorno;
            sem retorno.


class Teste{
    constructor(parametro1, parametro2){
        this.parametro1=parametro1 -> this.parametro1 é o atributo; parametro é a variavel comum
        this.parametro2=parametro2
    }
}

*/

//exemplo classe carro
class Carro {
    constructor(marca, modelo, ano){
        this.marca=marca //-> this.marca é atributo, marca é variavel comum
        this.modelo=modelo
        this.ano=ano
    }

    detalhesCarro(){ //detalhando
        return (`Marca: ${this.marca} - Modelo: ${this.modelo} - Ano: ${this.ano} `)
    }

}

const carros=[
    new Carro ('Toyota', 'Corolla', 2020) //criand o mwu objeto
]
console.log(carros[0].detalhesCarro())