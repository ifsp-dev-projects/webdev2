let entrada = document.getElementById("entrada")
let saidadolar = document.getElementById("dolar")
let saidabtc = document.getElementById("btc")
let saidaeuro = document.getElementById("euro")

const dolar = 5.25, euro = 5.7, btc = 350000

let verificarnumero = () => {
    let n = parseFloat(entrada.value)
    if (!isNaN(n)) {
        saidadolar.innerText = "U$" + (n / dolar).toFixed(2)
        saidabtc.innerText = "₿" + (n / btc).toFixed(5)
        saidaeuro.innerText = "€" + (n / euro).toFixed(2)
    }
    else {
        saidadolar.innerText = "U$ 00,00" 
        saidabtc.innerText = "₿ 00,00" 
        saidaeuro.innerText = "€ 00,00" 
    }
}
