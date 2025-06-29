//cogido simples
const names = ["Ana", "Eduardo", "Heloisa", "Guilherme"];

names.forEach((name, index) => {
    console.log(`Nome na posição ${index}: ${name}`);
});


//codigo elaborado
const products = [
  { name: "Camisa", price: 50 },
  { name: "Calça", price: 100 },
  { name: "Tênis", price: 150 },
  { name: "Boné", price: 30 }
];

function applyDiscount(discountPercent) {
  products.forEach(product => {
    product.price = product.price * (1 - discountPercent / 100);
  });
}

function showProducts() {
  products.forEach(({ name, price }, index) => {
    console.log(`${index + 1}. ${name} - R$ ${price.toFixed(2)}`);
  });
}

console.log("Produtos antes do desconto:");
showProducts();

applyDiscount(10);

console.log("\nProdutos após 10% de desconto:");
showProducts();
