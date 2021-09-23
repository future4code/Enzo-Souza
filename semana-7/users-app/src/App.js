import React from 'react';
import TelaCadastro from './components/TelaCadastro/TelaCadastro'
import TelaListaUsuario from './components/TelaListaUsuario/TelaListaUsuario'
import axios from 'axios'

  
   export default class App extends React.Component {
    //  definindo meu estado atual.
      state = {
       telaAtual: "cadastro"
      }

      
// aqui crio uma função e um switch case para a mudança de tela.{condição}
      escolheTela = () => {
        switch(this.state.telaAtual){
          case "cadastro":
            // passando função por props/botao para 
            return <TelaCadastro irParaLista={this.irParaLista} />
            case "lista":
              return <TelaListaUsuario irParaCadastro={this.irParaCadastro} />
              default:
                return <div> Erro! </div>
        }
      }
// criei função para ir para cadastro/lista.
      irParaCadastro = () => {
        this.setState({telaAtual: "cadastro"})
      }

      irParaLista = () => {
        this.setState({telaAtual: "lista"})
      }

    
    render() {
          return(
            <div>
               {/* aqui estou chamando a página de lista e abaixo a de Registro */}
             {this.escolheTela()}
            </div>         
          )
    }
      
}