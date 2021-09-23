import React from 'react'


export default class Etapa1 extends React.Component {
  render () {
    return (
    
        <div>
         <h1> ETAPA 1 - DADOS GERAIS </h1>
        
          <h2>1. Qual seu nome? </h2>
          <input
          value={this.state.InputNome}
          onChange={this.props.OnchangeInputNome}
          placeholder= "nome"
          />
          <h2>2. Qual sua idade? </h2>
          <h2>3. Qual seu e-mail? </h2>
          <h2>4. Qual sua escolaridade ? </h2>
         
        </div>
    )}  
}
      

