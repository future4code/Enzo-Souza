const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)
//1R:se bool1 é true e bool2 é false,
//o resultado séra false pois bool2 é false e só recebemos true se todas as condições forem true.


resultado = bool1 && bool2 && bool3
console.log("b. ", resultado)
//1R:se bool1 é true , bool2 é false e bool3 recebe o valor true atraves do "!" mudando o valor de bool2 para true
//como valor para bool3,
//o resultado séra false pois somente bool1 e bool3 são true e só recebemos true se todas as condições forem true.


resultado = !resultado && (bool1 || bool2)
console.log("c. ", resultado)
//1R: Vai ser true pois o valor de bool1 é true e só seria false se !resultado, bool1 e bool2 fossem false.

console.log("d. ", typeof resultado)
//1R: séra booleanos pois é foi atribuido true e false nas variaveis.


let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")
const soma = primeiroNumero + segundoNumero

console.log(soma)
//2R: Vai ser impresso os dois numeros juntos ao invés de somar.

//3R: Ele não especificou que ao inves de string ele queria receber number,
//ou seja, ele teria que colocar:
//let primeiroNumero = Number (prompt("Digite um numero!"))
//let segundoNumero = Number (prompt("Digite outro numero!"))
//para que assim o console.log(soma) consiga somar os dois numeros digitados no prompt.



let idadeUsuario = Number(prompt("Qual sua idade?"))
let idadeAmigue = Number(prompt("Qual a idade do seu amigo(a)?"))


console.log("sua idade é maior que a do seu amigo(a)?", idadeUsuario >= idadeAmigue)
console.log("diferença de:", idadeUsuario - idadeAmigue)

let numeroPar = Number(prompt("Insira um número par."))
console.log(numeroPar % 2)
//R:Notei um padrão de 0. testei com números pares ex: 10, 30, 6.

//R:Se coloca numero impar, o console dá um padrão de 1, o resto da divisão.

let qualIdade = Number (prompt("Qual sua idade?"))
console.log (qualIdade * 12 ,
             qualIdade * 365 ,
             qualIdade * 8760)

let numero1 = Number (prompt("Insira um número."))
let numero2 = Number (prompt("Insira novamente um número."))
let resultado = numero1 % numero2 
let resultado2 = numero2 % numero1


console.log("O primeiro número é maior que o segundo?" , numero1 > numero2)
console.log("O primeiro numero é igual ao segundo?" , numero1 === numero2)
console.log("O primeiro numero é divisível pelo segundo?" , resultado === 0)
console.log ("O segundo numero é divisível pelo primeiro?" , resultado === 0)
//R:Se numero1 e numero2 for divisivel restara 0, se não for restará 1. 