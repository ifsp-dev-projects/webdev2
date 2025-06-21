//utilizando o laço de repetição do...while, imprima o primeiro numero divisivel por 19, leve em consideração o valor do primeiro numero 100 e do segundo numero 200.
let z=0
do{
if (z>100 && z%19==0){
    console.log("o primeiro numero divisivel por 19 entre 100 - 200 é", z); 
    break
}
z++
}
while(z<=200)

    //exemplo laço do...while
//validação de sexo 
do {
    let texto = "feminino"//array quando é referenciado pelo objeto
    sexo = texto.charAt(0) //objeto tipo uma lista
    if (sexo != 'f' && sexo != 'm')
        console.log("erro")

}
while (sexo!='f' && sexo!='m')
console.log("sexo validado")