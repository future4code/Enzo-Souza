let array
console.log('a. ', array)
//r: indefinido pois nenhum valor foi atribuido a array.

array = null
console.log('b. ', array)
//r:null não tem valor algum, então o valor séra de null.

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
//r: vai mostrar a quantidade de itens na array.

let i = 0
console.log('d. ', array[i])
//r: aqui define-se que I é igual a 0. e 0 nos itens da array corresponde há 3.

array[i+1] = 19
console.log('e. ', array)
//r:aqui o numero 0 do array vai ser representado por I e 1 (item 1) vai ser agora 19. 

const valor = array[i+6]
console.log('f. ', valor)
//r: o valor de i que é o item 0 no array que tem o valor de 3 somado com 6 dá: 9.

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
//r: aqui vamos ter a frase em caixa alta e a letra A sendo substituida por letra I, também podemos ver 
//quantas letras tem na frase através do comando length.

const emailDoUsuario = prompt("Qual seu e-mail?")
const nomeDoUsuario = prompt("Qual seu nome?")

console.log("O e-mail " + emailDoUsuario + " foi cadastrado com sucesso. Seja bem-vinda(o) " + nomeDoUsuario)

const comidas = ["pizza" , "hot dog" , "lasanha", "coxinha", "pastel"]
console.log (comidas)
console.log(comidas[00])
console.log(comidas[01])
console.log(comidas[02])
console.log(comidas[03])
console.log(comidas[04])

const desafio = prompt("Qual sua comida favorita?")

comidas[01] = desafio
console.log(comidas)


const tarefa1 = prompt(" Informe tarefa 0." )
console.log(tarefa1)
const tarefa2 = prompt(" Informe tarefa 1. " )
console.log(tarefa2)
const tarefa3 = prompt(" Informe tarefa 2. " )
console.log(tarefa3)

const listadetarefa = [tarefa1 , tarefa2 , tarefa3]

const remova = Number (prompt("Escolha  0, 1, 2 para excluir uma tarefa."))
console.log(remova-1)

listadetarefa.splice (remova,1)
console.log(listadetarefa)




