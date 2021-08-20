
//EXERCICIO DE MAP E FILTER


const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })
// //   a) O que vai ser impresso no console?
// // vai ser impresso o item que é amanda rangel, laís petra e letícia chijo. "mandi", "laura","chijo".
// // também vai ser impresso os index 0,1,2 e o array completo.

const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayB = usuarios.map((item, index, array) => {
   return item.nome
})

console.log(novoArrayB)

// // a) O que vai ser impresso no console?
// // vai ser retornado somente os nomes "amanda rangel", "laís petra" e "letícia chijo."

const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayC = usuarios.filter((item, index, array) => {
   return item.apelido !== "Chijo"
})

console.log(novoArrayC)

// ) O que vai ser impresso no console?
// pede pra retornar um apelido diferente chijo, que seria laura e mandi.

const pets = [
  { nome: "Lupin", raca: "Salsicha"},
  { nome: "Polly", raca: "Lhasa Apso"},
  { nome: "Madame", raca: "Poodle"},
  { nome: "Quentinho", raca: "Salsicha"},
  { nome: "Fluffy", raca: "Poodle"},
  { nome: "Caramelo", raca: "Vira-lata"},
]
// a) Crie um novo array que contenha apenas o nome dos doguinhos
// b) Crie um novo array apenas com os cachorros salsicha
// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. 
// A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!" 
//**Você pode encadear o uso do map e do filter */

const novoArrayDeDogs = pets.map((item, index, array) => {  //aqui estou criando um novo array e pegando pets e 
    return item.nome                                        //mapeando o item e pedindo pra me retornarem o nome.
})

  console.log(novoArrayDeDogs)                   //imprimindo o valor de novoArrayDeDogs que recebeu item.nome através do return.

const arrayDogSalsicha = pets.filter((item) => { //quero filtrar pra achar só salscihas
    return item.raca === "Salsicha"              //ordeno que retorne se corresponder a salsicha
})

  console.log(arrayDogSalsicha)                  //verifico com console se tive retorno 



const poodles = pets.filter((item) => {         //quero que filtre pets e me retorne os itens de raça poodle.
  return item.raca === "Poodle"                 //peço que retorne os itens de raça poodle.
})

console.log(poodles)                            //aqui imprimo o valor de poodles se é o retorno dos que são raça poodle.

const cuponsPoodle = poodles.map((item) => {    //agora preciso criar novo array pra mapear poodles. entao crio cuponsPoodle.
                                                //peço pra que mapeie poodles e me retorne a mensagem junto com o item.nome
  return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`
})

console.log(cuponsPoodle)                        //aqui imprimo os nomes em cuponPoodle.



// Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter.

const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

// a) Crie um novo array que contenha apenas o nome de cada item

const nomeProduto = produtos.map((item) => {                      //criei um novo array e mapeiei produtos pedindo o retorno de nome.
  return item.nome
})
    console.log(nomeProduto)

    // b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

const novoArrayProduto = produtos.map((item) => {                 //criei um novo array e chamei no return o nome e o preço 
  return {nome: item.nome , preço: (item.preco*0.95).toFixed(2)}; //e dei o desconto e fixei pra que o resultado se limite há dois com toFixed(2)
})
console.log(novoArrayProduto)                                     //imprimi o valor de novoArrayProduto com o nome e preço c/ %.


// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

const produtosBebidas = produtos.filter((item) => {
  return item.categoria === "Bebidas"
})
  console.log(produtosBebidas)


// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

const arrayYpe = produtos.filter((item) => {                      //aqui eu criei novo array e filtrei entre produtos, pedi o retorno do item
  return item.nome.includes ("Ypê")                               //e o nome,e usei includes para PROCURAR por YPÊ entre os NOMES.
})                                                   
console.log(arrayYpe)                                             //aqui imprimi o valor de arrayYpe.


// Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". 
// Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

const nomeProdutos1 = produtos.filter((item) => {                 //aqui eu abro produtos Ype e guardo os nomes.
  return item.nome.includes("Ypê")                                //peço o retorno dos produtos Ypê aqui.

})

console.log(nomeProdutos1)                                        //imprimo a mensagem aqui.

const fraseProdutos = nomeProdutos1.map((item) => {               //aqui eu criei novo array e mapiei nomeProdutos1 que já tinha os valores de Ypê
                                                                  //depois pedi pra que me retornasse a mensagem acessando tbm o nome e o preço.
  return `Compre ${item.nome} por ${item.preco}`
})

console.log(fraseProdutos)                                         //imprimindo o valor de frase.


