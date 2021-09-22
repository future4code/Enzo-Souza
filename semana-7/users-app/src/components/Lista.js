import React from 'react';
import axios from 'axios';
 

    // const usuariosDiv = styled.div `
    // display: flex;
    // flex-direction: column;
    // width: 20%;
    // margin: 0 auto;
    // padding: 30px;
    // `
    export default class Lista extends React.Component {
       render() {
            const listaUsuarios = this.props.listaUsuario.map((item, index, array) => {
            return <li key={item.id}>{item.name}</li>          
        })
            return (
                <div>
                    <button> Página de Registro </button>
                    <main>
                        <h2>Usuários Cadastrados:</h2>
                        {listaUsuarios}
                        </main>                
                </div>
            );
        }



    }