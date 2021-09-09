import React from 'react';
import styled from 'styled-components';
const bigcardcontainer = styled.body`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const bigcardcontainerimg = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const bigcardcontainerh4 = styled.h4`
    margin-bottom: 15px;
`

const bigcardcontainerdiv =styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`
function CardGrande(props) {
    return (
        <bigcardcontainer>
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </bigcardcontainer>
    )
}

export default CardGrande;