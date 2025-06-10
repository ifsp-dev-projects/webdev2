//estudando arrays e suas funções em js; EM JAVASCRIPT o array é basicamente uma lista, mas em outras linguagens são coisas diferentes, aq nos veremos algumas funções


const valores = [7.7,8.9,6.3,9.2]
console.log(typeof valores)
console.log(valores[0], valores[3])

console.log(valores[4])
valores[4]=10
console.log(valores[4])

valores[10]=20
console.log(valores)

console.log(valores.lenght)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())
delete valores [0]
console.log(valores)

console.log(typeof valores)