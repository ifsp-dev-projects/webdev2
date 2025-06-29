//codigo simples
const celsiusTemperatures = [0, 20, 30, 37, 100];

const fahrenheitTemperatures = celsiusTemperatures.map(temp => (temp * 9/5) + 32);

console.log("Temperaturas em Fahrenheit:");
console.log(fahrenheitTemperatures);



//codigo elaborado
const emails = [
    "ana@gmail.com",
    "eduardo@hotmail.com",
    "heloisa@empresa.com.br",
    "guilherme@yahoo.com"
];

const domains = emails.map(email => {
    const parts = email.split("@");
    return parts[1];
});

console.log("Domínios dos e-mails:");
domains.forEach((domain, index) => {
    console.log(`${index + 1}. ${domain}`);
});
