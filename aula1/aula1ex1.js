// ! diferença netre var e let: var pode ser declarado dentro de um bloco e ser chamado depois. já o let não. Ou seja, o var pode ser considerado como global, enquanto o let é local (apesar dessas definições nãe existirem em js)
// alem disso, let é + novo q o var
let volume=0;
let raio=34.5;
let altura=1.45;
const pi=3.14159;

volume=pi*raio-2*altura;

console.log('\n exbindo valor sem arredondamento');
console.log("o volume é = " + volume);
console.log('\n exibindo o valor com arredondamento');
console.log("o volume é = " +Math.floor(volume))