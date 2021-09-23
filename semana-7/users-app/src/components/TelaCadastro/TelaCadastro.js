import React from 'react'
import axios from 'axios';
import styled from 'styled-components'



export default class TelaCadastro extends React.Component {
// para deixar os inputs controlados criamos os states dele que vão mudar a cada interação de usuário.
    state = {
        name: "",
        email:""
    }
    
        // aqui crio a função que vai receber o evento de quando a pessoa está digitando.
    handleNome = (event) => {
        this.setState({name: event.target.value})
    }

    handleEmail = (event) => {
        this.setState({email: event.target.value})
    }
// aqui a função para criar o usuario junto com a url e o body, authorization.
    fazerCadastro = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.name,
            email: this.state.email
        }
            axios.post(url, body, {
                headers: {
                     Authorization: "enzo-souza-maryam"
                }
            })
            .then((res) => {
                
                alert("Usuário(a) cadastrado(a) com sucesso!")
                this.setState({name: "" , email: ""})
                // o this.setState acima é para limpar o input 
            })
            .catch((erro) => {
               
                alert("Tente novamente")
            })
        
    
    }
// o alert acima diz se o usuário esta cadastrado/qual erro consta.


    render() {
        return (
            <div>
                <button onClick={this.props.irParaLista}> Ir para Lista de Usuários </button>
                <h2>Cadastro</h2>
                {/* aqui crio os inputs para colocar os dados e o botão para cadastrar */}
                Nome:
                <input
                placeholder={"Nome"}
                value={this.state.name}
                onChange={this.handleNome}
                />                
                E-mail:
                <input 
                placeholder={"E-mail"}
                value={this.state.email}
                onChange={this.handleEmail}
                />
                <button onClick={this.fazerCadastro}>Cadastrar</button>
            </div>

    )}
    
}