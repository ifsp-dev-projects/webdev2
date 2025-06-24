/*
Criar um programa calculadora que apresente um menu de seleções no programa principal. Este menu
deverá dar ao usuário a possibilidade de escolher uma entre quatro operações aritméticas. Escolhida a opção
desejada, deverá ser solicitada a entrada de dois números, e processada a operação deverá ser exibido o
resultado. 
*/

let calcular = () => {
    let operador = document.getElementById("opcoes").value
    let num1 = parseInt(document.getElementById("num1").value)
    let num2 = parseInt(document.getElementById("num2").value)
    result=0

    if (operador === "soma") {
        result= num1 + num2
    }
    if (operador === "subtracao") {
        result= num1 - num2
    }
    if(operador==="divisao")
        result= num1/num2
    if (operador=="multiplicacao")
        result=num1*num2
    document.getElementById("resultado").textContent = "O resultado é: " + result
}
