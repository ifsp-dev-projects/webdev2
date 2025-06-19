let entrada=document.getElementById("entrada")
let saidaf=document.getElementById('f')
let saidak =document.getElementById("k")


let validartemperatura = () => {
    let n=parseFloat(entrada.value)
    if(!isNaN(n)){
        saidaf.innerText="F:"+ ((n*9/5)+32).toFixed(2)+"º"
        saidak.innerText= "K:"+ (n+273.15).toFixed(2)
    }
    else{
        saidaf.innerText="F: 0º"
        saidak.innerText="K: 0"
    }
}