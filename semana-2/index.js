// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }
//a) Explique o que o código faz. Qual o teste que ele realiza?
// É perguntado um número ao usuario e esse numero é dividido por dois, se dividido não sobra nada = 0.
//b) Para que tipos de números ele imprime no console "Passou no teste"?
//para numeros que são pares, que se consegue dividir por 2 não sobrando nada.
//c) Para que tipos de números a mensagem é "Não passou no teste"?
//para números que são impares e que quando dividido por 2 há uma sobra.

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para que serve o código acima?
//serve para o usuario informar a fruta desejada e ter um retorno de quanto ela custa.
// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
//2.25
// c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa 
// no console se retirássemos o break que está logo acima do default 
// (o break indicado pelo comentário "BREAK PARA O ITEM c.")?
//seria pêra juntamente com o valor nao atribuido.

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a) O que a primeira linha está fazendo?
//perguntando um número ao úsuario.
// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
//a resposta séra que o número passou no teste e se fosse -10 seria false.
// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//sim pois número não foi declarado

const podeDirigir = Number(prompt("Qual sua idade?"))

if (podeDirigir >= 18) {
  console.log ("Pode dirigir.")
} else { 
  console.log ("Não pode dirigir") }


function qualTurnoeh (matutino, vespertino, noturno){
  if (matutino === "m") { console.log ("Bom dia!")
} 

else if (vespertino === "v") {
  console.log("Boa tarde!")
} 

else if (noturno === "n") { console.log("Boa noite!")
}
else { console.log ("digite um turno válido.")}

}
const turnoDefinido = prompt("Qual seu turno? Digite M para manhã, V para tarde e N para noite").toLowerCase()
qualTurnoeh (turnoDefinido)

//vou terminar depois 