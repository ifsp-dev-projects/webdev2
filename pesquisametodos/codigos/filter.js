//codigo simples
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log("Números pares:");
console.log(evenNumbers);

//codigo elaborado
const users = [
    { name: "Ana", age: 22, active: true },
    { name: "Eduardo", age: 17, active: true },
    { name: "Levi", age: 30, active: false },
    { name: "Heloisa", age: 25, active: true },
    { name: "Guilherme", age: 25, active: true },
    { name: "Lucas", age: 16, active: false },
    { name: "Kenji", age: 19, active: true }
];

const validUsers = users.filter(
    user => user.active && user.age >= 18
);

console.log("Usuários ativos e maiores de idade:");
validUsers.forEach(({ name, age }, index) => {
    console.log(`${index + 1}. ${name} - ${age} anos`);
});
