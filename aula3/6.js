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