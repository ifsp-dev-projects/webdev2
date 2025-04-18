let numeroInput= document.getElementById("numero");
let mensagemText =document.getElementById("mensagem");
function validarNumero(){
    let numero = parseInt(numeroInput.value);
    if (!numeroInput.value) {
        mensagemText.innerText = "Por favor, digite um número.";
        mensagemText.style.color = "red";
        return; 
    }
    if (numero>10){
        mensagemText.innerText = "O número é maior que 10";
        mensagemText.style.color="green";
    } else if (numero > 5) {
        mensagemText.innerText = "O número é maior que 5, mas menor ou igual 10";
        mensagemText.style.color="orange";
    } else {
        mensagemText.innerText = "O número é 5 ou menor";
        mensagemText.style.color="blue";
    }
}