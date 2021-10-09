import React, { useEffect, useState } from 'react'
import  HomePage  from './Pages/HomePag/HomePage'
import  MatchesPage  from './Pages/MatchesPage/MatchesPage'
import styled from 'styled-components'
import axios from 'axios'
import { ChakraProvider, Container , Flex } from "@chakra-ui/react"
import { theme } from "./theme"
import { Button, ButtonGroup } from "@chakra-ui/react"

// sempre usar o ponto e não ' - ' no styled.div 




const App = () => {
  // renderização condicional:
  // preciso de um estado que diz qual tela está aparecendo e a função para mudar a tela.
  const [telaAtual, setTelaAtual] = useState ("home")
  const [clear, setClear] = useState ([])
  // definindo o estado com useState.
  // usando o if para condição de renderização de tela.


  const mudarTela = () => {
       if (telaAtual === "home") {
         setTelaAtual("matches")
        } else {
          setTelaAtual ("home")
        }
      }

  
   

  // aqui abaixo mais uma opção de como alternar um button e a tela chamando numa mesma linha de cód.
         return (

          
           <ChakraProvider theme={theme}>
            <Flex  width="100vw" height="100%">
              <div>
                {telaAtual === "home" ? <HomePage /> : <MatchesPage />}

                <Button bg="#00A3C4" color="black" onClick={mudarTela}>{telaAtual === "home" ? "Ir para Matches" : "Ir para Home"}</Button>
              </div>
            </Flex>
           </ChakraProvider>
            
   
      
      
    
    
  )
}

export default App;