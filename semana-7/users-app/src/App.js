  import logo from './logo.svg';
  import './App.css';
  import React from 'react';
  import { render } from '@testing-library/react';
  import axios from 'axios';
  import Lista from './components/Lista'
  import Registro from './components/Registro'
  

 


 
  const headers = {
    headers: {
      Authorization: "enzo-souza-turma"
    }
  
  };
 

   export default class App extends React.Component {
      state = {
        listaUsuario:[],
        inputUsuario: "",
        inputEmail: ""
      }

      componentDidMount() {
        this.getAllUsers()
      }
      
      onChangeInputUsuario = ((event) => {
        this.setState({inputUsuarios: event.target.value})
      })
      onChangeInputEmail = ((event) => {
        this.setState({inputEmail: event.target.value})
      })

      createUsers = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        const body = {
          name: this.state.inputUsuario,
          email: this.state.inputEmail,
        }

        axios.post(url,body,headers)
        .then((resultado) => {
          this.setState({inputUsuario: "", inputEmail: ""})
          this.getAllUsers();
        })
        .catch((erro) => {
           console.log("erro!")
        })
      }
      
      
    getAllUsers = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios
        .get(url, headers)
        .then((resultado) => {
          console.log({listaUsuario: resultado.data})
          this.setState({listaUsuario: resultado.data})
        })

        .catch((erro) => {
          alert("erro!")
        })
      }

    
    render() {
          return(
            <div>
              <Registro 
              inputUsuario={this.state.inputUsuario}
              inputEmail={this.state.inputEmail}
              onChangeInputUsuario={this.onChangeInputUsuario}
              onChangeInputEmail={this.onChangeInputEmail}
              listaUsuarios={this.state.listaUsuario}
              createUsers={this.createUsers}
              />
              <hr />
              <Lista 
              inputUsuario={this.state.inputUsuario}
              inputEmail={this.state.inputEmail}
              onChangeInputUsuario={this.onChangeInputUsuario}
              onChangeInputEmail={this.onChangeInputEmail}
              listaUsuario={this.state.listaUsuario}
              createUsers={this.createUsers}
              />
            </div>         
          )
    }
      
}