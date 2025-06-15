let velocidade=80;
let tempo=2;
distancia=velocidade*tempo;
litros_usados=distancia/12;
console.log("A velocidade média da viagem foi: ", velocidade);
console.log("O tempo gasto na viagem foi: ", tempo);
console.log("A distância percorrida na viagem foi: ", distancia);
console.log("A quantidade de litros utilizada na viagem foi:", (Number(litros_usados.toFixed(2))));