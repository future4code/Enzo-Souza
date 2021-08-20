/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * Essa etapa do projeto consiste em criar um programa que:
 * 1 - Imprime uma mensagem no console "Boas vindas ao jogo de Blackjack!"
 * 
 */

    console.log("Boas vindas ao jogo de Blackjack!")

//  Envia um confirm, perguntando ao usuário: "Quer iniciar uma nova rodada?".
// Nós preparamos um método que permite sortear uma carta. Ele já está pronto e você só precisa !!invocá-lo!!. 
// comprarCartar é o método que eles criaram pra sorteio de cartas.

if(confirm("Quer iniciar uma nova rodada?")) {  //AQUI SE A PESSOA CONFIRMAR INICIA NOVA RODADA.
  const carta1usuario = comprarCarta() //AQUI EU CRIO UMA CONST PRA 1 VALOR DE CARTA P/USUARIO.
  const carta2usuario = comprarCarta() //AQUI EU CRIO UMA CONST PRA 2 VALOR DE CARTA P/USUARIO.
  let usuario = carta1usuario.valor + carta2usuario.valor //AQUI EU SOMO OS VALORES E ESPECIFICO COM .valor
  let resultadoUsuario = usuario //AQUI GUARDO O RESULTADO DOS VALORES SOMADOS.
  console.log(`Usuario - cartas: ${carta1usuario.texto} ${carta2usuario.texto} Pontuação: ${resultadoUsuario}`)

  //AQUI EM CIMA EU IMPRIMO AS CARTAS E PONTUAÇÕES ATRIBUIDAS COM VALORES DAS CARTAS.

//   carta do usuario 

//   carta do computador

   const cartaPc1 = comprarCarta()
   const cartaPc2 = comprarCarta()
   let pcUsuario = cartaPc1.valor + cartaPc2.valor
   let resultadoPc = pcUsuario
   console.log(`computador - cartas: ${cartaPc1.texto} ${cartaPc2.texto} Pontuação: ${resultadoPc}`)

// aqui ACIMA criei duas const para duas cartas e imprimi o valor delas.

      if(resultadoPc > resultadoUsuario) {      //aqui digo que SE(if) resultadoPC for maior que resultadoUsuario
         console.log("O computador ganhou!")    //significa que o PC ganhou.
      } else if (resultadoUsuario > resultadoPc) {
         console.log("O usuario ganhou!")
      } else {                                  //aqui em caso que nenhum seja maior que o outro havera empate.
         console.log("Empatou!")
      }


} else {
   console.log("O jogo acabou.")
	// o que fazer se o usuário clicar "cancelar"
}

// nesse jogo criei a ação de cada um recebendo duas cartas, fiz a soma das cartas e depois imprimi.
//depois criei as condições que me dessem um vencedor comparando os resultados.


   