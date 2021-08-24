//------------------exercicio---------- OPERAÇÃO ARITMETICA
// Peça para o usuário inserir dois números e guarde-os em
// variáveis diferentes (num1 e num2)
// ● Imprima no console:
// ○ A soma do primeiro com o segundo
// ○ A subtração do primeiro pelo segundo
// ○ A multiplicação do primeiro pelo segundo
// ○ A divisão do primeiro pelo segundo
// ○ O resto da divisão do primeiro pelo segundo

// const usuarioPrimeiroNumero = Number(prompt("Insira um primeiro número."))
// const usuarioSegundoNumero = Number(prompt("Insira um Segundo número."))

// console.log(usuarioPrimeiroNumero, usuarioSegundoNumero)

// const resultadoSoma = usuarioPrimeiroNumero + usuarioSegundoNumero
// console.log(`O resultado da soma é: ${resultadoSoma}`)

// const resultadoSub = usuarioPrimeiroNumero - usuarioSegundoNumero
// console.log(`O resultado da subtração é: ${resultadoSub}`)

// const resultadoMulti = usuarioPrimeiroNumero * usuarioSegundoNumero
// console.log(`O resultado da multiplicação é: ${resultadoMulti}`)

// const resultadoDivisao = usuarioPrimeiroNumero / usuarioSegundoNumero
// console.log(`O resultado da divisão é: ${resultadoDivisao}`)

// const restoDivisao = usuarioPrimeiroNumero % usuarioSegundoNumero
// console.log(`O resultado do resto da divisão é: ${restoDivisao}`)

// -----------------------exercicio------------------------------------------ARRAYS
// Dada a frase " Hoje vou comer cenoura, ebaaa " realize as
// operações:
// ● Imprima a frase inicial juntamente com seu tamanho
// ● Retire os espaços do início e do fim
// ● Faça com que possua apenas letras minúsculas
// ● Verifique se as palavras comer e batata estão presentes
// ● Substitua cenoura por batata
// ● Verifique novamente se possui as palavras comer e batata

// const frase =  " Hoje vou comer cenoura, ebaaa "
// const frase2 =  " Hoje vou comer cenoura, ebaaa ".trim()
// const frase3 =  " Hoje vou comer cenoura, ebaaa ".toLocaleLowerCase()
// const frase4 = frase.replaceAll("cenoura" , "batatas")
// // const frase4 =  " Hoje vou comer cenoura, ebaaa ".
// console.log(frase)
// console.log(frase.length)
// console.log(frase2.length)
// // ou console.log(frase.trim(), frase.length)
// console.log(frase3)
// // ou console.log(frase.toLocaleLowerCase())
// console.log(frase.includes("batatas"))
// console.log(frase.includes("comer"))
// console.log(frase4)

// ---------------exercicio------------------------------

// Dada a lista ["batata", "cenoura", "beterraba"] realize as
// operações:
// ● Imprima o segundo item da lista
// ● Imprima o tamanho da lista
// ● Adicione o item "mandioca"
// ● Verifique se há um item chamado cenoura
// ● Remova o item de índice 1

// const lista = ["batata", "cenoura", "beterraba"]
// console.log(lista[01])
// console.log(lista.length)
// const novaLista = lista.push("Mandioca")
// console.log(lista.includes("cenoura"))
// console.log(lista)
// const listaDois = lista.splice([1])
// console.log(listaDois)
//
// -----------------exercicio-----------------------------------
// Crie uma função que:
//  Receba um array de números e
// Retorne um novo array com o último e o primeiro
// número do array recebido divididos por dois

// let array = [2, 4, 6, 10]


//     function dividirPorDois (arrayDeNumeros) {
//       const primeiro = arrayDeNumeros[0] / 2
//       const segundo = arrayDeNumeros[arrayDeNumeros.length-1] / 2

//     arrayDeNumeros[0] = primeiro
//     arrayDeNumeros[arrayDeNumeros.length-1] = segundo
//     return arrayDeNumeros

//     }

//     console.log(dividirPorDois(array))

//---------------exercicio------------------------ OBJETOS------------------

// Crie um objeto que represente uma pessoa. Essa pessoa
// precisa ter nome, idade e gênero musical preferido
// ● Imprima no console as propriedades desse objeto,
// seguindo o modelo abaixo:
// "O nome da pessoa é ___, ela tem ___ anos e gosta muito de
// ___."
// ● Crie uma nova pessoa, com mesma idade e gênero
// musical, mas nome diferente

// let pessoa = {
//     nome: "enzo",
//     idade: 24,
//     genero: "rap"
// };

// console.log(`O nome da pessoa é ${pessoa.nome} , ela tem ${pessoa.idade} anos e gosta muito de ${pessoa.genero}`)

// ----------------exercicio-----------------------------CONDICIONAIS
// Receba um número do usuário
//  Se for par, imprima: é par
//  Senão, imprima: é impa

// const usuario = Number(prompt("Insira um numero."))

// if (usuario % === 0) {
//     console.log("é par")

// } else {
//     console.log("é impa")
// }

// Receba do usuário o nome de um bichinho:
// ○ Se for um cachorro, retorne: Au au
// ○ Se for um gato, retorne: Miau
// ○ Se for uma vaca, retorne: Muuu
// ○ Se for outro bichinho, retorne: sem barulho
// reconhecido :(
// Faça utilizando if/else e switch case

