
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

//a) O que vai ser impresso no console?
//r: vai ser calculado 2 * 5, e 10 * 5. pois informo no console.log que minhaFuncao agora tem o valor 2 e 10.

//b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
//r: daria o mesmo resultado pois a função vai ser chamada e o return possibilita que a minhaFuncao consiga ser multiplicada por 5.

// let textoDoUsuario = prompt("Insira um texto")

// const outraFuncao = function (texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

//a. Explique o que essa função faz e qual é sua utilidade
//R: temos a função para receber o texto em minusculo e determina se cenoura pode ser encontrada na string que textoDoUsuario vai fornecer,
//   e logo em seguida chamamos a função juntamente com o textoDoUsuario e damos as respostas.

//b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//     i.   Eu gosto de cenoura / true
//     ii.  CENOURA é bom pra vista / true
//     iii. Cenouras crescem na terra / true (mesmo com S ele lê cenoura-s)


function sobreMim () {
	console.log("Eu sou Enzo, tenho 25 anos, moro em Recife e sou estudante.")
}

sobreMim ()

// Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa:
//  o nome (string), a idade (number), a cidade (string) e uma profissão (string). 
//  Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:

function infoSobreMim (nome, idade, cidade, profissão) {
	const resultado = "Eu sou" + nome + ", tenho" + idade + "anos, moro em" + cidade + "e sou" + profissão

return resultado

}

infoSobreMim("Enzo" , 25 , "recife" , "estudante")

// a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, 
// faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
//b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
//c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
//d) Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

function doisNumero (numero1,numero2) {
 	const resultado = numero1 + numero2	
	console.log(resultado)
}
	doisNumero( 5 , 10)

//	
	function recebeNumero (n1 , n2) {
	const resultado1 = n1 >= n2
	console.log (resultado1)
}

	recebeNumero(20, 30)

//


 	function devolveNumero() {
	 const resultado3 = devolveNumero / 2 === 0
	 console.log(resultado3)

 }

 	devolveNumero(10)

//

 	function recebeMsg(mensagem) {
	 mensagem = "viva o sus" 
	 return mensagem
	 }

	 console.log(recebeMsg(length))

//

// Crie uma função para cada uma das operações básicas 
// (soma, subtração, multiplicação e divisão). Em seguida, 
// peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário 
// sendo o argumento. Por fim, mostre no console o resultado das operações:

function somar (n1,n2) {
	const resultadoSoma = n1 + n2
	console.log(resultadoSoma)
}

function subtracao (n1,n2) {
	const resultadoSubtracao = n1 - n2
	console.log(resultadoSubtracao)
}

function multiplicar (n1,n2) {
	const resultadoMultiplicar = n1 * n2
	console.log(resultadoMultiplicar)
}
function divisao (n1,n2) {
	const resultadoDivisao = n1 / n2
	console.log(resultadoDivisao)
}


	
