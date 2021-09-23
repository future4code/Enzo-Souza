import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`


class App extends React.Component {
 state={

    pessoas: [

    {
      nome: 'Paulinha',
      fotoPerfil: 'https://i.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY',
      fotoPost: 'https://picsum.photos/200/150'
    },
    {
      nome: 'Fulaninha',
      fotoPerfil: 'https://i.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY',
      fotoPost: 'https://i.picsum.photos/id/186/200/200.jpg?hmac=bNtKzMZT8HFzZq8mbTSWaQvmkX8T7TE47fspKMfxVl8'
    },
    {
      nome: 'Bananinha',
      fotoPerfil:'https://picsum.photos/id/237/200/300',
      fotoPost: 'https://picsum.photos/seed/picsum/200/300'
    }
    ],

      valorInputNome: "",
      valorInputfotoPerfil: "",
      valorInputfotoPost: ""
  }

  adicionaPessoa = () => {
    const novaPessoa = {
      nome: this.state.valorInputNome,
      fotoPerfil: this.state.valorInputfotoPerfil,
      fotoPost: this.state.valorInputfotoPost
    }
  const adicionandoNovasPessoas = [...this.state.pessoas, novaPessoa];
      this.setState( {pessoas: novaPessoa });
    }

    onChangeInputNome = (event) => {
      this.setState({valorInputNome: event.target.value});
    }
    onChangeInputFotoPerfi = (event) => {
    this.setState({valorInputfotoPerfil: event.target.value});
  }
    onChangeInputFotoPost = (event) => {
      this.setState({valorInputfotoPost: event.target.value});
    }
         
  render() {
    const listaDeUsuarios = this.state.pessoas.map((pessoa) => { 
    return (
      <div>
      
            <Post
            nomeUsuario={pessoa.nome}
            fotoUsuario={pessoa.fotoPerfil}
            fotoPost={pessoa.fotoPost}
           /> 
          
       
          <div>
            <input
            value={this.state.valorInputNome}
            onChange={this.onChangeInputNome}
            placeholder={"Nome"}
            />
            <input 
            value={this.state.valorInputfotoPerfil}
            onChange={this.onChangeInputFotoPerfi}
            placeholder={"Foto Perfil"}      
            />
            <input 
            value={this.state.valorInputfotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"Foto Post"}
            />
              

        <button onClick={this.adicionaPessoa}>Adicionar</button>
          </div>  
       </div> 
         
            )
              });

   return (
     <div> {listaDeUsuarios} </div>
   )
      
    
  }

}
export default App;

