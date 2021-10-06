import React from 'react';
import axios from 'axios';



    export default class TelaLista extends React.Component { 
         state={
            playlist: []
        }

// para atualizar a página e chamar as funções eu crio o ComponentdidMouth
        componentDidMount() {
            this.pegarLista()
        }

// criei função para pegar lista de usuários       
        pegarLista = () => {
            const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
            axios.get(url, {
                headers: {
                    Authorization: "enzo-souza-maryam"
                    // prestar atenção na escrita do headers
                 }
            }) 
            .then((res) => {
                console.log(res)
                this.setState({playlist: res.data})
            })
            .catch((erro) => {
                alert("Ocorreu um problema, tente novamente")
            })
        }

        deletarPlaylist = (id) => {
            const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
            axios.delete(url, {
                headers: {
                    Authorization: "enzo-souza-maryam"
                }
            })
            .then((res) => {

                this.pegarLista()
            })
        .catch((erro) => {

            alert("Ação não pode ser executada")
        })

    }


       render() {
         const listaPlaylist = this.state.playlist.map((play) => {
            return <div key={play.id}>
                {play.name}
                {play.id}
                <button onClick={() => this.deletarPlaylist(play.id)}>X</button>
                </div>
         })
            return (
                <div>
                    {/* aqui eu chamo a função ir para cadastro através do click do usuario no botão, msma 
                    coisa na tela cadastro */}
                    <button onClick={this.props.irParaAdd}></button>
                   <h2>Lista de Playlist </h2>
                   {listaPlaylist}                                  
                </div>
            );

      }
    }