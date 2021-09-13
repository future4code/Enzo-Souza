// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
 let altura = Number(prompt("Digite uma altura."))
 let largura = Number(prompt("Digite uma largura."))
 const area = altura * largura
 let resultado = area
 console.log(resultado)
}

// EXERCÍCIO 02
function imprimeIdade() {
 let anoAtual = Number(prompt('Digite o ano atual.'))
 let anoNascimento = Number(prompt('Digite o ano de nascimento.'))
 const idade = anoAtual - anoNascimento
 let resultado = idade
 console.log(resultado)


}
 


// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
const imc = peso / (altura * altura)
let resultadoIMC = imc
console.log(resultadoIMC)
return resultadoIMC
}
  calculaIMC(85, 1.8);
  calculaIMC(70 , 1.65);

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
const nome = prompt("Digite seu nome.")
const idade = Number(prompt("Digite sua idade."))
const email = prompt("Digite seu E-mail.")
console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const cor1 = prompt("Digite uma cor favorita")
const cor2 = prompt("Digite uma cor favorita")
const cor3 = prompt("Digite uma cor favorita")
console.log([cor1, cor2, cor3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
const retornaMaiuscula = prompt("digite mensagem").toUpperCase()
const resultado = retornaMaiuscula
return resultado
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
return custo/valorIngresso 
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
if (string1.length === string2.length) {
  return true
} else {
  return false
}
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
return array[array.length -1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
let = array[0]
let = array.length - 1
const auxiliar = array [array.length -1];
array[array.length-1] = array[0]
array[0] = auxiliar 
return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
return string1.toLowerCase() === string2.toLowerCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Ano atual"))
  const anoNascimento = Number(prompt("Ano de nascimento"))
  const anoEmissao = Number(prompt("Ano de Emissão"))

  const idade = anoAtual - anoNascimento
  const tempoEmissao = anoAtual - anoEmissao

  if(idade <= 20 && tempoEmissao >= 5){
    console.log(true)
  } else if (idade > 20 && idade <=50 && tempoEmissao >= 10) {
    console.log(true)
  } else if (idade > 50 && tempoEmissao >=15){
    console.log(true)
  } else {
    console.log(false)
  }


}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  if(ano % 400 === 0){
    return true
  } else if (ano % 4 === 0 && !(ano%100 ===0)){
    return true
  } else {
    return false
  }
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // não consegui resolver a 15, deu uma bugada e eu não consigo criar uma condição para false. help.
// const idade = prompt("Você tem mais de 18 anos?")
// const ensino = prompt("Você Possui Ens.Médio Completo?")
// const horario = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")


// if(idade && ensino && horario === "sim"){
//  console.log(true) 
// } else if (idade && ensino && horario === "sim" ){
// } console.log(true)
}
