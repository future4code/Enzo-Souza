import React from 'react'
import axios from 'axios';




export default class TelaCadastro extends React.Component {
    state={
        name: ""
    }

    handleNome = (event) => {
        this.setState({name: event.target.value})
    }
    
     adicionarPlaylist = () => {
         const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
         const body = {
             name: this.state.name            
        }
        axios.post(url, body, {
            headers:  {
                 Authorization: "enzo-souza-maryam"
            }
        }) 
        .then((res) => {
            console.log(res)
            alert("Sua playlist foi criada.")
        })
        .catch((erro) => {
            console.log(erro)
        })

     }


    render() {
        return (
            <div>
                <button onClick={this.props.irParaLista}> Veja suas Playlist </button>
                <h2>Crie sua Playlist</h2>  

                Insira o nome da sua Playlist:
                <input 
                placeholder={"digite aqui..."}
                value={this.state.name}
                onChange={this.handleNome}
                
                />          
                <button onClick={this.adicionarPlaylist}>ADICIONAR</button>
          </div>
       )}

} 