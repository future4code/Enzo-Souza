
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 2));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
    //  Sua lógica aqui
    return `No comparador de igualdade ${a} === ${b} é ${a === b}`
}

// c-)Faça uma função chamada "verificaSeEMaior"
function verificaSeEMaior (a, b) {
    return `Verificando se é maior ${a} > ${b} é ${a > b} `
}

console.log(verificaSeEMaior(321, 2156));


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= false
// b-) 1=='1'= true
// c-) 'a'==='b'= false
// d-) 'b'>'a'= true
// e-) 0!==null= true


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------
const cadastro = () => {
    const nomeDoUsuario = prompt("Qual seu nome?")
    const anoNascimento = Number(prompt("Digite seu ano de nascimento"))
    const senhaUsuario = prompt("Digite sua senha")
    const nacionalidade = prompt("Qual sua nacionalidade?").toLowerCase()
   const usuario1 = [nomeDoUsuario, anoNascimento, senhaUsuario, nacionalidade];
   const idade = 2021 - anoNascimento

   console.log(usuario1)

   if(idade >= 18 &&  senhaUsuario.length>=6 && nacionalidade === "brasileira") {
       console.log("Pode se cadastrar")
   } else {
       console.log("Não pode se cadastrar")
   }

}
    console.log(cadastro());


// Exercício 4-----------------------------------------------------------------------------------------------

const login = () => {
    const login = "labenu"
    //  Sua lógica aqui
    const senhaUsuario = prompt("Digite sua senha")
    const senhaLabenu  = "labenu"

    if(senhaUsuario === senhaLabenu) {
        console.log("usuario logado")
    } else {
        console.log("senha inválida")
    }
}

console.log(login());


// Exercício 5----------------------------------------------------------------------------------------------------

const primeiraDose = () => {
    //  Sua lógica aqui
    const nome = prompt("Qual seu nome?")
    const vacina = prompt("Qual vacina tomou?").toLowerCase()

    let tempo = ""
    let data = ""

    if (vacina === "coronavac"){
        tempo = 28
        data = "29/09/2021"
    }  else if (vacina === "astrazeneca" || vacina === "pfizer") {
        tempo = 90
        data = "01/12/2021"
    } 

     console.log(`olá ${nome} a proxima dose da ${vacina} é daqui a ${tempo} dias na data ${data}`)
    }

console.log(primeiraDose())



// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    let novoUsuario = [...usuarios]

        for (let item of novoUsuario) {
            if (item.nome === nomeDoUsuario) {
               item.imunizacao= "completa"
                return novoUsuario
            }

        }
    }
    console.log(segundaDose("Barbara"));
// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]


    for(let item of usuarios){
        if(item.imunizacao != "completa"){
          console.log (`Olá ${item.nome}! Sua imunização está ${item.imunizacao}, por favor volte ao postinho para tomar a segunda dose.`)
        }
    }

}
        console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

// const cadastro = () => {
//     //  Sua lógica aqui
// }
// console.log(cadastro());

// const login = () => {
//     //  Sua lógica aqui
// }
// console.log(login());

// const primeiraDose = () => {
// //  Sua lógica aqui
// }
// console.log(primeiraDose())
// const segundaDose = (nomeDoUsuario) => {
//     //  Sua lógica aqui
// }
// console.log(segundaDose("ALGUM NOME AQUI"));

// const avisoAosAtrasados = () => {
//     //  Sua lógica aqui
// }
// console.log(avisoAosAtrasados());