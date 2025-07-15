//codigo simples
const numbers = [5, 10, 15, 20];

const total = numbers.reduce((accumulator, number) => accumulator + number, 0);

console.log("Soma total dos números:");
console.log(total);

//codigo elaborado
const words = [
    "maçã", 
    "banana", 
    "maçã", 
    "laranja",
    "banana", 
    "maçã"
];

const wordCount = words.reduce((accumulator, word) => {
    if (accumulator[word]) {
        accumulator[word]++;
    } else {
        accumulator[word] = 1;
    }
    return accumulator;
}, {});

console.log("Contagem de palavras:");
for (const word in wordCount) {
    console.log(`${word}: ${wordCount[word]}`);
}