// const nomePet = prompt("Insira nome de um bichinho.")
// if (nomePet === "cachorro") {
//     console.log("au au")
// } else if (nomePet === "gato") {
//     console.log("miau")
// } else if (nomePet === "vaca"){
//     console.log("Muuu")
// } else {
//     console.log("sem barulho reconhecido")
// }


//-----------------------exercicio----------------------- UTILIZANDO SWITCH
// const nomePet2 = prompt("Insira nome de um bichinho.")
//     switch (nomePet2) {
//         case 'cachorro':
//             console.log("au au au")
// break
//         case 'gato':
//             console.log("miau")
// break
//         case 'vaca':
//             console.log("muuu u u")
// break
//         default:
//             console.log("bichinho não reconhecido")
//     }

//---------------exercicio--------------------------------------- LAÇOS

// Receba um array com números e devolva qual o maior
// dentro dele
//  Ex: Para o array [11, 15, 18, 14, 12, 13], a saída deve ser: "O
// maior número é 18"
//  Faça utilizando as três estruturas de loop vistas

// let numeros = [11, 15, 18, 14, 12, 13]

// let i = 0
// let maior = -Infinity
// while(i < numeros.length) {
//     if(numeros[i]> maior){
//         maior = numeros[i]
//     }
//     i++
// }
// console.log(`o maior número é: ${maior}`)

// for:
// for (let i = 0;   i < numeros.length; i++) {
// if(numeros[i] > maior ){
//     maior = numeros[i]
//     }

// }
// console.log(maior)

// for (let numero of numeros) {
//     if(numero > maior){
//                 maior = numero
//             }

// }
//     console.log(maior)
// loops exercicio 2:

// --------------exercicio--------loops

//     Dado o objeto do slide anterior, imprima:
// Oi! Eu me chamo Letícia Chijo e tenho 27 anos.
// Dou/não dou aula de front e dou/não dou aula de back.
// Meus jogos favoritos são:
// 1) Chrono Trigger
// 2) Undertale
// 3) Hollow Knight
// Tenho uma cachorrinha chamada Polly que gosta de comer maçã
// ● Faça a Chijo contar uma piada ruim

// const prof = {
//     nome: "Letícia Chijo",
//     idade: 27,
//     aulasFront: true,
//     aulasBack: false,
//     jogosFavoritos: ["Chrono Trigger", "Undertale", "Hollow Knight"],
//     contaPiada: () => console.log("É pave ou pacume?"),
//     pet: {
//         nome: "Polly",
//         especie: "cachorrinha",
//         raca: "Lhasa Apso",
//         snacksFavoritos: ["biscoito", "maçã", "frango"]
//     }


// }


// --- console.log(`olá me chamo ${prof.nome} , e tenho ${prof.idade} . Dou aula de front ${prof.aulasFront} e não dou aulas de back ${prof.aulasBack} . meus jogos favoritos são: ${prof.jogosFavoritos[0]} , ${prof.jogosFavoritos[1]} , ${prof.jogosFavoritos[2]} . tenho uma cachorrinha chamada ${prof.pet.nome}`) 
// ----console.log(prof.contaPiada)


// const verificaAula = (aula) => {
    //     if (aula) {
    //         return "Dou"
    //     } else {
    //         return "Não dou"
    //     }
    //  }

    //  const aulasBack = verificaAula(prof.aulasBack)
    //  const aulasFront = verificaAula(prof.aulasFront)

    //  const jogos = []


    //  for(let i = 1; i <= prof.jogosFavoritos.length; i++){
    //      jogos.push(`${i}) ${prof.jogosFavoritos[i-1]}`)
    //  }

    //  console.log(jogos)

    //  const frase = `Oi! Eu me chamo ${prof.nome} e tenho ${prof.idade} anos.
    //  ${aulasFront} aulas de front e ${aulasBack} aulas de back.
    //  Meus jogos favoritos são: ${jogos}
    //  Tenho uma ${prof.pet.especie} chamada ${prof.pet.nome} que gosta de comer ${prof.pet.snacksFavoritos[1]}
    //  `
    // console.log(frase)
    // prof.contaPiada()
    //----------------------------------------------------------------------------------------------------------------

    // EXERCÍCIO 13
    // const produtos = [
    //     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    //     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    //     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    //     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    //     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    //     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    //     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    //     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    //     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    //     { nome: "Sabão em Pó", categoria: "Limpeza", preco: 10.80 }
    // ]

    // const produtosComDesconto = produtos.map((prod) => {
    //     return { ...prod, preco: (prod.preco * 0.9).toFixed(2) }
    // })

    // console.log(produtosComDesconto)

    // const hortifruti = produtos.filter((prod) => {
    //     return prod.categoria === "Hortifruti"
    // })

    // console.log(hortifruti)

    // const hortifrutiComDesconto = produtos
    //     .filter((prod) => {
    //         return prod.categoria === "Hortifruti"
    //     }).map((prod) => {
    //         return { ...prod, preco: (prod.preco * 0.9).toFixed(2) }
    //     })

    // console.log(hortifrutiComDesconto)


