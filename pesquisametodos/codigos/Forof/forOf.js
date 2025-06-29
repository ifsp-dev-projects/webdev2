//codigo simples
const names = ["Ana", "Bruno", "Carlos", "Duda"];

for (const name of names) {
    console.log(`Olá, ${name}!`);
}


//codigo elaborado

class Product {
    static listOfProducts = []; 

    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;

        Product.listOfProducts.push(this);
    }

    static showStock() {
        console.log("Estoque atual:");
        for (const { name, price, quantity } of Product.listOfProducts) {
            console.log(`Produto: ${name} | Preço: R$${price} | Quantidade: ${quantity}`);
        }
    }

    static calculateTotalValue() {
        let total = 0;
        for (const { price, quantity } of Product.listOfProducts) {
            total += price * quantity;
        }
        console.log(`Valor total do estoque: R$${total.toFixed(2)}`);
    }

    static replaceStock(qty) {
        for (const product of this.listOfProducts) {
            product.quantity += qty;
        }
        console.log(`Estoque foi reposto em +${qty} unidades para cada produto.`);
    }
}

new Product("Mouse", 50, 10);
new Product("Teclado", 120, 5);
new Product("Monitor", 900, 3);
new Product("Headset", 250, 7);

Product.showStock();
Product.calculateTotalValue();

console.log("\n Fazendo reposição de 5 unidades para cada produto...\n");

Product.replaceStock(2);
Product.showStock();
Product.calculateTotalValue();



