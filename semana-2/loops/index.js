// o que o código abaixo está fazendo? Qual o resultado impresso no console?
// o valor vai ser 10.
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)


const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

// a) O que vai ser impresso no console?
//vai ser impresso todos os numeros 
// b) Se eu quisesse acessar o índice de cada elemento dessa lista, 
// o for...of... é suficiente? Se sim, o que poderia ser usado para fazer isso? 


const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}

//Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?
//seria 4 pois até quantidade atual ser menos que quantidade total, ela recebe incremento depois que ela chega a 4, estaciona.


// Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável.
// a)Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
// b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, 
// e guarde esses nomes em um array
// c) Por fim, imprima o array com os nomes dos bichinhos no console

// preciso rsolver
// const quantosTem = Number(prompt("Quantos cachorros você tem?"))
// if (quantosTem === 0) {
//   console.log("Que pena! você pode adotar um pet.")
//   const quantosTem = []

// for (let i = 0; quantosTem ; i++) {
//   nomePets = prompt("Digite o nome do seu pet.")
// }

