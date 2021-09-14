import React from 'react'
import logo from './logo.svg';
import './App.css';
import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'
import Etapafinal from './components/Etapafinal'
//aqui eu importo meus components
class App extends React.Component {

  //aqui abaixo estou criando o states com as informações das etapas envolvidas e dados p/inputs
  states = {
    etapa: 1,
    dados: [{
     valorInputNome: "",
     valorInputIdade: "",
     valorInputEmail: ""
  }],
    InputNome: "",
    InputIdade: "",
    InputEmail: ""
  }

  onChangeInputNome = (event) => {
    this.setState({valorInputNome: event.target.value});
  }
  onChangeInputIdade = (event) => {
    this.setState({valorInputIdade: event.target.value});
  }
onChangeInputEmail = (event) => {
  this.setState({valorInputEmail: event.target.value})
}
//aqui estou c
  renderizarEtapa = () => {
    switch (this.states.etapa) {
      case '1':
        return <Etapa1 />;
      case '2':
        return <Etapa2 />;
      case '3':
        return <Etapa3 />;
      case '4':
        return <Etapafinal />;
      default:
        return <Etapa1 />
    }
  }


  irParaProximaEtapa = () => {
    return (this.state.etapa)
  }

  render() {
    return (
      <div>
        {this.renderizarEtapa()}
        <button onClick={this.renderizaEtapa}> Próxima Etapa </button>
      </div>


    )
  };
}

export default App;

