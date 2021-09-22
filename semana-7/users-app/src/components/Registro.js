import React from 'react'
import axios from 'axios';

// const registroContainer = styled.div `
// display: flex;
// flex-direction: column;
// width: 20%;
// margin: 0 auto;
// padding: 30px;
// `


export default class Registro extends React.Component {
    render() {
        return (
            <div>
                <button>Ir para lista de Usuários</button>
                <main>
                 <label>Nome</label>
                    <input 
                        value={this.props.inputUsuario}
                        onChange={this.props.oninputUsuario}
                        />
                    <label>E-mail</label>
                    <input
                        value={this.props.inputEmail}
                        onChange={this.props.onChangeinputEmail}
                        />
                        <button onClick={() =>this.props.createUser()}>salvar</button>
                </main>
            </div>

        )
    }
}