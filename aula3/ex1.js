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