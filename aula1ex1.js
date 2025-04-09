let volume=0;
let raio=34.5;
let altura=1.45;
const pi=3.14159;

volume=pi*raio-2*altura;

console.log('\n exbindo valor sem arredondamento');
console.log("o volume é = " + volume);
console.log('\n exibindo o valor com arredondamento');
console.log("o volume é = " +Math.floor(volume))