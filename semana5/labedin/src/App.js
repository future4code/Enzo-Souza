import React from 'react';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import MeuPerfil from './img/MeuPerfil.jpg'
import styled from 'styled-components'


const geral = styled.body`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`

const body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
}`

const container = styled.div`
  width: 40vw;
  margin: 10px 0;
}`

const titulo = styled.h2`

  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`



function App() {
  return (

    <body>
      <container>
        <titulo>Dados pessoais</titulo>
        <CardGrande 
          imagem={MeuPerfil}
          nome="Enzo Emiliano" 
          descricao="Oi, eu sou o Enzo Emiliano. 
          Homem trans, 25 anos, bartender, tec. em rádio e televisão. Aluno de Dev Web na Labenu."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </container>

      <container>
      <CardPequeno
      email="enzoemiliano96@gmail.com"
      imagem1="https://cdn-icons-png.flaticon.com/512/4615/4615936.png"
      endereco="Av. Recife, Estância, PE."
      imagem="https://cdn-icons-png.flaticon.com/512/4615/4615970.png"
      />
      </container>

      <container>
        <titulo></titulo>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </container>

      <container>
        <titulo>Minhas redes sociais</titulo>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </container>
    </body>
  );
}

export default App;
