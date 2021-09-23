import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

const CardUsuario = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width:300px;
    justify-content: space-around;
    display: flex;
`
    
    export default class TelaListaUsuario extends React.Component { 
         state={
            usuarios: []
        }

// para atualizar a página e chamar as funções eu crio o ComponentdidMouth
        componentDidMount() {
            this.pegarUsuarios()
        }
        
// criei função para pegar lista de usuários       
        pegarUsuarios = () => {
            const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
            axios.get(url, {
                headers: {
                    Authorization: "enzo-souza-maryam"
                 }
            }) 
            .then((res) => {
                console.log(res)
                this.setState({usuarios: res.data})
            })
            .catch((erro) => {
                alert("Ocorreu um problema, tente novamente")
            })
        }

        deletarUsuario = (id) => {
            const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
            axios.delete(url, {
                headers: {
                    Authorization: "enzo-souza-maryam"
                }
            })
            .then((res) => {
             
                this.pegarUsuarios()
            })
        .catch((erro) => {
          
            alert("Ação não pode ser executada")
        })

    }
        

       render() {
         const listaUsuarios = this.state.usuarios.map((user) => {
            return <CardUsuario key={user.id}>
                {user.name}
                <button onClick={() => this.deletarUsuario(user.id)}>X</button>
                </CardUsuario>
         })
            return (
                <div>
                    {/* aqui eu chamo a função ir para cadastro através do click do usuario no botão, msma 
                    coisa na tela cadastro */}
                    <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
                   <h2>Lista de Usuários </h2>
                   {listaUsuarios}                                  
                </div>
            );
        
      }
    }