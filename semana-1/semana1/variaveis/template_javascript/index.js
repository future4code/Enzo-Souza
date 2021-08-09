//EXERCICIO
//let a = 10
//let b = 10

//console.log(b)
//R: 10

//b = 5
//console.log (a,b)
//R: 10 , 5
//ao inves de 10, muda para 5 pois o let é uma variavel que pode ser alterada.

//let a = 10
//let b = 20
//c = a
//b = c
//a = b

//console.log(a, b, c)
//R:
//10
//10
//10


//let horasDeTrabalho = prompt("Quantas horas você trabalha por dia?")
//let quantoRecebe = prompt("Quanto você recebe por dia?")
//alert(`Voce recebe ${horasDeTrabalho/quantoRecebe} por hora`)


// let nome =
// let idade =
//console.log(typeof nome)
//console.log(typeof idade)
//R: acredito que o erro no console é pq não foi declarado nenhum valor para as variaveis.


let nome = prompt("Qual seu nome?")
let idade = prompt("Qual sua idade?")

console.log(typeof nome)
console.log(typeof idade)
//notei que apareceu no console o nome e a idade que foi respondida na caixa.

console.log("Olá", nome, "você tem", idade, "anos")

let cafe = "Você gosta de café?"
let refrigerante = "Você gosta de refrigerante?"
let suco = "Você gosta de suco?"

const rCafe = "sim"
const rRefrigerante = "sim"
const rSuco = "sim"

console.log(cafe, rCafe)
console.log(refrigerante, rRefrigerante)
console.log(suco, rSuco)


let a = 10
let b = 25
c = a
a = b
b = c

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)
