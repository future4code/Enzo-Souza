import React, { useState , useEffect} from "react";
import { HomePage } from "../HomePag/HomePage";
import { FotoMatch, ListText, MatchesContainer, MatchesList } from "./styled";
import axios from "axios";
import { Button, ButtonGroup } from "@chakra-ui/react"
import { ProfileCardContainer, ProfileImage, ProfileInfo, ProfilePicture } from "../HomePag/styled";


 const MatchesPage = () => {
    // criei um estado para receber uma lista com os matches.
    // e uma requisição para pegar os match da lista.
        const [listaMatchs, setListaMatchs] = useState ([])
    // useEffect para chamar a função getMatchesList

        useEffect (() => {
            getMatchesList()
        }, [])


    const getMatchesList = () =>{
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/enzo-souza-mayram/matches"
        axios.get(url)
            .then((res) => {
                console.log(res.data.matches)
                setListaMatchs(res.data.matches) 
            
            })
            .catch((error) => {
                console.log(error.response)
            })

    } 
   
    const cleanMatches = () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/enzo-souza-mayram/clear"
       axios.put(url)
           .then((res) => {
             getMatchesList();
             console.log("deletada")
              
              
           })
           .catch((error) => {
               console.log(error.response)
           })
      }    


    const novaLista = listaMatchs.map((match) => {
        return ( 
           <div>
                <ProfilePicture src={match.photo}/>
            <ProfileInfo>{match.name} - {match.age}{""}</ProfileInfo>
           </div>
        )
    })
        

        return (
                 
            <MatchesList>
                {novaLista}
                <hr/>
               <Button bg="#00A3C4" color="black" onClick={cleanMatches}> Limpe seus Matche's </Button>
            </MatchesList>
           
        )
}

export default MatchesPage;