import React, {useEffect, useState} from 'react'
import MatchesPage  from '../MatchesPage/MatchesPage'
import { Button } from '@chakra-ui/button'

import axios from 'axios'
import { ProfileCardContainer, ProfilePicture, UserAge, UserDescription, UserName } from './styled'

const HomePage = () => {
    const[profile, setProfile] = useState ({})
    const [choice, setChoice] = useState("true")

    // fazer uma função para pegar os dados, vai ser uma requisição.
    // devemos usar UseEffect para pegar o perfil assim que a tela abrir. ele vai receber a função (getProfile) que vai executar e um array
    // de dependencia pra ele saber em que momento executar.
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/enzo-souza-mayram/person"

    useEffect (() => {
        // to chamando a função getProfile abaixo.
        getProfile()
    }, [])

    const getProfile = () => {
        axios.get(url)
        // O QUE FAZ EM CASO DE SUCESSO E ERRO
    
        .then((res) => {
            setProfile(res.data.profile)
        })

        .catch((error) => {
            console.log(error.response)
        })
    }


    //abaixo criei uma função para a escolha de x ou s2
    //fiz a requisição choose Person (POST)
    //e no caso de sucesso (then) aparecer mais uma pessoa.
    
    const choosePerson = (choice) => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/enzo-souza-mayram/choose-person"
        const body = {
            id: profile.id,
            choice: choice,
        }
        axios.post(url, body)
        .then(() => {
            
            getProfile()
           
        })
        .catch((error) => {
            console.log(error.response)
        })
    
    }

    const likeButton = () => {
        choosePerson(true);   
    }
    
    const deslikeButton = () => {
        choosePerson(false);
    }



    return (

        
            <div>
                {!profile ? <div>Acabaram os perfis! Aperte o botão de limpar.</div> : 
             <div>

                 
                <ProfileCardContainer>
                    <ProfilePicture src={profile.photo} />
                    <UserName> {profile.name} </UserName> <UserAge> {profile.age} </UserAge>
                    <UserDescription> {profile.bio} </UserDescription>
               
                    
            <div>
                <Button bg="red" color="black" onClick={deslikeButton}>❌</Button>
                <Button bg="green"  onClick={likeButton}>💚</Button>
            </div>                
                </ProfileCardContainer>
             </div>
            }
            </div>
    )

}
export default HomePage;